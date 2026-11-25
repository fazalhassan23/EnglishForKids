# System Architecture

## Decision

BrightPath uses a modular Next.js monolith with TypeScript, PostgreSQL, and Prisma. This provides a single deployable system for the initial release while preserving feature boundaries for later integrations.

## Modules

- `identity`: parent accounts, roles, consent, and authorization.
- `learner`: profiles, enrollments, and learner-visible progress.
- `curriculum`: versioned levels, courses, units, lessons, skills, and publishing.
- `activities`: configuration-driven exercise rendering and answer validation.
- `mastery`: configurable, explainable readiness and review recommendations.
- `administration`: controlled curriculum authoring and audit trails.

## Key constraints

Student profiles are parent-managed. Curriculum is data-driven. Authentication and all authorization checks occur on the server. AI, speech, email, and object storage are adapters rather than core dependencies.

## ADRs

Record material changes under `docs/architecture/decisions/` before implementation.
