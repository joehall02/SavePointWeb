# SavePoint Web
[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](#)
[![MUI](https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=fff)](#)
[![React Query](https://img.shields.io/badge/React%20Query-FF4154?logo=reactquery&logoColor=fff)](#)
[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff)](#)

SavePointWeb is the frontend for SavePoint, a platform for managing a personal physical video game collection. It talks to the [SavePoint Backend](https://github.com/joehall02/SavePoint) to search for games via the IGDB API and to view, add, edit and delete games in your own collection.

---

## 1. 🚀 Tech Stack

- **Language & Build Tooling**
  - TypeScript
  - Vite 7

- **UI Framework**
  - React 19

- **Component Library & Styling**
  - MUI (`@mui/material`, `@mui/icons-material`) 7
  - Emotion (`@emotion/react`, `@emotion/styled`) as the styling engine
  - `tss-react` for typed, co-located styles
  - `@fontsource/roboto` for the Roboto font

- **Routing**
  - `react-router-dom` 7

- **Data Fetching**
  - `@tanstack/react-query` for server-state caching and fetching
  - `axios` for HTTP requests to the SavePoint API

- **Tooling & Quality**
  - ESLint 9 with plugins for React, React Hooks, JSX a11y, import sorting and unused-import removal
  - `husky` for Git hooks

- **Containerisation**
  - Dockerfile (Vite build → nginx static serve)

---

## 2. 📦 Features

- **IGDB Game Search**
  - Search the external IGDB catalogue via the backend and browse results.
  - View detailed game information (cover art, description, media, release dates and region flags).

- **Personal Collection Management**
  - View your own collection with cover art and details.
  - Add games to your collection, edit existing entries, and remove games — via dialog system.
  - Store game details such as condition, notes, rating, box-included flag and platform.

- **Platform Catalogue**
  - Browse the list of supported platforms (PlayStation, Xbox, Nintendo, PC, etc.).
  - Filter search and collection results by platform.

- **Search, Filtering & Pagination**
  - Debounced search bar for querying games.
  - Platform filtering via a dedicated filter component.
  - Pagination synced to URL query parameters.

- **Media & Presentation**
  - Media carousel for screenshots and video (including no cookies YouTube embeds).
  - Region flags.
  - Toggleable grid/list layout for results.

- **Theming**
  - Light and dark theme support via a theme-mode provider (`localStorage` persistence).

- **Responsive & Touch Aware**
  - Screen-size detection and touch-screen detection to adapt the UI.

- **API Layer**
  - Singleton `SavePointApiManager` wrapping axios with a centralised error-handling interceptor.
  - Normalised API errors (including network/unknown error fallbacks).

- **Docker**
  - Multi-stage build that compiles the app with Vite and serves the static bundle with nginx.
  - nginx configured for gzip compression, security headers, aggressive asset caching and SPA fallback routing.

---

## 3. 🛠️ Getting Started

### 3.1 Prerequisites

- Node.js 24.x
- Node Package Manager
- A running instance of the [SavePoint Backend](https://github.com/joehall02/SavePoint)
- Docker (optional)

### 3.2 Installation

```bash
npm ci
```

### 3.3 Environment configuration

There is an example env file in the project root:

```bash
cp .env.example .env
```

The key variable is:

- `VITE_API_BASE_URL` — the base URL of the SavePoint backend API (e.g. `http://localhost:5050`).

### 3.4 Running in development

```bash
npm run dev
```

### 3.5 Building and previewing a production bundle (without Docker)

```bash
npm run build
npm run preview
```

### 3.6 Linting & type-checking

```bash
npm run lint
npm run typecheck
```

### 3.7 Running with Docker

The app ships with a multi-stage `Dockerfile` that builds the Vite bundle and serves it with nginx.

```bash
# Build the image, passing the backend URL as a build arg
docker build \
  --build-arg VITE_API_BASE_URL=http://localhost:5050 \
  -t savepoint-web .

# Run the container, mapping host port 8080 to the container's port 80
docker run -d -p 8080:80 --name savepoint-web savepoint-web
```

The app will be available at `http://localhost:8080`.

---

## 4. 📄 Licence

This project is licenced under the [MIT Licence](LICENCE).
