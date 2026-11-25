# Development Roadmap

## Milestone 1 — Foundation

Establish repository governance, CI, architecture, Prisma schema, documentation, and accessible application shell. Done when quality gates pass and the schema validates.

### Known release blocker

The current Prisma 6 CLI dependency chain has unresolved high-severity `npm audit` advisories. A Prisma 7 upgrade requires a separately reviewed configuration migration and must be completed before production release or before making dependency audit a blocking CI gate.

## Milestone 2 — Parent and student accounts

Implement parent registration, session management, child profiles, consent controls, owner-scoped authorization, and protected dashboard shell.

## Milestone 3 — Curriculum authoring

Implement administrator-managed levels through activities, validation, draft/publish workflow, lesson revisions, and media references.

## Milestone 4 — Early learner vertical slice

Deliver one complete Letter A lesson with accessible recognition activities, approved audio references, assessment, mastery updates, and parent-visible progress.

## Milestone 5 — Alphabet and early phonics

Extend the validated lesson system across the alphabet and initial phonics curriculum. Each curriculum batch needs educational review.

## Later milestones

Vocabulary and spelling; sentences and grammar; reading and writing; listening, optional speaking, and adaptive revision; teacher tools; then production hardening.
