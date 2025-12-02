import { Project, Experience, SocialLink } from './types';

export const ABOUT_ME = `I'm Shantanu Tiwari, a Fullstack Web + AI Developer pursuing a B.Sc in Computer Science (Data Science) in Noida, India. I specialize in building intelligent applications that bridge the gap between traditional web architectures and cutting-edge AI models. My focus is on creating scalable, user-centric solutions using Next.js, Cloud platforms, and Multimodal AI.`;

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
    year: '2024',
    role: 'Fullstack Developer',
    link: '#', // Placeholder as per resume "Live"
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
    featured: true,
    year: '2024',
    role: 'Lead Developer',
    link: '#',
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
    link: '#',
    github: 'https://github.com/Shantanu-Tiwari'
  },
];

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/Shantanu-Tiwari', icon: 'Github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/shantanutiwari24', icon: 'Linkedin' },
];

export const TECH_STACK = [
  'Python', 'Java', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS', 'GCP', 'Modal', 'Shadcn UI'
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