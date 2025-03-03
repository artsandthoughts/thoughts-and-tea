{
  description = "Thoughts and Tea - A React application for a tea community";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        
        # Create the nginx config similar to what's in the Dockerfile
        nginxConf = pkgs.writeText "thoughts-and-tea.conf" ''
          server {
            listen 80;
            server_name localhost;
            root /usr/share/nginx/html;
            index index.html;

            location / {
              try_files $uri $uri/ /index.html;
            }

            location /static/ {
              expires 1y;
              add_header Cache-Control "public";
            }
          }
        '';
      in
      {
        # Development shell with exact Node version from Dockerfile
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_20
            nodePackages.npm
          ];
          
          shellHook = ''
            echo "Thoughts and Tea development environment"
            echo "Run 'npm install' to install dependencies"
            echo "Run 'npm start' to start the development server"
          '';
        };

        # Packages output
        packages = {
          default = self.packages.${system}.thoughts-and-tea;
          
          # The built React app
          thoughts-and-tea = pkgs.buildNpmPackage {
            pname = "thoughts-and-tea";
            version = "0.1.0";
            
            src = ./.;
            
            # This will need to be updated with the correct hash
            # Run `nix flake update` after initial creation to get the correct hash
            npmDepsHash = "sha256-0000000000000000000000000000000000000000000=";
            
            buildPhase = ''
              export HOME=$(mktemp -d)
              npm run build
            '';
            
            installPhase = ''
              mkdir -p $out
              cp -r build/* $out/
            '';
          };
          
          # Docker image equivalent
          container = pkgs.dockerTools.buildLayeredImage {
            name = "thoughts-and-tea";
            tag = "latest";
            
            contents = [
              pkgs.nginx
              # The built app
              (pkgs.runCommand "app-with-nginx-config" {} ''
                mkdir -p $out/etc/nginx/conf.d
                mkdir -p $out/usr/share/nginx/html
                
                # Copy the built app
                cp -r ${self.packages.${system}.thoughts-and-tea}/* $out/usr/share/nginx/html/
                
                # Remove default nginx config and add our custom one
                rm -f $out/etc/nginx/conf.d/default.conf
                cp ${nginxConf} $out/etc/nginx/conf.d/default.conf
              '')
            ];
            
            config = {
              Cmd = [ "nginx" "-g" "daemon off;" ];
              ExposedPorts = {
                "80/tcp" = {};
              };
            };
          };
        };
        
        # Add app as an app that can be run with `nix run`
        apps.default = {
          type = "app";
          program = "${pkgs.nodejs_20}/bin/node";
        };
      }
    );
}