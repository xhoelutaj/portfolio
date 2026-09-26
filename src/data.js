// All of the site's content lives in this file.
// Edit the text here; the components only decide how it looks.
// Anything left empty ('' or []) is hidden on the site.

export const profile = {
  name: 'Xhoel Lutaj',
  role: 'Full-Stack Software Developer',
  tagline: 'I build full-stack web apps and practical AI tools with C#, React and Python.',
  email: 'xlutaj@nmu.edu',
  github: 'https://github.com/xhoelutaj',
  linkedin: 'https://www.linkedin.com/in/xhoel-lutaj-10a710348/',
  resume: '', // upload public/resume.pdf, then set this to 'resume.pdf'
}

export const about = [
  'I’m a software developer who likes building complete products, from the database and API to the interface people actually use. Most of my work is in C# and ASP.NET Core, React and TypeScript, and Python.',
  'Lately I’ve been focused on applied AI: a soccer coaching app that generates personalised training sessions, and a retrieval-augmented assistant for Albanian traffic law that checks its own citations so it can’t quietly invent the law.',
  'I care about the details that make software trustworthy: access control enforced at the database, thorough tests, and interfaces that respect settings like reduced motion.',
]

// Newest first. The Experience section stays hidden while this list is empty.
// Example entry:
// {
//   dates: '2025 — Present',
//   title: 'Software Developer Intern',
//   company: 'Company Name',
//   url: 'https://company.com',          // optional
//   description: 'What you built and the impact it had.',
//   tech: ['React', 'C#', 'SQL'],
// },
export const experience = []

// Demo videos: upload the .mp4 to public/videos/ and set video: 'videos/name.mp4'.
// An optional poster image (shown before the video plays) works the same way.
export const projects = [
  {
    title: 'Gaffr: AI Soccer Coach',
    description:
      'A 1-on-1 soccer coaching web app. Players answer a few questions and get a complete training session built from a library of 200+ drills, with animated drill diagrams, coaching points and demo videos, or follow a multi-week guided pathway.',
    tech: ['Next.js', 'TypeScript', 'ASP.NET Core', 'Supabase', 'Claude API'],
    demo: 'https://gaffrapp.com',
    video: null,
  },
  {
    title: 'Kodi Rrugor AI',
    description:
      'A bilingual (Albanian / English) assistant for Albanian traffic law that runs fully locally. Custom retrieval returns whole legal articles instead of fragments, and every article the model cites is checked against its sources so fabricated citations get flagged.',
    tech: ['Python', 'LangChain', 'Ollama', 'ChromaDB', 'FastAPI'],
    repo: 'https://github.com/xhoelutaj/Rag_Chatbot',
    video: null,
  },
  {
    title: 'ContactsBook',
    description:
      'A role-based contact manager with five permission levels, search, and CSV / Excel export. The contact list is presented as a 3D address book with page-flip animation, layered on top of a plain server-rendered list.',
    tech: ['ASP.NET Core MVC', 'EF Core', 'SQL Server', 'JavaScript'],
    repo: 'https://github.com/xhoelutaj/ContactsBookClaude',
    video: null,
  },
]
