# Engineering Guide

## Scope and safety

- Treat this as a child-focused product: minimize data collection and protect every student record through parent/role authorization.
- Do not add production integrations, collect recordings, or claim regulatory compliance without an approved policy and legal review.
- Keep curriculum content in structured data, not presentation components.
- Preserve existing work and make focused changes only.

## Architecture

- Use feature modules under `src/features`; keep route handlers thin and place domain rules in feature services.
- Validate untrusted input at server boundaries. Never rely on client-side role checks.
- Use Prisma migrations for schema changes. Do not edit applied migrations.
- Reuse the activity configuration model rather than adding page-specific exercise logic.

## Quality gate

Run `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run db:validate`, and `npm run build` when relevant. Report only commands actually run.

## Documentation

Update the relevant document in `docs/` when architecture, schema, security, or implementation scope changes. Significant architectural decisions require an ADR under `docs/architecture/decisions/`.
