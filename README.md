# Thoughts & Tea Club Website

A React application for a tea community with sections for About, Events, Gōngfū Chá, Tea Crew, and Join Us.

## Development with Nix

This project uses Nix flakes for reproducible builds and development environments.

### Prerequisites

- [Nix package manager](https://nixos.org/download.html)
- Optional: [direnv](https://direnv.net/) for automatic environment loading

### Development Commands

```bash
# Enter development environment
nix develop

# Start development server (inside nix shell)
npm start

# Run tests
npm test
```

### Building

```bash
# Build the application
nix build

# Build the container image
nix build '.#container'

# Load the container into Docker
docker load < result
```

## Traditional NPM Commands

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Project Structure

The project is a React application with TailwindCSS for styling.

- `src/components/` - React components
- `public/` - Static assets

## Styling

The project uses TailwindCSS with custom tea-themed colors defined in `tailwind.config.js`.
