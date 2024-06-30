# Project Setup

This project is structured into two main folders: `client` and `server`. The `client` folder contains the Vite + React + TypeScript setup, and the `server` folder contains the Node.js + TypeScript setup.

## Table of Contents
1. [Client Setup (Vite + React + TypeScript)](#client-setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Project](#running-the-project)
    - [Building the Project](#building-the-project)
2. [Server Setup (Node.js + TypeScript)](#server-setup)
    - [Prerequisites](#prerequisites-1)
    - [Installation](#installation-1)
    - [Running the Server](#running-the-server)
    - [Building the Server](#building-the-server)
3. [Scripts](#scripts)

## Client Setup

### Prerequisites
- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.22.x)

### Installation
1. Navigate to the `client` folder:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Project
To start the development server:
```sh
npm run dev
# or
yarn dev
```
This will start the Vite development server and you can access the project at `http://localhost:3000`.

### Building the Project
To build the project for production:
```sh
npm run build
# or
yarn build
```
The built files will be output to the `dist` directory.

### Configuration
Vite configuration can be found and modified in `vite.config.ts`.

React project settings and TypeScript configurations can be modified in `tsconfig.json`.

---

## Server Setup

### Prerequisites
- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.22.x)

### Installation
1. Navigate to the `server` folder:
   ```sh
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Server
To start the server in development mode:
```sh
npm run dev
# or
yarn dev
```
This will use `ts-node-dev` to watch for file changes and restart the server automatically.

### Building the Server
To compile the TypeScript files to JavaScript:
```sh
npm run build
# or
yarn build
```
The compiled files will be output to the `dist` directory.

### Configuration
TypeScript configuration for the server can be found in `tsconfig.json`.

---

## Scripts

### Client
- `npm run dev` / `yarn dev`: Starts the Vite development server.
- `npm run build` / `yarn build`: Builds the React application for production.
- `npm run serve` / `yarn serve`: Serves the built React application.

### Server
- `npm run dev` / `yarn dev`: Starts the Node.js server in development mode using `ts-node-dev`.
- `npm run build` / `yarn build`: Compiles the TypeScript files to JavaScript.
- `npm start` / `yarn start`: Starts the compiled Node.js server from the `dist` directory.

---
