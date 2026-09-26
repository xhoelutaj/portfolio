// All of the site's content lives in this file.
// Edit the text here; the components only decide how it looks.

export const profile = {
  name: 'Xhoel Lutaj',
  role: 'Software Developer', // TODO: your title
  tagline: 'I build clean, useful software for the web and beyond.', // TODO: one line about you
  email: 'you@example.com', // TODO
  github: 'https://github.com/xhoelutaj',
  linkedin: 'https://www.linkedin.com/in/your-handle', // TODO
  resume: 'resume.pdf', // put the file in public/resume.pdf
}

// TODO: write 2–3 short paragraphs about yourself.
export const about = [
  'I’m a developer who enjoys turning ideas into software people actually use. Placeholder: replace this with how you got into programming.',
  'Lately I’ve been working on projects involving AI, desktop apps and the web. Placeholder: replace this with what you focus on now.',
  'When I’m not coding, I’m ... Placeholder: add something personal.',
]

// Newest first. Remove "url" if there's nothing to link to.
export const experience = [
  {
    dates: '2025 — Present',
    title: 'Job Title',
    company: 'Company Name',
    url: 'https://example.com',
    description: 'Placeholder. Describe what you built or improved, and the impact it had.',
    tech: ['React', 'C#', 'SQL'],
  },
  {
    dates: '2024 — 2025',
    title: 'Another Role',
    company: 'Another Company',
    description: 'Placeholder. One or two sentences about your work there.',
    tech: ['Python', 'Git'],
  },
]

// Demo videos: put the .mp4 in public/videos/ and set video: 'videos/name.mp4'.
// An optional poster image (shown before the video plays) works the same way.
export const projects = [
  {
    title: 'RAG Chatbot',
    description: 'Placeholder. What it does, what problem it solves, and one technical detail you are proud of.',
    tech: ['Python', 'LLMs', 'Vector DB'],
    repo: 'https://github.com/xhoelutaj/Rag_Chatbot',
    video: null,
  },
  {
    title: 'ContactsBook',
    description: 'A contacts manager with a dark arcane theme and a 3D animated address book.',
    tech: ['C#', '.NET'],
    repo: 'https://github.com/xhoelutaj/ContactsBookClaude',
    video: null,
  },
  {
    title: 'Soccer App',
    description: 'Placeholder. Describe the app. (The repo is private, so there is no code link.)',
    tech: ['TODO'],
    video: null,
  },
]
