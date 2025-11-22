import { Project, ExperienceItem, BlogPost, SpeakingItem, TweetMoment } from './types';
import { Github, Linkedin, Twitter, Mail, Calendar } from 'lucide-react';
import React from 'react';

export const SOCIALS = [
  {
    name: 'GitHub',
    url: 'https://github.com/AadiXC0DE',
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aaditya-chowdhury-14a5a921b/',
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: 'Twitter',
    url: 'https://x.com/AadiChowdhury7',
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    name: 'Email',
    url: 'mailto:aadityaz2077@gmail.com',
    icon: <Mail className="w-5 h-5" />,
  },
  {
    name: 'Calendly',
    url: 'https://calendly.com/aadityaz2077/one-on-one',
    icon: <Calendar className="w-5 h-5" />,
  },
];

export const MOMENTS: TweetMoment[] = [
  {
    id: 'm1',
    tweetUrl: '#',
    tweetContent: "Crazy news: My startup Symmulate Labs just got acquired by @Adda247! 🚀\n\nStarted this in my dorm room to help students solve complex math with AI. 6 months later, we're exiting.\n\nHuge shoutout to the team! #BuildInPublic #Startup",
    tweetDate: 'Nov 15, 2023',
    likes: '1.2K',
    retweets: '450',
    views: '45K',
    hasMedia: true,
    mediaUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop',
    storyTitle: 'The Exit',
    storyContent: "It started as a weekend project at IIT Mandi. We built an EdTech chatbot that could solve university-level math problems. We optimized LLM inference speeds by **50%**, allowing us to handle thousands of concurrent queries. Adda247 saw the potential and acquired us. It was my first taste of a real exit.",
    orientation: 'left'
  },
  {
    id: 'm2',
    tweetUrl: '#',
    tweetContent: "Just shipped 'Heartprint' for Philips! 🏥\n\nA PWA that scans your finger via camera to measure vitals & predict heart disease.\n\nFelt like sci-fi building this. 25% boost in engagement already! 📈",
    tweetDate: 'Mar 10, 2024',
    likes: '892',
    retweets: '210',
    views: '22K',
    storyTitle: 'Leading Innovation at Philips',
    storyContent: "I was brought in as the **Sole Lead Engineer** for this project. The challenge? Build a Progressive Web App (PWA) that uses the phone's camera to detect blood flow changes in the finger (PPG). I integrated the Careplix SDK and D3.js for real-time visualizations. The result was a **25% increase** in daily user engagement.",
    orientation: 'right'
  },
  {
    id: 'm3',
    tweetUrl: '#',
    tweetContent: "Building internal AI tools for Hero MotoCorp today 🏍️\n\nHelping their design teams iterate faster with custom LLM agents. \n\nDesign + Engineering = ⚡",
    tweetDate: 'Jan 20, 2024',
    likes: '534',
    retweets: '89',
    views: '15K',
    storyTitle: 'Empowering Creative Teams',
    storyContent: "At Hero MotoCorp, I didn't just build software; I built force multipliers. I developed AI agents that analyze design files and assist with technical writing, drastically reducing the time-to-market for internal assets. I also maintained the **Hero Echo Design System**, ensuring consistency across all digital platforms.",
    orientation: 'left'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Ownpath',
    role: 'Software Engineer',
    period: '2024 - Present',
    location: 'Hybrid',
    description: "I serve as a lead engineer for enterprise clients, delivering high-impact solutions across healthcare, automotive, and AI sectors.",
    techStack: ['React', 'Node.js', 'MongoDB', 'LangChain'],
    logoUrl: 'https://logo.clearbit.com/ownpath.com',
    subRoles: [
      {
        title: 'Philips Innovation',
        role: 'Led Heartprint Mobile App Development',
        description: 'Acted as the sole lead engineer for Heartprint, a PWA health app. Built a system that scans fingers to capture vitals and predicts diseases. Optimizations boosted user engagement by 25%.',
        stack: ['React', 'D3.js', 'Careplix SDK'],
        logoUrl: 'https://logo.clearbit.com/philips.co.in'
      },
      {
        title: 'Hero MotoCorp',
        role: 'AI & Design Tools Engineer',
        description: 'Developed internal AI-powered design analyzers and writing assistants. Maintained the Hero Echo Design System used across all Vida digital platforms.',
        stack: ['React', 'AI/LLMs', 'Internal Tools'],
        logoUrl: 'https://logo.clearbit.com/heromotocorp.com'
      },
      {
        title: 'Koolio.ai',
        role: 'Lead Frontend Engineer',
        description: 'Built an AI audio editor from scratch (Adobe Audition for web). Implemented transcript-based editing, waveform manipulation, and FFmpeg integration for thousands of users.',
        stack: ['React', 'WavesurferJS', 'FFmpeg'],
        logoUrl: 'https://logo.clearbit.com/koolio.ai'
      },
      {
        title: 'Realfast AI',
        role: 'Frontend Developer',
        description: 'Built official website components focusing on high-end interactions using Framer Motion for a buttery smooth user experience.',
        stack: ['React', 'Framer Motion'],
        logoUrl: 'https://logo.clearbit.com/realfast.ai'
      }
    ],
  },
  {
    company: 'Gastrogate AB',
    role: 'SWE Intern',
    period: '09/2023 - 04/2024',
    location: 'Sweden (Remote)',
    description: <span>Optimized the core platform for a Swedish food-tech company. Designed admin components and implemented fuzzy search reducing timing by <strong>50%</strong> and improving quality by <strong>25%</strong>. Increased user engagement by <strong>30%</strong> through data-driven UI improvements.</span>,
    techStack: ['React', 'TypeScript', 'GraphQL', 'Expo'],
    logoUrl: 'https://logo.clearbit.com/gastrogate.com'
  },
  {
    company: 'Symmulate Labs',
    role: 'Founding Engineer',
    period: '08/2023 - 11/2023',
    location: 'IIT Mandi',
    description: <span>My first startup experience building EdTech AI tools. <strong>Acquired by Adda247</strong>. Led frontend development using Python, JS, and Flask. Achieved <strong>50% faster</strong> response times for LLM and RVC voice AI models. Created <strong>10+ chatbot UIs</strong> for various EdTech clients.</span>,
    techStack: ['Python', 'LLMs', 'Chatbots'],
    logoUrl: 'https://logo.clearbit.com/adda247.com'
  },
  {
    company: 'ELabs KIIT',
    role: 'Frontend Developer',
    period: '12/2022 - Current',
    location: 'Bhubaneswar',
    description: <span>Building for the student community. Innovated UX through image optimization. Pioneered responsive SPAs using ReactJS & Next.js. Implemented best practices resulting in <strong>70% increase</strong> in student count. Led a team to create a Quiz platform engaging <strong>2000+ users</strong>.</span>,
    techStack: ['Next.js', 'AWS', 'Express.js'],
    logoUrl: 'https://ui-avatars.com/api/?name=ELabs&background=000&color=fff'
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Neonkit',
    description: 'A neon-themed set of copy-paste React components built with Framer Motion.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    status: 'Featured',
    year: '2025',
    link: 'https://get-neonkit.vercel.app/',
    imageUrl: '/neonkit.png',
  },
  {
    title: 'Caldy',
    description: 'Stunning calendar and powerful task management platform.',
    tags: ['Productivity', 'Next.js', 'Design'],
    status: 'Featured',
    year: '2025',
    link: 'https://caldy.vercel.app/',
    imageUrl: '/caldy.png',
  },
  {
    title: 'CraftMine',
    description: 'A simple Minecraft clone built for the web using Three.js.',
    tags: ['Three.js', 'WebGL', 'Game Dev'],
    status: 'Featured',
    year: '2025',
    link: 'https://craft-mine.vercel.app/',
    imageUrl: '/craftmine.png',
  },
  {
    title: 'QR Ninja',
    description: 'Advanced QR code generator with SVG export.',
    tags: ['Next.js', 'Utility', 'Tailwind'],
    status: 'In Production',
    year: '2024',
    link: 'https://qr-ninja.vercel.app/',
    imageUrl: '/qr.png',
  },
  {
    title: 'Serenity',
    description: 'AI-powered therapy companion using Gemini and ElevenLabs.',
    tags: ['AI', 'Gemini', 'Health'],
    status: 'AI-Powered',
    year: '2023',
    link: 'https://github.com/AadiXC0DE/Serenity',
    imageUrl: '/serenity.png',
  },
  {
    title: 'Sarazaiten',
    description: 'Webapp built with OpenAI GPT-3.5 making learning DSA free and fun.',
    tags: ['OpenAI', 'React', 'Education'],
    status: 'AI-Powered',
    year: '2023',
    link: 'https://sarazaiten.netlify.app/',
    imageUrl: '/sarazaiten.png',
  },
  {
    title: 'Elabs Quiz',
    description: 'Internal quiz app for ELabs KIIT, used by 2000+ college students.',
    tags: ['React', 'MongoDB', 'EdTech'],
    status: 'In Production',
    year: '2023',
    link: 'https://github.com/AadiXC0DE/Elabs-Quiz',
    imageUrl: '/quiz.png',
  },
  {
    title: 'Tesla Clone',
    description: 'Pixel-perfect clone of Tesla website built with React.',
    tags: ['React', 'Styled Components'],
    status: 'Archived',
    year: '2023',
    link: 'https://clever-trifle-e934fc.netlify.app/',
    imageUrl: '/tesla.png',
  },
  {
    title: 'Mapty App',
    description: 'Track daily workouts on a map. Pure HTML/JS.',
    tags: ['JavaScript', 'Leaflet API'],
    status: 'Archived',
    year: '2023',
    link: 'https://spiffy-jelly-b513b8.netlify.app/',
    imageUrl: '/mapty.png',
  },
  {
    title: 'Youtube Clone',
    description: 'A working youtube clone built with React and MaterialUI.',
    tags: ['React', 'MUI'],
    status: 'Archived',
    year: '2022',
    link: 'https://capable-paletas-d20ffc.netlify.app/',
    imageUrl: '/youtube.png',
  },
  {
    title: 'Netflix Clone',
    description: 'Webapp built with ReactJS, TMDB API and axios.',
    tags: ['React', 'API'],
    status: 'Archived',
    year: '2022',
    link: 'https://dynamic-sable-52dc19.netlify.app/',
    imageUrl: '/netflix.png',
  },
  {
    title: 'CryptoPunk',
    description: 'React.js website to showcase NFTs on the blockchain.',
    tags: ['Web3', 'React'],
    status: 'In Development',
    year: '2023',
    link: 'https://github.com/AadiXC0DE/CryptoPunk',
    imageUrl: '/crypto.jpg',
  },
  {
    title: 'React Chatapp',
    description: 'Chat application with Firebase integration.',
    tags: ['Firebase', 'React'],
    status: 'Coming Soon',
    year: '2023',
    link: '',
    imageUrl: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1974&auto=format&fit=crop',
  }
];

export const WRITINGS: BlogPost[] = [
  {
    title: 'From Intern to Frontend Developer to Selling a Company',
    date: 'Oct 16, 2024',
    readTime: '6 min read',
    description: 'My journey from college intern to entrepreneur and successful exit.',
    link: 'https://dev.to/aadixc0de/from-intern-to-frontend-developer-to-selling-a-company-in-college-16if',
    tags: ['Career', 'Startup'],
  },
  {
    title: 'Understanding the Event Loop in JavaScript',
    date: 'Oct 16, 2024',
    readTime: '5 min read',
    description: 'A simple visual explanation of the event loop for beginners.',
    link: 'https://dev.to/aadixc0de/understanding-the-event-loop-in-javascript-made-simple-512b',
    tags: ['JavaScript', 'Core Concept'],
  },
  {
    title: 'Lead Dev for a Philips Project in College',
    date: 'Oct 16, 2024',
    readTime: '4 min read',
    description: 'How I managed to lead a healthcare innovation project while studying.',
    link: 'https://dev.to/aadixc0de/how-i-ended-up-working-as-a-lead-dev-for-a-philips-project-in-college-1j0d',
    tags: ['Engineering', 'Leadership'],
  },
];

export const SPEAKING: SpeakingItem[] = [
  {
    title: 'Elabs KIIT',
    role: 'Subject Matter Expert',
    date: '2022 - 2023',
    description: 'Mentored hundreds of students in Frontend Development. Conducted in-person sessions on React, JS, and Modern Web standards.',
    stats: '1000+ Students Taught'
  }
];