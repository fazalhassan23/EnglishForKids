# Requirements Traceability Matrix

| Requirement                     | Design evidence                                         | Planned verification                      | Milestone |
| ------------------------------- | ------------------------------------------------------- | ----------------------------------------- | --------- |
| Parent-managed child profiles   | `User`, `StudentProfile`, and relationship schema       | Authorization integration tests           | 2         |
| Modular curriculum              | Level-to-activity hierarchy                             | Admin CRUD and publication tests          | 3         |
| Reusable interactive activities | `Activity.templateKey` and JSON configuration           | Renderer and scoring unit tests           | 4         |
| Meaningful progress             | Attempts, progress, and skill mastery models            | Learner workflow tests                    | 4         |
| Adaptive review                 | Explainable mastery policy                              | Mastery service unit tests                | 4         |
| Child safety and consent        | Consent and audit models                                | Authorization and consent tests           | 2         |
| Accessible learning             | Semantic shell and accessible alternatives per activity | Automated and manual accessibility checks | 4         |
