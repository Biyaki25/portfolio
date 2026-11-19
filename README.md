# Fieldwork Studio Portfolio

A React single page app for a creative agency to showcase and update its project portfolio.

## Features
- Landing page with a responsive grid of project cards
- Live search (title, category, description)
- Form to add new projects, with validation and an option to remove projects

## Component hierarchy
```
App (state: projects, query)
├── Header
├── SearchBar        (props: query, onQueryChange)
├── ProjectList      (props: projects, onDelete)
│   └── ProjectCard  (props: project, onDelete)
└── ProjectForm      (props: onAddProject; local state: form, error)
```

## Run it
```
npm install
npm run dev     # start the dev server
npm test        # run the tests (Vitest + React Testing Library)
```

## Maintenance
Seed projects live in `src/data.js`. To persist data, swap `initialProjects` for a `useEffect` fetch from a json-server endpoint.