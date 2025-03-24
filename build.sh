#!/bin/bash

# Print Node.js and npm versions for debugging
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Install dependencies for the main project
echo "Installing main project dependencies..."
npm ci || npm install

# Build the project
echo "Building the project..."
npm run build

echo "Build process completed!" 