<div align="center">
  <img src="public/images/logo.png" alt="CodeVerse Logo" width="80" />
  <h1>CodeVerse</h1>
  <p>A community-driven Q&A platform for developers — ask questions, share knowledge, and grow together.</p>

  [![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb)](https://www.mongodb.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)
  [![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://code-verse-app.vercel.app/)

  **[Live Demo](https://code-verse-app.vercel.app/) · [GitHub Repository](https://github.com/theShihamAhamed/CodeVerse-app.git)**
</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [API Routes](#api-routes)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Development Server](#running-the-development-server)
- [Key Implementation Details](#key-implementation-details)
- [Screenshots](#screenshots)

---

## Overview

CodeVerse is a full-stack developer Q&A web application inspired by Stack Overflow. It was built as a hands-on project to explore and deeply understand modern Next.js patterns — including the App Router, Server Actions, Server Components, and API Routes — alongside tools like NextAuth.js, MongoDB/Mongoose, and the Vercel AI SDK.

Users can ask and answer programming questions, vote on content, bookmark questions, follow tags, and discover developer jobs. An integrated AI assistant powered by Groq (Llama 3.1) can generate markdown-formatted answers to help get the conversation started.

---

## Features

### Authentication
- **Credential-based sign-up/sign-in** with bcrypt password hashing
- **OAuth** via Google and GitHub (NextAuth.js v5)
- Secure session management with JWT; middleware-protected routes

### Questions
- Create, edit, and delete questions with a rich MDX editor
- Tag questions with up to 3 relevant tags (auto-created if new)
- Question-level filtering: Newest, Popular, Unanswered, Recommended
- Paginated listing with server-side search

### Answers
- Post and edit answers using the full-featured MDX editor
- Sort answers by Newest, Oldest, or Most Popular
- Each answer contributes to the author's reputation score

### AI-Powered Answer Generation
- One-click AI answer generation using **Groq** (Llama 3.1 8B Instant)
- Takes the question title, content, and the user's draft answer as context
- Returns a well-structured markdown response with code blocks, headings, and lists

### Voting System
- Upvote and downvote both questions and answers
- Toggle votes: clicking the same vote again removes it; switching vote type is handled atomically via MongoDB transactions
- Vote counts are reflected in real-time across the UI

### Collections (Bookmarks)
- Save any question to a personal collection
- Filter saved questions by Oldest, Most Voted, Most Viewed, Most Recent, Most Answered

### Tags
- Browse all tags with question counts
- Filter by A-Z, Recent, Oldest, or Popular
- Clicking a tag shows all associated questions

### Global Search
- Unified search bar in the navbar searches across Questions, Answers, Users, and Tags simultaneously
- Results are filtered by type via quick-select chips

### Community
- Browse all registered users with search and filter support
- View any user's public profile

### User Profiles
- Displays bio, location, portfolio link, and join date
- Shows reputation score and earned badges (Gold, Silver, Bronze)
- Tabbed view of the user's Questions and Answers
- Top tags derived from the user's question activity

### Reputation & Badges
| Action | Performer | Content Author |
|---|---|---|
| Upvote a post | +2 | +10 |
| Downvote a post | -1 | -2 |
| Post a question | — | +5 |
| Post an answer | — | +10 |
| Delete a question | — | -5 |
| Delete an answer | — | -10 |

### Personalized Recommendations
- The "Recommended" feed analyzes a logged-in user's recent interaction history (views, upvotes, bookmarks, posts) to surface questions matching their interests

### Job Listings
- Searches developer jobs via the **JSearch API** (RapidAPI)
- Auto-detects the user's country via IP geolocation
- Jobs display employment type, company, location, and a direct apply link

### UI/UX
- Dark / Light / System theme switching (next-themes)
- Top-progress-bar for navigation feedback (nextjs-toploader)
- Toast notifications (Sonner)
- Responsive layout with Left and Right sidebars
- Skeleton loading states and graceful empty-state renderers

---

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript 5 |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS 4, tailwind-merge, tailwindcss-animate |
| **Component Primitives** | Radix UI (Alert Dialog, Avatar, Dialog, Dropdown, Label, Select, Slot, Tabs) |
| **Component Library** | shadcn/ui |
| **Icons** | Lucide React, Radix Icons, Devicon (CDN) |
| **Rich Text Editor** | @mdxeditor/editor, next-mdx-remote, Bright (syntax highlighting) |
| **Database** | MongoDB (Atlas) |
| **ODM** | Mongoose 8 |
| **Authentication** | NextAuth.js v5 (Credentials + OAuth) |
| **Password Hashing** | bcryptjs |
| **AI / LLM** | Vercel AI SDK (`ai`, `@ai-sdk/groq`) — Llama 3.1 8B Instant via Groq |
| **Form Handling** | react-hook-form, @hookform/resolvers |
| **Validation** | Zod |
| **Date Formatting** | Day.js |
| **URL State** | query-string |
| **Slug Generation** | slugify |
| **Logging** | Pino, pino-pretty |
| **Linting / Formatting** | ESLint 9, Prettier |
| **Deployment** | Vercel |

---

## Project Structure

```
CodeVerse-app/
├── app/
│   ├── (auth)/                   # Authentication route group
│   │   ├── layout.tsx            # Centered card layout with brand imagery
│   │   ├── sign-in/page.tsx
│   │   └── sign-up/page.tsx
│   ├── (root)/                   # Main application route group
│   │   ├── layout.tsx            # Navbar + LeftSidebar + RightSidebar shell
│   │   ├── page.tsx              # Home — all questions feed
│   │   ├── ask-question/page.tsx
│   │   ├── questions/[id]/
│   │   │   ├── page.tsx          # Question detail with answers
│   │   │   └── edit/page.tsx
│   │   ├── collection/page.tsx   # Saved questions (auth-gated)
│   │   ├── community/page.tsx    # All users
│   │   ├── tags/
│   │   │   ├── page.tsx          # All tags
│   │   │   └── [id]/page.tsx     # Questions by tag
│   │   ├── profile/
│   │   │   ├── [id]/page.tsx     # Public profile
│   │   │   └── edit/page.tsx     # Edit own profile (auth-gated)
│   │   └── jobs/page.tsx         # Developer job listings
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts    # NextAuth handler
│   │   ├── auth/signin-with-oauth/route.ts
│   │   ├── ai/answers/route.ts            # Groq AI answer generation
│   │   ├── accounts/route.ts
│   │   ├── accounts/[id]/route.ts
│   │   ├── accounts/provider/route.ts
│   │   ├── users/route.ts
│   │   ├── users/[id]/route.ts
│   │   └── users/email/route.ts
│   ├── fonts/                    # Local Inter & Space Grotesk variable fonts
│   ├── globals.css               # Tailwind base + CSS custom properties
│   ├── layout.tsx                # Root layout (SessionProvider, ThemeProvider)
│   └── not-found.tsx
│
├── components/
│   ├── cards/                    # QuestionCard, AnswerCard, TagCard, UserCard, JobCard
│   ├── filters/                  # CommonFilter, HomeFilter
│   ├── forms/                    # AuthForm, QuestionForm, ProfileForm, SocialAuthForm, AnswerForm
│   ├── navigation/
│   │   ├── navbar/               # Top navigation bar + GlobalSearch
│   │   ├── LeftSidebar.tsx       # Main nav links
│   │   └── RightSidebar.tsx      # Hot questions + Popular tags
│   ├── search/                   # LocalSearch, GlobalSearch, GlobalResult
│   ├── answers/                  # AllAnswers component
│   ├── questions/                # SaveQuestion, HotQuestions
│   ├── votes/                    # Votes (upvote/downvote UI)
│   ├── user/                     # Stats, ProfileLink
│   ├── editor/                   # MDXEditor wrapper
│   ├── ui/                       # shadcn/ui primitives
│   ├── DataRenderer.tsx          # Generic success/error/empty state renderer
│   ├── Pagination.tsx
│   ├── Metric.tsx
│   └── UserAvatar.tsx
│
├── database/
│   ├── index.ts                  # Barrel export for all models
│   ├── user.model.ts
│   ├── account.model.ts
│   ├── question.model.ts
│   ├── answer.model.ts
│   ├── tag.model.ts
│   ├── tag-question.model.ts     # Many-to-many junction
│   ├── vote.model.ts
│   ├── collection.model.ts       # Bookmarks
│   └── interaction.model.ts      # Drives recommendations & reputation
│
├── lib/
│   ├── actions/                  # Next.js Server Actions
│   │   ├── auth.action.ts
│   │   ├── question.action.ts
│   │   ├── answer.action.ts
│   │   ├── vote.action.ts
│   │   ├── collection.action.ts
│   │   ├── tag.action.ts
│   │   ├── user.action.ts
│   │   ├── general.action.ts     # Global search
│   │   ├── interaction.action.ts # Reputation updates
│   │   └── job.action.ts         # RapidAPI JSearch
│   ├── handlers/
│   │   ├── action.ts             # Auth + validation middleware for Server Actions
│   │   ├── error.ts              # Unified error formatter (API & server)
│   │   └── fetch.ts              # Typed fetch wrapper
│   ├── http-errors.ts            # Custom error classes
│   ├── mongoose.ts               # Singleton MongoDB connection
│   ├── validations.ts            # Zod schemas
│   ├── utils.ts                  # Helpers (cn, formatNumber, getTimestamp, etc.)
│   ├── url.ts                    # URL query string helpers
│   ├── api.ts                    # Client-side API helpers
│   └── logger.ts                 # Pino logger setup
│
├── constants/
│   ├── routes.ts                 # Typed route map
│   ├── filters.ts                # Filter option arrays per page
│   ├── states.ts                 # Empty-state configs
│   ├── techMap.ts                # Technology → Devicon class mapping
│   └── notFound.ts
│
├── context/
│   └── Theme.tsx                 # next-themes ThemeProvider wrapper
│
├── types/
│   ├── global.d.ts               # Shared interfaces (Question, Answer, User, Job, etc.)
│   └── action.d.ts               # Server Action parameter types
│
├── public/
│   ├── icons/                    # SVG icon set
│   └── images/                   # Logos, auth background, illustrations
│
├── auth.ts                       # NextAuth.js configuration
├── middleware.ts                  # Route protection via NextAuth middleware
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Database Schema

CodeVerse uses **MongoDB** with **Mongoose** ODM. All models use timestamps (`createdAt`, `updatedAt`).

```
┌─────────────────────────────────────────────────────────────────────┐
│ User                     │ Account                                  │
│──────────────────────    │──────────────────────────────────────    │
│ name: String             │ userId: ObjectId → User                  │
│ username: String (uniq)  │ name: String                             │
│ email: String (uniq)     │ image: String?                           │
│ bio: String?             │ password: String? (hashed)               │
│ image: String?           │ provider: String  (credentials/google/   │
│ location: String?        │                    github)               │
│ portfolio: String?       │ providerAccountId: String                │
│ reputation: Number = 0   └──────────────────────────────────────    │
└─────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────────┐
│ Question                          │ Tag                                   │
│──────────────────────────────     │──────────────────────────────         │
│ title: String                     │ name: String (unique)                 │
│ content: String (MDX)             │ questions: Number = 0                 │
│ tags: ObjectId[] → Tag            └──────────────────────────────         │
│ author: ObjectId → User                                                   │
│ views: Number = 0                 TagQuestion  (junction)                 │
│ upvotes: Number = 0               ─────────────────────────               │
│ downvotes: Number = 0             tag: ObjectId → Tag                     │
│ answers: Number = 0               question: ObjectId → Question           │
└───────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────┐
│ Answer                        │ Vote                                       │
│────────────────────────────   │────────────────────────────────────────    │
│ author: ObjectId → User       │ author: ObjectId → User                   │
│ question: ObjectId → Question │ actionId: ObjectId (question or answer)   │
│ content: String (MDX)         │ actionType: "question" | "answer"         │
│ upvotes: Number = 0           │ voteType: "upvote" | "downvote"           │
│ downvotes: Number = 0         └────────────────────────────────────────    │
└────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────┐
│ Collection (Bookmark)         │ Interaction                                │
│────────────────────────────   │────────────────────────────────────────    │
│ author: ObjectId → User       │ user: ObjectId → User                     │
│ question: ObjectId → Question │ action: "view"|"upvote"|"downvote"|       │
│                               │         "bookmark"|"post"|"edit"|         │
│                               │         "delete"|"search"                 │
│                               │ actionId: ObjectId                        │
│                               │ actionType: "question" | "answer"         │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## API Routes

All REST endpoints live under `app/api/`. Server Actions in `lib/actions/` handle the majority of mutations.

| Method | Endpoint | Description |
|---|---|---|
| `GET/POST` | `/api/auth/[...nextauth]` | NextAuth.js authentication handler |
| `POST` | `/api/auth/signin-with-oauth` | OAuth sign-in — create or link account |
| `POST` | `/api/ai/answers` | Generate an AI answer via Groq (Llama 3.1) |
| `GET/POST` | `/api/accounts` | List / create accounts |
| `GET/PUT/DELETE` | `/api/accounts/[id]` | Get / update / delete a specific account |
| `GET` | `/api/accounts/provider` | Look up an account by provider + providerAccountId |
| `GET/POST` | `/api/users` | List / create users |
| `GET/PUT/DELETE` | `/api/users/[id]` | Get / update / delete a specific user |
| `GET` | `/api/users/email` | Look up a user by email address |

---

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 10+ (specified as `packageManager` in `package.json`)
- A **MongoDB Atlas** cluster (or a local MongoDB instance)
- A **Groq API key** (for AI answer generation) — [console.groq.com](https://console.groq.com/)
- A **RapidAPI key** with access to the [JSearch API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch) (for the jobs page)
- (Optional) **Google** and **GitHub** OAuth credentials for social login

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/theShihamAhamed/CodeVerse-app.git
   cd CodeVerse-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

### Environment Variables

Create a `.env.local` file in the root of the project and populate it with the following:

```env
# ─── MongoDB ──────────────────────────────────────────────────────────────────
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority

# ─── NextAuth ─────────────────────────────────────────────────────────────────
# Generate with: openssl rand -base64 32
AUTH_SECRET=your_nextauth_secret

# ─── OAuth Providers ──────────────────────────────────────────────────────────
# Google: https://console.developers.google.com/
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret

# GitHub: https://github.com/settings/developers
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_client_secret

# ─── Groq (AI Answer Generation) ──────────────────────────────────────────────
# https://console.groq.com/
GROQ_API_KEY=your_groq_api_key

# ─── RapidAPI (Job Listings) ──────────────────────────────────────────────────
# https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch
NEXT_PUBLIC_RAPID_API_KEY=your_rapidapi_key

# ─── App URL ──────────────────────────────────────────────────────────────────
NEXTAUTH_URL=http://localhost:3000
```

> **Note:** The `NEXT_PUBLIC_` prefix on `RAPID_API_KEY` makes it accessible in the browser. All other secrets stay server-side only.

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app uses Turbopack (`next dev --turbo`) for fast refresh.

**Other scripts:**

```bash
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Key Implementation Details

### Next.js App Router & Server Actions
All data mutations (creating questions, voting, bookmarking) are implemented as **Next.js Server Actions** in `lib/actions/`. Each action goes through a central `action()` handler in `lib/handlers/action.ts` that validates the payload against a Zod schema and optionally checks for an authenticated session before executing.

### MongoDB Transactions
Operations that touch multiple collections atomically — such as creating a question (which also creates/upserts tags and TagQuestion junction records), deleting a question (which cascades to answers, votes, and collections), and voting (which updates the Vote document and the counter on the Question/Answer) — all use **Mongoose transactions** to guarantee consistency.

### Recommendation Engine
The "Recommended" feed works by:
1. Fetching the logged-in user's last 50 interactions of type `view`, `upvote`, `bookmark`, or `post`.
2. Collecting all tags from those interacted questions.
3. Querying for unread questions (excluding already-interacted ones and the user's own) that share those tags, sorted by upvotes and views.

### Reputation System
Every meaningful user action triggers `createInteraction()`, which records an `Interaction` document and calls `updateReputation()`. This uses `User.bulkWrite()` to atomically update both the performer's and the content author's reputation in a single database round-trip.

### AI Answer Generation
The `/api/ai/answers` route receives the question title, MDX content, and an optional user draft. It uses the Vercel AI SDK (`generateText` with `@ai-sdk/groq`) to call the **Llama 3.1 8B Instant** model on Groq, instructing it to produce a concise, markdown-formatted response that incorporates the user's draft if it is correct.

### Error Handling
A unified `handleError()` function in `lib/handlers/error.ts` normalises any error — whether a custom `RequestError` subclass (Validation, NotFound, Forbidden, Unauthorized), a `ZodError`, or an unknown runtime error — into a consistent `{ success: false, error: { message, details } }` shape for both API responses (`NextResponse.json`) and Server Action returns.

### Authentication Flow
NextAuth.js v5 is configured in `auth.ts` with a `credentials` provider (email + bcrypt) and `google`/`github` OAuth providers. The `middleware.ts` file re-exports the NextAuth `auth` function directly as the middleware, protecting routes transparently. An `Account` model separates auth-provider details from the `User` model, allowing one user to have multiple linked providers.
