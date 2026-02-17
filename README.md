🧠 Second Brain (Frontend)

Welcome to my Second Brain! This is the frontend application for a personal knowledge management system designed to aggregate and organize digital content.

I built this because I constantly found myself losing track of useful YouTube videos, Twitter threads, and articles. This app lets you store those links in one place, tag them, and even share your entire "brain" with the world via a public link.

[Live Demo](https://secondbrain-frontend-4c8z.vercel.app/)

## Features
Authentication: Secure Signup and Login (JWT based).

Add Content: Easily save links (YouTube, Twitter) with a title and custom tags.

Smart Cards: Automatically detects the content type (YouTube/Twitter) and displays it in a clean card format.

Filtering: Sidebar navigation to quickly filter content by type (Tweets, Videos, Documents).

Share Your Brain: One-click sharing generates a unique public link so others can view your curated list (read-only mode).

Responsive UI: Built with Tailwind CSS for a clean look on different screen sizes.

🛠️ Tech Stack
Framework: React (Vite)

Language: TypeScript

Styling: Tailwind CSS

State/Hooks: Custom hooks (useContent) for data fetching.

HTTP Client: Axios (with interceptors for auth headers).

Icons: Heroicons / Custom SVG icons.

Notifications: react-hot-toast for smooth alerts.


