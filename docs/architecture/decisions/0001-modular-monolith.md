# ADR 0001: Modular monolith

**Status:** Accepted

BrightPath will use a Next.js modular monolith with PostgreSQL and Prisma for the initial release. It keeps deployment and security boundaries simple while preserving feature modules for identity, curriculum, activities, and mastery. Microservices are deferred until a measured operational need exists.
