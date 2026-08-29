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
    slug: "deploying-to-an-ec2-box",
    title: "Deploying to an EC2 box",
    date: "2026-08-26",
    excerpt:
      "The plan for taking this app off my laptop and onto a small EC2 instance: build, process manager, reverse proxy, done.",
    tag: "aws",
    body: [
      "The goal isn't a production-grade setup — it's understanding what actually happens between 'yarn build' and a URL that responds over port 80.",
      "Rough shape of the plan: a small EC2 instance running Node, the app built with yarn build and kept alive with a process manager like pm2, and Nginx in front of it as a reverse proxy so port 80 forwards to Next.js on port 3000.",
      "Everything after that — a domain name, HTTPS with Let's Encrypt, CI/CD — is a follow-up entry once the basic version is actually reachable from outside the VPC.",
    ],
  },
  {
    slug: "deploying-to-an-ec2-box",
    title: "Deploying to an EC2 box",
    date: "2026-08-26",
    excerpt:
      "The plan for taking this app off my laptop and onto a small EC2 instance: build, process manager, reverse proxy, done.",
    tag: "aws",
    body: [
      "The goal isn't a production-grade setup — it's understanding what actually happens between 'yarn build' and a URL that responds over port 80.",
      "Rough shape of the plan: a small EC2 instance running Node, the app built with yarn build and kept alive with a process manager like pm2, and Nginx in front of it as a reverse proxy so port 80 forwards to Next.js on port 3000.",
      "Everything after that — a domain name, HTTPS with Let's Encrypt, CI/CD — is a follow-up entry once the basic version is actually reachable from outside the VPC.",
    ],
  },
  {
    slug: "deploying-to-an-ec2-box",
    title: "Deploying to an EC2 box",
    date: "2026-08-26",
    excerpt:
      "The plan for taking this app off my laptop and onto a small EC2 instance: build, process manager, reverse proxy, done.",
    tag: "aws",
    body: [
      "The goal isn't a production-grade setup — it's understanding what actually happens between 'yarn build' and a URL that responds over port 80.",
      "Rough shape of the plan: a small EC2 instance running Node, the app built with yarn build and kept alive with a process manager like pm2, and Nginx in front of it as a reverse proxy so port 80 forwards to Next.js on port 3000.",
      "Everything after that — a domain name, HTTPS with Let's Encrypt, CI/CD — is a follow-up entry once the basic version is actually reachable from outside the VPC.",
    ],
  }
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getSortedPosts() {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
