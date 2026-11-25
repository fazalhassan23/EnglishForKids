# BrightPath English

BrightPath English is a child-safe, structured web platform for learning English from letter recognition through advanced foundational literacy.

## Status

Phase 1 foundation. The application shell and data model exist, but authentication, curriculum management, and learning content are not yet implemented.

## Requirements

- Node.js 22 or later
- PostgreSQL 16 or later

## Setup

1. Copy `.env.example` to `.env` and set a local `DATABASE_URL`.
2. Install dependencies with `npm install`.
3. Generate Prisma Client with `npm run db:generate`.
4. Start the application with `npm run dev`.

## Validation

```text
npm run format:check
npm run lint
npm run typecheck
npm test
npm run db:validate
npm run build
```

## Documentation

- [Architecture](docs/architecture/overview.md)
- [Data model](docs/database/schema.md)
- [Roadmap](docs/development/roadmap.md)
- [Privacy and security](docs/security/privacy-requirements.md)
- [Requirements traceability](docs/product/requirements-traceability.md)
