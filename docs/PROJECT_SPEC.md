# Career Support Website — Project Specification

## 1. Purpose

An AI-powered **personal job-search platform** for college students and fresh graduates.

The website helps users:

- Find relevant jobs
- Decide which opportunities are worth applying to
- Understand why a job matches their profile
- Identify missing skills
- Track applications
- Avoid missing deadlines
- Manage resumes
- Get personalized AI career guidance
- Prepare for interviews through HirePrep

---

## 2. Core Value

The platform should not simply show users more jobs.

It should help them answer:

1. What jobs should I apply for?
2. Why am I a good match?
3. What skills am I missing?
4. Did I apply?
5. When is the deadline?
6. What should I do next?

---

## 3. Main User Flow

Landing Page  
→ Login/Register  
→ Create Profile  
→ Upload Resume  
→ Dashboard  
→ Find/Recommended Jobs  
→ View Job  
→ Apply on Original Website  
→ Add Application to Tracker  
→ Track Status & Deadline  
→ Interview  
→ Prepare through HirePrep

---

## 4. Core Features

### Authentication

- Email/password
- Google login

### Profile

User provides:

- Target job roles
- Skills
- Experience level
- Salary range

### Resume

- Upload multiple resumes
- Store resumes
- AI resume analysis:
  - Resume score
  - Skills
  - Strengths
  - Weaknesses
  - Missing skills
  - Improvement suggestions
  - ATS compatibility

### Jobs

- Start with **LinkedIn** as the intended job source
- Search jobs
- Filter jobs
- Sort jobs by:
  - Match %
  - Newest
  - Deadline
- Save jobs
- Apply button opens the original job website

### AI Job Recommendations

Recommend jobs based on the user's:

- Resume
- Skills
- Target roles
- Experience level
- Salary range

Each recommendation should show:

- Match %
- Matching skills
- Missing skills
- Why the job is recommended

### Application Tracker

Main view: **All Applications**

Applications can be filtered by:

- Saved
- Applied
- Online Assessment
- Interview
- Offer
- Rejected
- Missed Deadline

Store:

- Company
- Role
- Application URL
- Application date
- Deadline
- Status
- Notes

The user applies on the original website and then manually marks the
application as Applied.

When a user pastes an application/job URL, the system should try to extract
available job information and allow the user to confirm/edit it.

### Dashboard

Show:

- Application overview
- Upcoming deadlines
- Recommended jobs
- Recently added jobs
- Missed applications
- AI career suggestions

### AI Career Assistant

The AI should use the user's career data to answer personalized questions
about:

- Which jobs to apply for
- Skills to learn
- Career direction
- Resume improvement
- Projects to build
- Application prioritization
- General career questions

### HirePrep Integration

Interview preparation will be handled by the existing **HirePrep** project.

Career Support should pass:

- Company
- Role
- Job description
- Resume
- Skills
- Application details

to HirePrep.

---

## 5. AI Principle

AI should use the user's **actual career data** to provide personalized,
actionable recommendations rather than generic career advice.

AI should not invent missing information such as:

- Job deadlines
- Salary
- Job requirements
- Application status
- User skills

If information is unavailable, it should be clearly shown as unavailable.

---

## 6. Job Data

LinkedIn will be the first intended job source.

The implementation must use an available and permitted method of obtaining
job data.

Do not assume unrestricted scraping or API access.

The architecture should allow additional job sources to be added later.

---

## 7. Application & Deadline Handling

Users apply through the original job/application website.

The platform does not submit applications on behalf of users.

When the user adds a job/application URL, the system should try to extract:

- Company
- Role
- Job description
- Posting date
- Deadline
- Application URL

The user can review and edit extracted information before saving.

If a deadline is unavailable:

- Leave it blank.
- Do not estimate it.

The dashboard should show upcoming and missed deadlines.

No notifications in the MVP.

---

## 8. MVP

### Include

- Authentication
- Career profile
- Multiple resumes
- AI resume analysis
- LinkedIn job search
- Job search/filter/sort
- AI job recommendations
- Job matching
- Application tracker
- Deadline tracking
- Dashboard
- AI Career Assistant
- HirePrep integration

### Later

- Historical job postings
- Other job sources such as Naukri/Indeed
- Notifications
- Job Description Analyzer
- Resume tailoring
- Advanced AI career predictions

---

## 9. Tech Stack

**Frontend:** React + JavaScript

**Backend:** Node.js + Express

**Database:** PostgreSQL

**AI:** OpenAI API

**HTTP requests:** Axios

**Authentication:** JWT + Google OAuth

---

## 10. Important Rules

- Keep the architecture simple.
- Build the MVP before future features.
- AI API keys must stay on the backend.
- Users must only access their own data.
- Do not invent unavailable job information.
- The user remains responsible for submitting job applications.
- Design the system so future job sources and features can be added without
  unnecessarily complicating the MVP.