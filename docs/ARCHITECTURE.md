# Architecture

## 1. System Architecture

React Frontend
        ↓
      Axios
        ↓
Express Backend
        ↓
 ┌──────┼──────────────┐
 ↓      ↓              ↓
Prisma  OpenAI    Job Data Source
 ↓
PostgreSQL


## 2. Frontend

Tech:
- React + Vite
- Tailwind CSS
- shadcn/ui
- Axios

Structure:

frontend/src/
├── components/
├── pages/
├── services/
│   ├── authApi.js
│   ├── jobsApi.js
│   ├── applicationsApi.js
│   ├── resumeApi.js
│   └── profileApi.js
├── context/
└── App.jsx

Responsibilities:
- UI and user interaction
- API communication using Axios
- Frontend input validation
- Application state using useState/useContext initially


## 3. Backend

Tech:
- Node.js
- Express
- Prisma

Structure:

backend/
├── routes/
├── controllers/
├── services/
├── middleware/
├── db/
├── prisma/
├── utils/
└── server.js

Responsibilities:
- routes → API endpoints
- controllers → request/response handling
- services → business logic
- middleware → authentication, validation and error handling
- Prisma → database access


## 4. Authentication

- Email/password authentication
- Google OAuth
- JWT authentication
- JWT stored in HTTP-only cookies
- Protected routes require authentication


## 5. Database

Tech:
- PostgreSQL
- Prisma ORM

Main entities:

User
├── Profile
├── Resume
│   └── ResumeAnalysis
├── Application
└── SavedJob

Job
└── JobMatch

Detailed database design is defined in DATABASE_SCHEMA.md.


## 6. AI Architecture

Frontend
    ↓
Express Backend
    ↓
AI Service
    ↓
OpenAI API

OpenAI is accessed only through the backend.

AI is used for:
- Resume analysis
- Job matching
- Job recommendation explanations
- Missing skill identification
- AI Career Assistant

The backend provides relevant user career data as context to the AI.


## 7. Job Data Flow

External Job Source
        ↓
Backend
        ↓
Clean + Normalize
        ↓
Deduplicate
        ↓
PostgreSQL
        ↓
AI Matching
        ↓
Frontend

During development, mock/sample jobs will be used.

Real job data will use a permitted/authorized source instead of unrestricted LinkedIn scraping.


## 8. Application Flow

User finds a job
        ↓
Opens original job website
        ↓
Applies externally
        ↓
Returns to Career Support
        ↓
Marks application as Applied
        ↓
Application Tracker

Users can also paste a job URL. The backend attempts to extract job details, and the user confirms or edits them before saving.


## 9. Error Handling

Controllers/services can throw errors.

Centralized Express error middleware handles them and returns a consistent API response.

Example:

{
  "success": false,
  "error": "Job not found"
}


## 10. Validation

- Validate input on both frontend and backend.
- Frontend validation provides fast feedback.
- Backend validation is the final authority.


## 11. Logging

- Use console logging during development.
- Use Pino for structured logging before production.


## 12. Security

- Store secrets in environment variables.
- Store JWT in HTTP-only cookies.
- Hash passwords before storing them.
- Never expose API keys to the frontend.
- Validate all backend input.
- Use authentication middleware for protected routes.


## 13. Separation of Responsibilities

Frontend → UI
Routes → API endpoints
Controllers → Request/Response
Services → Business logic
Prisma → Database
AI Service → AI operations

This separation keeps the application easier to understand, test, debug and scale.