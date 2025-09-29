# Shorter URL 🚀

A simple and efficient URL shortening service built with Next.js, Drizzle ORM, and PostgreSQL. The whole purpose of this project was to learn the basics of Next.js and Drizzle ORM while creating something useful.

## Features

- Shorten long URLs to easy-to-share links.
- Track click statistics for each shortened URL.
- Responsive design for both desktop and mobile users.
- Rate limiting to prevent abuse.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes, Drizzle ORM
- **Database**: PostgreSQL
- **Caching**: Redis (for rate limiting)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- PostgreSQL database
- Upstash Redis account (for rate limiting)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/d0dge-dev/shorter-url.git
   cd shorter-url
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000`.
