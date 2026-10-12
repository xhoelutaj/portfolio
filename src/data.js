// All of the site's content lives in this file.
// Edit the text here; the components only decide how it looks.
// Anything left empty ('' or []) is hidden on the site.

export const profile = {
  name: 'Xhoel Lutaj',
  role: 'Full-stack software developer',
  availability: 'Open to Summer 2027 software internships', // shown under your title; '' hides it
  email: 'xlutaj@nmu.edu',
  github: 'https://github.com/xhoelutaj',
  linkedin: 'https://www.linkedin.com/in/xhoel-lutaj-10a710348/',
  instagram: 'https://www.instagram.com/xhoelutaj/',
  resume: 'resume.pdf', // public/resume.pdf
}

export const about = {
  // Shown large, in the serif.
  lead: 'I’m Xhoel, a junior at Northern Michigan University double majoring in Computer Science and Mathematics.',
  paragraphs: [
    'I’m also a midfielder on NMU’s men’s soccer team, so most of my days are split between the field, the classroom, and whatever I’m building.',
    'I’ve built a few projects you can explore below, but my favorite is Gaffr, an app that brings together my two passions: soccer and building software. It creates personalized training sessions for young players who want to improve on their own. It’s almost ready to launch, and I’m excited to see how players respond to it.',
    'Long term, I want to build a career in machine learning. It’s where my interest in building software meets my math background, and that combination is what draws me to it. It’s an area I’m committed to exploring much more deeply in the years ahead.',
    'Outside code and soccer, I’m usually watching a movie, reading a book, or starting a new show. I’m always up for a good recommendation.',
  ],
}

// The "At a glance" box under About. Best with four.
export const highlights = [
  { value: '3.98', label: 'GPA, double major in Computer Science & Mathematics' },
  { value: 'D-II', label: 'NCAA men’s soccer, Northern Michigan University' },
  { value: '’26', label: 'Software engineering intern at EasyPay, Tirana' },
  { value: '3', label: 'Projects you can watch in action below' },
]

// Newest first. The Experience section stays hidden while this list is empty.
// Example entry:
// {
//   dates: '2025 – Present',
//   title: 'Software Developer Intern',
//   company: 'Company Name',
//   detail: 'City, Country',             // optional, shown after the company
//   url: 'https://company.com',          // optional
//   description: 'What you built and the impact it had.',
//   tech: ['React', 'C#', 'SQL'],        // optional
// },
export const experience = [
  {
    dates: 'May – Jul 2026',
    title: 'Software Engineering Intern',
    company: 'EasyPay',
    detail: 'Tirana, Albania',
    description:
      'At a FinTech and digital wallet company licensed by the Central Bank of Albania, I designed and built a SQL-backed contact management app in C# and .NET with full CRUD, CSV and Excel export tools, and a Python RAG assistant that answers questions from custom knowledge sources. I also debugged and tested features in an existing codebase and reviewed code with mentors through Git.',
    tech: ['C#', '.NET', 'SQL', 'Python'],
  },
  {
    dates: '2024 – Present',
    title: 'Student-Athlete',
    company: 'Northern Michigan University',
    detail: 'Men’s Soccer',
    description:
      'NCAA Division II Men’s Soccer. I balance a full course load across a double major in Computer Science and Mathematics with year-round training, while holding a 3.98 GPA.',
  },
]

// Each project with a video gets a "Watch the demo" button that opens a popup player.
//   video: 'videos/name.mp4'                     a file uploaded to public/videos/
//   video: 'https://youtu.be/abc123XYZ00'         an (unlisted) YouTube video
// moreVideos: [{ label, video }] adds extra videos, shown as tabs in the popup.
// Thumbnails come from the YouTube video automatically.
// poster: 'videos/name.jpg' uses your own image instead (needed for .mp4 videos).
// demo: a link to the live app, shown as "Visit the live site".
// demoNotice: optional { eyebrow, title, message } shown (with an OK button) before opening it.
export const projects = [
  {
    title: 'Gaffr',
    tagline: 'An AI soccer coach, one session at a time',
    description:
      'A 1-on-1 soccer coaching web app. Players answer a few questions and get a complete training session built from a library of 144 drills, with animated drill diagrams, coaching points and demo videos, or follow a multi-week guided pathway.',
    tech: ['Next.js', 'TypeScript', 'ASP.NET Core', 'Supabase', 'Claude API'],
    demo: 'https://gaffrapp.com',
    demoNotice: {
      eyebrow: 'A note before you go',
      title: 'Gaffr is still in development',
      message:
        'Thanks for stopping by! Gaffr is an active work in progress, so some features, such as signing up and logging in, may be unavailable or behave unexpectedly while I keep building. For the full experience, check out the demo video.',
    },
    video: 'https://youtu.be/usqNym1Psjs',
  },
  {
    title: 'RAG Chatbot',
    tagline: 'Answers with its sources, or says it doesn’t know',
    description:
      'A bilingual (Albanian / English) assistant for Albanian traffic law that runs fully locally. Custom retrieval returns whole legal articles instead of fragments, and every article the model cites is checked against its sources so fabricated citations get flagged.',
    tech: ['Python', 'LangChain', 'Ollama', 'ChromaDB', 'FastAPI'],
    video: 'https://youtu.be/WogTYXc_YiI',
  },
  {
    title: 'ContactsBook',
    tagline: 'A contacts manager that opens like a real address book',
    description:
      'A role-based contact manager with five permission levels, search, and CSV / Excel export. The contact list is presented as a 3D address book with page-flip animation, layered on top of a plain server-rendered list.',
    tech: ['ASP.NET Core MVC', 'EF Core', 'SQL Server', 'JavaScript'],
    video: 'https://youtu.be/fGC5bnyFgiE',
    moreVideos: [{ label: 'Enhanced frontend', video: 'https://youtu.be/sawoL1G-TXI' }],
  },
]
