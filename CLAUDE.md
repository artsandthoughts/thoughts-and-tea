# CLAUDE.md - Thoughts and Tea Codebase Guide

## Build & Development Commands
```bash
# Nix commands
nix develop           # Enter development environment
nix build             # Build the application
nix run               # Run the application
nix build '.#container' # Build container image

# NPM commands (inside nix shell)
npm start             # Start development server
npm run build         # Build for production
npm test              # Run all tests
npm test -- -t "test name" # Run specific test
```

## Code Style Guidelines
- **Component Structure**: Functional components with React hooks
- **Imports**: Group React imports first, then components, then styles
- **Formatting**: Use const for component definitions
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Styling**: TailwindCSS for styling with custom tea-themed colors
- **Colors**: Use tea-red, tea-brown, tea-green, tea-black, tea-white defined in tailwind.config.js

## Project Overview
A React application for a tea community with sections for About, Events, Gōngfū Chá, Tea Crew, and Join Us.

## Nix Configuration
The project uses Nix Flakes for reproducible builds and development environments:
- `flake.nix`: Main configuration file
- `.envrc`: Direnv integration for automatic environment loading
- `shell.nix`: Legacy compatibility for non-flake Nix users