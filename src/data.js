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
  instagram: 'https://www.instagram.com/xhoelutaj/',
  resume: 'resume.pdf', // public/resume.pdf
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
export const experience = [
  {
    dates: 'May — Jul 2026',
    title: 'Software Engineering Intern',
    company: 'EasyPay',
    description:
      'At a FinTech and digital wallet company licensed by the Central Bank of Albania, I designed and built a SQL-backed contact management app in C# and .NET with full CRUD, CSV and Excel export tools, and a Python RAG assistant that answers questions from custom knowledge sources. I also debugged and tested features in an existing codebase and reviewed code with mentors through Git.',
    tech: ['C#', '.NET', 'SQL', 'Python'],
  },
  {
    dates: '2024 — Present',
    title: 'Student-Athlete',
    company: 'Northern Michigan University',
    description:
      'NCAA Division II Men’s Soccer. I balance a full course load across a double major in Computer Science and Mathematics with year-round training, while holding a 3.98 GPA.',
  },
]

// Clicking a project with a video opens it in a popup player on the site.
//   video: 'videos/name.mp4'                     a file uploaded to public/videos/
//   video: 'https://youtu.be/abc123XYZ00'         an (unlisted) YouTube video
// moreVideos: [{ label, video }] adds extra videos, shown as tabs in the popup.
// poster: 'videos/name.jpg' adds an optional thumbnail image to the card.
// demo: a link to the live app, shown as "Live site".
// demoNotice: optional { title, message } shown (with an OK button) before opening it.
export const projects = [
  {
    title: 'Gaffr: AI Soccer Coach',
    description:
      'A 1-on-1 soccer coaching web app. Players answer a few questions and get a complete training session built from a library of 144 drills, with animated drill diagrams, coaching points and demo videos, or follow a multi-week guided pathway.',
    tech: ['Next.js', 'TypeScript', 'ASP.NET Core', 'Supabase', 'Claude API'],
    demo: 'https://gaffrapp.com',
    demoNotice: {
      title: 'Gaffr is still in development',
      message:
        'Thanks for stopping by! Gaffr is an active work in progress, so some features, such as signing up and logging in, may be unavailable or behave unexpectedly while I keep building. For the full experience, check out the demo video.',
    },
    video: 'https://youtu.be/usqNym1Psjs',
  },
  {
    title: 'RAG Chatbot',
    description:
      'A bilingual (Albanian / English) assistant for Albanian traffic law that runs fully locally. Custom retrieval returns whole legal articles instead of fragments, and every article the model cites is checked against its sources so fabricated citations get flagged.',
    tech: ['Python', 'LangChain', 'Ollama', 'ChromaDB', 'FastAPI'],
    video: 'https://youtu.be/WogTYXc_YiI',
  },
  {
    title: 'ContactsBook',
    description:
      'A role-based contact manager with five permission levels, search, and CSV / Excel export. The contact list is presented as a 3D address book with page-flip animation, layered on top of a plain server-rendered list.',
    tech: ['ASP.NET Core MVC', 'EF Core', 'SQL Server', 'JavaScript'],
    video: 'https://youtu.be/fGC5bnyFgiE',
    moreVideos: [{ label: 'Enhanced frontend', video: 'https://youtu.be/sawoL1G-TXI' }],
  },
]
