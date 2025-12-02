
import { Project, Experience, SocialLink } from './types';

export const ABOUT_ME = `I'm Shantanu Tiwari, a Fullstack Web + AI Developer pursuing a B.Tech in Computer Science (Data Science) in Noida, India. I specialize in building intelligent applications that bridge the gap between traditional web architectures and cutting-edge AI models. My focus is on creating scalable, user-centric solutions using Next.js, Cloud platforms, and Multimodal AI.`;

export const CURRENTLY_WORKING_ON = {
  id: 'northbound', // References the project ID in the PROJECTS array
  title: "Northbound",
  description: "AI Ad Manager - Create, Analyze, Publish.",
};

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Full Stack Developer Intern',
    company: 'Ascendix IT',
    period: 'June 2025 – July 2025',
    description: 'Developing a SaaS platform for AI-driven podcast clipping, using multimodal models to detect viral moments and generate vertical clips. Contributing to a real-time voice-based AI application by integrating STT and TTS services. Also collaborating on freelance React-based apps and Electron desktop tools.',
  },
  {
    id: '2',
    role: 'Software Development Intern',
    company: 'Central Ground Water Board',
    period: 'April 2025 – May 2025',
    description: 'Designed a responsive dashboard to visualize groundwater monitoring data, improving transparency for CGWB. Implemented features like dropdowns, search filters, and responsive maps. Integrated Python scripts to automate the ingestion of XML/CSV datasets into the web app.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'northbound',
    title: 'Northbound',
    description: 'AI-powered Ad Manager to create, analyze, and publish ads across platforms.',
    fullDescription: 'Northbound is an all-in-one AI Ad Manager designed to streamline the digital marketing workflow. It empowers users to generate high-converting ad creatives using Generative AI, analyze performance trends across different demographics, and publish campaigns to multiple platforms (Meta, Google, LinkedIn) from a single dashboard.',
    challenge: 'Fragmented ad ecosystems require marketers to switch between multiple tools for creation, analytics, and publishing. unifying these APIs while providing meaningful AI-driven insights requires complex data normalization and real-time processing.',
    solution: 'Developing a centralized dashboard using Next.js and Tailwind. Integrating Gemini/OpenAI for ad copy and image generation. The backend aggregates analytics from platform APIs, normalizing data to provide cross-platform insights.',
    features: ['AI Ad Generation (Text & Image)', 'Cross-Platform Publishing', 'Real-time Trend Analysis', 'Unified Analytics Dashboard', 'Budget Optimization Agents'],
    tags: ['Next.js', 'AI Agents', 'Data Visualization', 'Marketing Tech'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop', // Analytics/Dashboard vibe
    featured: true,
    year: '2025',
    role: 'Creator & Lead Developer',
    link: '#', 
    github: 'https://github.com/Shantanu-Tiwari/northbound-ai'
  },
  {
    id: 'proj4',
    title: 'SkillDev LMS',
    description: 'A comprehensive Learning Management System for online education and skill development.',
    fullDescription: 'SkillDev is a comprehensive Learning Management System (LMS) designed to democratize online education. It provides a robust platform for instructors to create, structure, and monetize courses, while offering students an intuitive and progress-tracked learning environment.',
    challenge: 'Managing complex relational data (courses, chapters, user progress) while ensuring smooth video streaming and secure payment processing.',
    solution: 'Built with a Next.js App Router architecture for optimal performance. Implemented Prisma with PostgreSQL for type-safe database management. Integrated Stripe for secure checkout flows and a dedicated video hosting service for adaptive streaming.',
    features: ['Course Creation Studio', 'Video Streaming Integration', 'Student Dashboard', 'Progress Tracking', 'Secure Payment Gateway'],
    tags: ['Next.js', 'React', 'Prisma', 'Stripe', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop',
    featured: true,
    year: '2025',
    role: 'Fullstack Developer',
    link: '#',
    github: 'https://github.com/Shantanu-Tiwari/skilldev'
  },
  {
    id: 'proj1',
    title: 'API Nexus',
    description: 'A robust Postman-like API testing workspace built for the web.',
    fullDescription: 'API Nexus is a comprehensive full-stack API testing environment designed to mirror the functionality of industry standards like Postman. It provides developers with a robust interface for HTTP request management directly in the browser, eliminating the need for heavy desktop clients.',
    challenge: 'Building a performant, client-side heavy application that handles complex HTTP request/response cycles, including headers, body parsing, and history management, while maintaining a clean and accessible UI.',
    solution: 'Leveraged Next.js for the framework and Zustand for complex state management of request history and configurations. Shadcn UI was used to ensure accessible and consistent design patterns. The architecture is optimized for speed and deployed on Vercel for scalability.',
    features: ['Request History & Collections', 'Response Preview with Syntax Highlighting', 'Customizable Headers & Body', 'Error Handling & Status Codes'],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Shadcn UI'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    featured: true,
    year: '2025',
    role: 'Fullstack Developer',
    link: 'https://api-nexus-landing.vercel.app/',
    github: 'https://github.com/Shantanu-Tiwari'
  },
  {
    id: 'proj2',
    title: 'EvoScan',
    description: 'Pathogenic variant prediction platform using the Evo2 deep learning model.',
    fullDescription: 'EvoScan is a specialized bioinformatics platform that leverages the Evo2 deep learning model to analyze genetic mutations and predict pathogenicity. It bridges complex ML inference with a user-friendly web interface for researchers.',
    challenge: 'Serving a heavy deep learning model (Evo2) cost-effectively while providing real-time analysis results to users. Integrating disparate real-time biological data sources like UCSC Genome Browser and NCBI ClinVar.',
    solution: 'Architected a hybrid system using Next.js for the frontend and FastAPI for the backend. The critical ML inference engine was deployed on Modal, utilizing scalable, GPU-backed serverless execution to serve predictions on demand without maintaining expensive always-on GPU instances.',
    features: ['Deep Learning Inference (Evo2)', 'Real-time Gene Data Integration', 'GPU-backed Serverless Backend', 'Interactive Variant Analysis'],
    tags: ['Next.js', 'FastAPI', 'Modal', 'Python', 'Bioinformatics'],
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop',
    featured: false,
    year: '2025',
    role: 'Lead Developer',
    link: 'https://evo-scan.vercel.app/',
    github: 'https://github.com/Shantanu-Tiwari'
  },
  {
    id: 'proj3',
    title: 'Code Craft',
    description: 'Online multi-language code editor and compiler with real-time sharing.',
    fullDescription: 'Code Craft is a browser-based IDE allowing users to write, compile, and share code in multiple languages instantly. It mimics the experience of desktop editors like VS Code but runs entirely in the cloud.',
    challenge: 'Implementing secure, real-time code execution and synchronization for sharing snippets, while providing a rich editing experience with syntax highlighting and auto-completion.',
    solution: 'Integrated Monaco Editor (the engine behind VS Code) for a premium editing experience. Built a subscription system and utilized Zustand for efficient state management. The compilation engine handles multiple languages securely.',
    features: ['Multi-language Support', 'Monaco Editor Integration', 'Real-time Compilation', 'Code Snippet Sharing', 'Subscription System'],
    tags: ['Next.js', 'Tailwind CSS', 'Monaco Editor', 'Zustand'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop',
    featured: false,
    year: '2024',
    role: 'Fullstack Developer',
    link: 'https://code-craft-umber.vercel.app/',
    github: 'https://github.com/Shantanu-Tiwari'
  },
  {
    id: 'proj5',
    title: 'Terminal Portfolio',
    description: 'A developer-centric portfolio website featuring an interactive command-line interface.',
    fullDescription: 'A unique portfolio experience designed for developers, mimicking a real terminal environment. Users can navigate using standard commands like ls, cd, and cat to explore projects and skills in a nostalgic, keyboard-first interface.',
    challenge: 'Replicating the authentic feel and behavior of a terminal in a web browser, including command parsing, file system simulation, and keyboard event handling without compromising accessibility.',
    solution: 'Developed a custom shell engine in React that manages virtual file systems and command execution. Implemented a responsive text-rendering system to ensure the terminal look-and-feel works across devices.',
    features: ['Interactive CLI', 'Virtual File System', 'Command History', 'Theme Customization', 'Keyboard-first Navigation'],
    tags: ['React', 'TypeScript', 'CSS', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1974&auto=format&fit=crop',
    featured: false,
    year: '2025',
    role: 'Frontend Developer',
    link: 'https://shantanu-terminal.vercel.app/',
    github: 'https://github.com/Shantanu-Tiwari'
  },
  {
    id: 'bloggr',
    title: 'Bloggr',
    description: 'Modern blogging platform with rich text editing and social features.',
    fullDescription: 'Bloggr is a modern, feature-rich blogging platform that combines elegant design with powerful functionality. Built for writers and content creators who want a seamless publishing experience with social engagement features.',
    challenge: 'Creating a user-friendly content management system with real-time collaboration, rich text editing, and social features while maintaining fast performance and SEO optimization.',
    solution: 'Developed using Next.js with a headless CMS architecture. Implemented rich text editing with draft-js, real-time features with WebSockets, and optimized for SEO with server-side rendering.',
    features: ['Rich Text Editor', 'Real-time Collaboration', 'Social Engagement', 'SEO Optimized', 'Responsive Design'],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop',
    featured: false,
    year: '2025',
    role: 'Fullstack Developer',
    link: 'https://bloggr.shantanutiwari.me/',
    github: 'https://github.com/Shantanu-Tiwari'
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/Shantanu-Tiwari', icon: 'Github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/shantanutiwari24', icon: 'Linkedin' },
];

export const TECH_STACK = [
  'Python', 'Java', 'TypeScript', 'React', 'Next.js', 'Node.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'Vercel', 'Git', 'Linux', 'Nginx', 'Tailwind CSS', 'Prisma', 'GraphQL', 'REST APIs'
];

export const AI_SYSTEM_INSTRUCTION = `
You are the digital assistant for Shantanu Tiwari's portfolio website. 
Shantanu is a Fullstack Web + AI Developer based in Noida, India.
Use the following context to answer visitor questions:

About: ${ABOUT_ME}
Experience: ${JSON.stringify(EXPERIENCES)}
Projects: ${JSON.stringify(PROJECTS)}
Stack: ${TECH_STACK.join(', ')}

Tone: Professional, concise, slightly technical but accessible.
If asked about contact info, suggest emailing shantanutiwarigzb@gmail.com.
If asked about something not in the context, politely mention you only know about Shantanu's professional background.
Keep answers under 100 words unless requested otherwise.
`;
