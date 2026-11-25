# Security and Privacy Requirements

## Product controls

- Parent-managed profiles and server-enforced relationship checks.
- Least-privilege role access; no public student profile by default.
- Data minimization: collect only the data needed for learning and account management.
- Explicit, revocable consent before audio recording or AI assistance.
- No child-targeted advertising, open stranger messaging, or unnecessary behavioral profiling.
- Security logs must exclude personal data and secrets.

## Retention and deletion

Deleting a parent account must use an audited service transaction. It must either transfer each student profile to another verified parent or erase the profile and associated learner data. Direct deletion of a parent-child link is restricted to prevent orphaned child records. Consent records retain a policy version and revocation actor while allowing erased parent accounts to be detached.

## Preconditions for launch

Legal review must determine jurisdictions, parental-consent process, data retention, deletion/export workflows, processor agreements, and incident response obligations. Technical controls alone do not establish COPPA, GDPR, or UK GDPR compliance.
