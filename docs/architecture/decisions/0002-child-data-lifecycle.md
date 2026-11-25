# ADR 0002: Child data lifecycle

**Status:** Accepted

Child profiles store an optional age band rather than an exact birth date. Parent links are restricted from direct deletion: an explicit, audited deletion service must transfer guardianship or erase the profile and related records. Consent remains auditable after account deletion through nullable actor references.
