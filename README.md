# AlgoGATE 🚀

> **A production-grade, AI-assisted Competitive Programming Learning Platform built with React 19 + Firebase.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=github)](https://YASHK-arch.github.io/AlgoGATE)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

---

## 🧠 Problem Statement

**Who is the user?**
Computer science students and competitive programmers (especially IITM BS / Codeforces beginners) who want a **structured, personalised learning path** for DSA and CP problems.

**What problem are we solving?**
Most CP platforms (like Codeforces, LeetCode) are raw problem archives — they give you thousands of problems but provide **zero guidance** on what to study, in what order, or how you're progressing. Students choose problems randomly, miss entire topic classes, and have no way to track their study effort holistically.

**Why does this matter?**
A structured, topic-wise, difficulty-gated learning journey dramatically improves retention and interview readiness. AlgoGATE provides:

- **Curated, topic-wise problem sets** (800 → 900 → 1000 → 1300 → 1500 → 1800 rating tracks)  
- **Auto-syncing with Codeforces** to credit work already done elsewhere  
- **A GitHub-style activity heatmap** combining AlgoGATE + Codeforces data  
- **Integrated PDF study notes** (DSA Java, IITM BS Stats, etc.)  
- **A real-time discussion thread** per problem for community learning  

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Email/Password signup & login via Firebase Auth |
| 📊 **Dashboard** | Streak tracker, stats overview, topic progress rings, activity heatmap |
| 🧩 **Topic-wise Practice** | 10+ DSA topics × 8 difficulty levels (800–1500) with 100+ curated CF problems |
| ⭐ **Star / Bookmark** | Bookmark problems; view them on a dedicated Starred page |
| 📝 **Study Notes** | Browse PDF notes by subject (DSA Java, IITM BS Stats/Maths/Python) |
| 💬 **Discussion Threads** | Real-time per-problem discussion via Firestore `onSnapshot` |
| 🔄 **Codeforces Auto-Sync** | Auto-detects and marks problems solved on Codeforces into AlgoGATE progress |
| 📈 **Activity Heatmap** | Codeforces-style 52-week heatmap (AlgoGATE + CF unified) |
| 🗓️ **Planner Calendar** | Plan and track your upcoming study sessions by date |
| 👤 **Profile Page** | View stats, edit CF handle, manually trigger full sync |
| 💡 **Hint System** | Collapsible, reveal-on-demand hints for curated problems |
| 🔒 **Protected Routes** | All authenticated pages guarded via `ProtectedRoute` component |

---

## ⚛️ React Concepts Demonstrated

### Core Concepts ✅
- **Functional Components** — 100% functional component architecture across all pages and components
- **Props & Composition** — `StatsCard`, `ProgressRing`, `QuestionRow`, `PdfCard`, `TopicAccordion`, etc.
- **`useState`** — Used extensively for local UI state (modals, search, edit toggles, loading flags)
- **`useEffect`** — Data loading on auth change, CF auto-sync on login, heatmap re-draw triggers
- **Conditional Rendering** — Loading skeletons, error states, solved/unsolved badges, CF modal
- **Lists & Keys** — Topic lists, question rows, heatmap cells, discussion threads all keyed correctly

### Intermediate Concepts ✅
- **Lifting State Up** — Progress, starred, and activity state live in `AppContext` and flow down
- **Controlled Components** — All form inputs (login, signup, search boxes, CF handle input) are fully controlled
- **React Router v7** — Nested routes, dynamic segments (`/practice/:topic/:questionId`), `Navigate`, `Link`
- **Context API** — `AuthContext` (auth state) and `AppContext` (global app data) decouple state from UI

### Advanced Concepts ✅
- **`useMemo`** — `topicProgresses`, `filteredTopics`, `totalSolved`, `streak`, `filteredQuestions` all memoised
- **`useCallback`** — `loadUserData`, `syncIfStale`, `runSync` wrapped in `useCallback` to prevent re-renders
- **`useRef`** — `autoSyncFiredRef` (session guard), `inProgressRef` (sync race condition guard)
- **`React.lazy` + `Suspense`** — All 9 pages lazily loaded with a branded `PageLoader` spinner
- **Custom Hook** — `useCodeforcesSync` encapsulates the entire CF API → Firestore sync pipeline

---

## 🔐 Authentication & Firebase

### Auth Flow
- Firebase Authentication (Email + Password)
- `onAuthStateChanged` listener in `AuthContext` — single source of auth truth
- On signup, a Firestore user document is created under `users/{uid}`
- Protected routes redirect unauthenticated users to `/auth`

### Firestore Collections

| Collection | Document ID | Purpose |
|---|---|---|
| `users` | `{uid}` | Name, email, cfHandle, rating, createdAt, lastSyncedAt |
| `progress` | `{uid}` | Nested: `topic → difficulty → { solved: [ids] }` |
| `starred` | `{uid}` | `{ questions: [questionIds] }` |
| `activity` | `{uid}` | `{ dates: { "YYYY-MM-DD": count }, cfDates: {...} }` |
| `discussions` | `{questionId}` | Subcollection `comments` with real-time `onSnapshot` |

### CRUD Operations
- **Create**: Signup (user doc), Post discussion comment, Mark solved, Star question
- **Read**: Load progress, load starred, load activity, load discussion thread
- **Update**: Bulk mark solved (CF sync), update CF handle, update rating, log activity
- **Delete**: Unstar question, delete own discussion comment

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── dashboard/       # StatsCard, ProgressRing, CFOnboardModal, CFSyncStatus
│   ├── discussion/      # DiscussionThread (real-time Firestore)
│   ├── heatmap/         # ActivityHeatmap (GitHub-style)
│   ├── layout/          # Navbar, ProtectedRoute
│   └── practice/        # QuestionRow, AdvisoryPopup
├── context/
│   ├── AppContext.jsx    # Global state: progress, starred, activity, streak
│   └── AuthContext.jsx  # Firebase Auth state & user profile
├── hooks/
│   └── useCodeforcesSync.js  # Custom hook: CF API → Firestore sync
├── pages/
│   ├── LandingPage.jsx
│   ├── AuthPage.jsx
│   ├── Dashboard.jsx
│   ├── PracticePage.jsx
│   ├── TopicPage.jsx
│   ├── QuestionPage.jsx
│   ├── StarredPage.jsx
│   ├── StudyPage.jsx
│   ├── ProfilePage.jsx
│   └── CalendarPage.jsx
├── services/
│   ├── firebase.js          # Firebase app init
│   ├── authService.js       # signUp, signIn, signOut, getUserProfile
│   ├── progressService.js   # markSolved, bulkMarkSolved, markUnsolved, starred CRUD
│   ├── activityService.js   # logActivity, getActivity, setCFActivity
│   ├── discussionService.js # getDiscussions, subscribeDiscussions, postComment, deleteComment
│   └── codeforcesService.js # CF API: user info, submissions, solved extraction
└── utils/
    ├── questionData.js      # Master DB: 400+ curated CF problems, TOPICS, LEVELS
    ├── progressionEngine.js # getLevelStatus, getTopicProgress, getTopicsMastered
    ├── streakEngine.js      # computeStreak, generateHeatmapData, getIntensity
    └── studyData.js         # STUDY_SUBJECTS, topic→PDF mapping, getStudentPdfPath
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 (Vite) |
| **Routing** | React Router v7 |
| **Styling** | Tailwind CSS v3 |
| **Backend / Auth** | Firebase v12 (Auth + Firestore) |
| **External API** | Codeforces Public REST API |
| **Icons** | Lucide React |
| **Deployment** | GitHub Pages (via `gh-pages`) |

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js ≥ 18
- A Firebase project with Authentication (Email/Password) and Firestore enabled

### 1. Clone the repository
```bash
git clone https://github.com/YASHK-arch/AlgoGATE.git
cd AlgoGATE
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 4. Run locally
```bash
npm run dev
```
App runs at `http://localhost:5173`

### 5. Deploy to GitHub Pages
```bash
npm run deploy
```

---

## 📦 Required Features Checklist

- ✅ Authentication system (Firebase Email/Password)
- ✅ Dashboard / Main screen with stats, heatmap, progress rings
- ✅ 5+ core features (Practice, Study Notes, Discussions, CF Sync, Starred, Calendar)
- ✅ CRUD functionality (progress, starred, discussions, user profile)
- ✅ Persistent storage (Firestore — survives refresh, cross-device)
- ✅ Routing (React Router v7 with protected + public routes)
- ✅ State management (Context API — AuthContext + AppContext)

---

## 🌐 Live Deployment

**🔗 [https://YASHK-arch.github.io/AlgoGATE](https://YASHK-arch.github.io/AlgoGATE)**

---

## 📄 License

MIT — feel free to fork, study, and build on top of AlgoGATE.
