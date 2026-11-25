# Database Schema

The Prisma schema is the executable source of truth: [`prisma/schema.prisma`](../../prisma/schema.prisma).

## Core relationships

```text
User → ParentChildRelationship → StudentProfile
Level → Course → Unit → Lesson → Activity → Question
Lesson ↔ Skill; StudentProfile ↔ SkillMastery
StudentProfile → ActivityAttempt → StudentResponse
```

Curriculum records are structured and publication-aware. `ContentRevision` snapshots provide traceability for lesson changes. `ConsentRecord` stores revocable consent for optional processing such as recordings and AI assistance. `AuditLog` records sensitive administrative actions.

## Migration policy

Schema changes require a reviewed Prisma migration, rollback or forward-recovery plan, and documentation update. Applied shared migrations are immutable.
