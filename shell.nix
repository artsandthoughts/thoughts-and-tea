(import (fetchTarball https://github.com/edolstra/flake-compat/archive/master.tar.gz) {
  src = ./.;
}).defaultNix.devShells.${builtins.currentSystem}.default