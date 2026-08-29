export type Post = {
  slug: string;
  title: string;
  date: string; // ISO date
  excerpt: string;
  tag: string;
  body: string[]; // paragraphs
};

export const posts: Post[] = [
  {
    slug: "why-i-started-this-journal",
    title: "Why I started this journal",
    date: "2026-08-10",
    excerpt:
      "A short note on why I'm keeping a running log of what I build and break, instead of letting it disappear into terminal history.",
    tag: "meta",
    body: [
      "Most of what I learn while building things happens in the gap between a command failing and a command working. That gap usually gets lost the moment the terminal scrolls past it.",
      "This journal is an attempt to keep a few of those gaps around — short, dated entries about a tool, a bug, or a decision, written close to the moment it happened rather than reconstructed later from memory.",
      "No polish, no SEO strategy, no comment section. Just a paper trail I can point future-me back to.",
    ],
  },
  {
    slug: "setting-up-nextjs-with-yarn",
    title: "Setting up Next.js with yarn",
    date: "2026-08-18",
    excerpt:
      "Notes from scaffolding a fresh Next.js app with the App Router and yarn as the package manager, plus a few gotchas.",
    tag: "next.js",
    body: [
      "Scaffolding is the easy part: create-next-app asks a handful of questions — TypeScript, ESLint, Tailwind, the App Router, a src directory, an import alias — and yarn takes it from there.",
      "The one snag worth writing down: create-next-app shells out to whichever package manager you pick, so yarn has to already be on the machine and on the PATH before you run it, or the install step fails silently into an ENOENT.",
      "Once it's scaffolded, the day-to-day commands are the same shape as npm: yarn dev to run the local server, yarn build to produce a production build, yarn start to serve that build.",
    ],
  },
  {
    slug: "setting-up-a-postgresql-database",
    title: "Setting up a PostgreSQL database",
    date: "2026-08-24",
    excerpt:
      "A practical look at connecting a PostgreSQL database to the application and keeping the configuration simple during development.",
    tag: "database",
    body: [
      "The goal is to understand how the application communicates with PostgreSQL and what actually happens when a database connection is established.",
      "The basic setup includes creating a database, configuring the connection string through environment variables, and using Prisma to manage the database schema and queries.",
      "Once the local setup is working correctly, the next step will be moving the database to a hosted environment and making sure migrations and backups are handled properly.",
    ],
  },

  {
    slug: "building-a-reusable-api-layer",
    title: "Building a reusable API layer",
    date: "2026-08-22",
    excerpt:
      "Designing a clean API structure that keeps request handling, business logic, and database operations separated from each other.",
    tag: "backend",
    body: [
      "The main focus is keeping the backend organized instead of putting every piece of logic directly inside the route handlers.",
      "The structure separates routes, controllers, services, and database operations so that each part has a clear responsibility and can be changed without affecting the entire application.",
      "After the basic API structure is ready, authentication, validation, error handling, and proper response formatting can be added on top of it.",
    ],
  },

  {
    slug: "adding-authentication-with-jwt",
    title: "Adding authentication with JWT",
    date: "2026-08-20",
    excerpt:
      "Exploring a simple JWT-based authentication flow for protecting API routes and managing logged-in users.",
    tag: "authentication",
    body: [
      "The first step is understanding the complete authentication flow, from user login to generating a token and sending it back to the client.",
      "The backend can verify the JWT on protected requests and use the decoded information to identify the current user before allowing access to restricted resources.",
      "There are still a few things to improve later, including refresh tokens, token expiration, secure cookie configuration, and better handling of authentication errors.",
    ],
  },
  {
  slug: "optimizing-nextjs-page-performance",
  title: "Optimizing Next.js page performance",
  date: "2026-08-18",
  excerpt:
    "A quick look at the techniques I'm using to make Next.js pages load faster and keep the overall experience smooth.",
  tag: "nextjs",
  body: [
    "The goal is to understand which parts of a Next.js application have the biggest impact on loading speed and how to identify unnecessary work.",
    "The main improvements include optimizing images, reducing client-side JavaScript, using server components where possible, and making sure data fetching happens efficiently.",
    "Once the basic optimizations are in place, the next step is measuring the actual performance with tools like Lighthouse and Core Web Vitals instead of relying only on how fast the page feels.",
  ],
},
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getSortedPosts() {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
