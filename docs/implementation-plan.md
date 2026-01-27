# SavePointWeb — Technical Implementation Plan

## Goals

Build a web client for the SavePoint REST API that focuses on:

- Home “Google-style” search entry
- IGDB search results with grid/list views + pagination
- Game details that composes of IGDB metadata (screenshots/description, genre, etc)
- Collection browsing with filters, search, grid/list views + pagination
- Platforms browsing with navigation into filtered game collection
- Mobile-responsive UI

---

## Technology Decisions

### Frontend

- **React + Vite + TypeScript**
- **Material UI (MUI)** for component library
- **tss-react/mui** for typed `makeStyles` CSS-in-JS classes
  - Use this as the primary styling pattern
  - Use MUI `sx` only for small, one-off tweaks
- **Redux Toolkit** for **global UI state only**
  - View mode (grid/list) per page
  - Global toast/snackbar queue (success/error)
  - Persist Redux UI preferences to `localStorage`
- **Axios** for all backend API requests
  - Centralise config in one axios client (`baseURL`, interceptors, error mapping)
  - Build a small `api/*` layer (functions or hooks) per endpoint

### Data layer approach (REST)

The frontend calls the SavePoint REST API directly using Axios.

### Conventions

- CamelCase for all variables, functions & file names

---

## REST Endpoints

Source of truth: [SavePointAPI Endpoints](./endpoints.md).

Notes:

- API returns media as **full URLs**.
- Pagination uses **page/limit**.

---

## Pages + Routing

Routes:

- `/` — Home page
- `/search?q=...&platform=...&page=...&limit=...` — Search page (IGDB results)
- `/game/:igdbId` — Game details page
- `/collection?q=...&platform=...&page=...&limit=...` — Collection page
- `/platforms` — Platforms page

### Page requirements

#### Home page

- Entry point
- Centred search bar (Google-like)
- Submit navigates to `/search?q=...`
- Debounced suggestions whilst typing

**Backend endpoints:**
- **POST** - `/api/game/search`

#### Search page

- Directed here after submitting the home search
- Reads URL params: `q`, `platform`, `page`, `limit`
- Shows IGDB results for the query
- Default grid view:
  - Grid of game images
  - Hover reveals game title
- Toggle: grid view vs list view
- Pagination (`page`/`limit`)

**Backend endpoints:**
- **POST** - `/api/game/result?search=&platform=&page=&limit=`
  - Query params:
    - `search` (required)
    - `platform` (optional)
    - `page` (optional)
    - `limit` (optional)

#### Game details page

- Clicking a game on Search navigates here
- Route param: `igdbId`
- Shows IGDB game data fetched from the IGDB details endpoint
- User can add game to collection:
  - “Add” button opens a modal
  - Modal fields:
    - Title (pre-populated from IGDB; editable)
    - Condition
    - Platform
    - Notes (optional)

- **TODO**: Be able to view games already in collection, show multiple game options if same game on multiple platforms in collection + also be able to edit game from here. Need to update API to support this.

**Backend endpoints:**
- **POST** - `/api/game/game-details/:igdbId`
- **PUT** - `/api/game` (TODO)

#### Collection page

- Shows user’s saved game collection
- Reads URL params: `q`, `platform`, `page`, `limit`
- Search bar at top (binds to `q`; empty string shows all)
- Filter by platform
- Default grid view:
  - Grid of game images
  - Hover reveals game title
- Toggle: grid view vs list view
- Pagination (`page`/`limit`)


**Backend endpoints:**
- **GET** - `/api/game?search=&platform=&page=&limit=`
  - Query params:
    - `search` (optional; defaults to fetching “all games”)
    - `platform` (optional)
    - `page` (optional)
    - `limit` (optional)

#### Platforms page

- Shows list of platforms
- Grid/list toggle behaviour
- Clicking a platform navigates to the Collection page with `platform` query parameter
  - e.g. `/collection?search=&platform=original_xbox&page=1&limit=6`

**Backend endpoints:**
- **GET** - `/api/platforms`

---

## State Management

### Redux Toolkit (UI state only)

Redux used for:

- View mode preferences (persisted):
  - Search page: `grid | list`
  - Collection page: `grid | list`
  - Platforms page: `grid | list`
- Global UI utilities:
  - Toast/snackbar queue for success + error updates
    - Adding a game to the collection
    - (TODO) Rating a game
    - API/network errors
- Persistence:
  - Persist UI preferences (view modes) to `localStorage`

#### Toast/snackbar events

Standardize toast usage so feedback is consistent across pages.

- `success`: added game to collection
- `success`: updated game (TODO: rating/edit flow)
- `error`: API/network error

### Server data (Axios)

Use Axios for:

- Platforms list
- IGDB search results
- Fetch from collection
- IGDB game details
- Game mutations: create/update/delete saved games

Implementation notes:

- Put Axios instance in `src/api/client.ts` (or similar)
- Put request functions in `src/api/*` grouped by resource (`games`, `platforms`)

---

## Implementation Milestones

### Milestone 1 — Project setup + routing + MUI shell

- [x] Initialise Vite React TS project
- [x] Add routes: `/`, `/search`, `/game/:igdbId`, `/collection`, `/platforms`
- [ ] Add MUI theme
- [ ] Set up `tss-react/mui` styling conventions
- [ ] Add env var for API base URL, e.g. `VITE_API_BASE_URL`

**Exit criteria:** app boots, routes render, MUI theme applied.

### Milestone 2 — GitHub Actions CI

- [ ] Add workflow for:
  - [ ] typecheck
  - [ ] lint
  - [ ] build
  - [ ] test

**Exit criteria:** Pipeline runs when pushing.

### Milestone 3 — Axios client + API module layer

- [ ] Create a shared Axios client:
  - [ ] `baseURL`
  - [ ] Error handling
- [ ] Add API modules for:
  - [ ] Platforms
  - [ ] IGDB search results
  - [ ] IGDB game details
  - [ ] Fetch from collection
  - [ ] Create/update/delete saved game

**Exit criteria:** can fetch platforms and render data in simple lists.

### Milestone 4 — Home page

- [ ] Build centered search layout
- [ ] On submit navigate to `/search?q=...`
- [ ] Typeahead suggestions (debounced)

**Exit criteria:** search submit navigates; typeahead suggestions work.

### Milestone 5 — Search page (IGDB results)

- [ ] Results grid/list components
- [ ] Hover title behaviour in grid view
- [ ] View toggle persists (Redux UI state)
- [ ] Pagination controls (`page`/`limit`)

**Exit criteria:** results display correctly in both views; paging works.

### Milestone 6 — Game details page

- [ ] Fetch IGDB details by `igdbId`
- [ ] Render IGDB metadata + media
- [ ] Implement “Add to collection” modal and `POST /api/game`

**Exit criteria:** detail renders; can add game to collection.

### Milestone 7 — Collection page

- [ ] Fetch from collection (`GET /api/game`)
- [ ] Add top search bar (binds to `search`)
- [ ] Add platform filter
- [ ] Add grid/list toggle
- [ ] Add pagination (`page`/`limit`)

**Exit criteria:** collection browsing works with filters and paging.

### Milestone 8 — Platforms page

- [ ] Fetch platforms list
- [ ] Add grid/list toggle
- [ ] Platform click navigates to `/collection?search=&platform=...&page=1&limit=6`

**Exit criteria:** platforms browse works; navigation applies filter.

---

## Testing Strategy

- **Jest** for unit tests and mocking
- Component tests (Jest + React Testing Library) for:
  - Home search submit and typeahead suggestions
  - Search page view toggle + paging
  - Game details add-to-collection flow (mock API)
  - Collection page filters + paging
- Basic reducer tests for Redux UI state
