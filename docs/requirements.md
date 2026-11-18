

# S3 — Requirements Documentation

## 1. Project Overview

The existing project is a Next.js Dashboard application

for managing customers, invoices, and revenue.

The proposed new customer brief is a Finnish-learning

application called "Paska, Paskempi, Paskin".

The dashboard is the existing application. The Finnish-learning

features are proposed requirements, not completed features.

## 2. Existing Functional Requirements

| ID | Requirement | Status |

|---|---|---|

| FR-01 | Display a dashboard overview | Implemented in course project |

| FR-02 | Display customers | Implemented in course project |

| FR-03 | Display invoices | Implemented in course project |

| FR-04 | Search invoices | Implemented in course project |

| FR-05 | Navigate between dashboard pages | Implemented in course project |

| FR-06 | Create invoices | Needs verification |

| FR-07 | Edit invoices | Needs verification |

| FR-08 | Delete invoices | Needs verification |

| FR-09 | Authenticate users | Needs verification |

| FR-10 | Protect dashboard pages | Needs verification |

Statuses are based on previous project work and should

be checked against the current application.

## 3. Non-Functional Requirements

### NFR-01 — Performance

The main dashboard should load within 3 seconds under

normal network conditions.

### NFR-02 — Accessibility

Forms should have visible labels, keyboard navigation,

and understandable error messages.

### NFR-03 — Security

Only authenticated and authorized users should access

protected customer and invoice information.

### NFR-04 — Data Protection

Credentials must not be committed to GitHub. Personal

information must be stored securely and only collected

when necessary.

### NFR-05 — Usability

The interface should work on desktop and mobile devices

and provide clear navigation and feedback.

## 4. Proposed Finnish-Learning Features

| ID | Proposed feature | Status |

|---|---|---|

| NEW-01 | Browse Finnish lessons | Not implemented |

| NEW-02 | Search a Finnish expression dictionary | Not implemented |

| NEW-03 | View meanings and usage examples | Not implemented |

| NEW-04 | Read Finnish culture and usage tips | Not implemented |

| NEW-05 | Complete interactive quizzes | Not implemented |

| NEW-06 | Receive quiz feedback and scores | Not implemented |

## 5. Identified Gaps

1. The Finnish-learning features do not exist in the dashboard.

2. Customer answers are needed to confirm the target users.

3. Language support and dictionary content need agreement.

4. Account and learning-progress requirements are unclear.

5. Quiz scoring and feedback need customer confirmation.

6. Existing invoice and authentication functions need verification.

7. Desktop and mobile mockups need customer feedback.

## 6. Acceptance and Verification

Each new user story will include Given / When / Then

acceptance criteria.

The customer will confirm the feature scope before

implementation. Functional requirements will be

verified through manual or automated testing.