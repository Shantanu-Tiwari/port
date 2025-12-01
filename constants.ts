
import { Project, Experience, SocialLink } from './types';

export const ABOUT_ME = `I'm Alex, a Fullstack Engineer specialized in building AI-native applications. I bridge the gap between robust web infrastructure and cutting-edge generative AI models. Currently obsessing over agentic workflows and React Server Components.`;

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Senior AI Engineer',
    company: 'Nexus AI',
    period: '2023 - Present',
    description: 'Leading the frontend architecture for a generative AI video platform. Implemented real-time streaming protocols and optimized inference latency.',
  },
  {
    id: '2',
    role: 'Fullstack Developer',
    company: 'Vercel (Contract)',
    period: '2021 - 2023',
    description: 'Contributed to the core Next.js edge runtime. Built internal tooling for deployment analytics.',
  },
  {
    id: '3',
    role: 'Frontend Engineer',
    company: 'StartUp Inc',
    period: '2019 - 2021',
    description: 'Migrated legacy PHP monolith to React/TypeScript. Improved page load speed by 40%.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'Cognition Flow',
    description: 'An AI-powered workspace that auto-organizes your notes using Gemini 1.5 Pro.',
    fullDescription: 'Cognition Flow reimagines personal knowledge management by acting as an active agent in your note-taking process. Instead of static text, every note is embedded into a vector space, allowing for semantic connections that surface relevant information exactly when you need it.',
    challenge: 'Users often hoard information but struggle to retrieve it. Traditional keyword search fails when concepts are related conceptually but not lexically. We needed a system that "understands" the intent behind the notes.',
    solution: 'We built a RAG (Retrieval Augmented Generation) pipeline using Gemini 1.5 Pro. Every keystroke is analyzed asynchronously. When a user types about "deployment", the system proactively sidebar-surfaces their previous notes on "Docker" and "AWS" without manual tagging.',
    features: ['Real-time Semantic Search', 'Auto-tagging taxonomy', 'Graph visualization of ideas', 'Multi-modal input (Images/Audio)'],
    tags: ['Next.js', 'Gemini API', 'Vector DB', 'Tailwind'],
    image: 'https://picsum.photos/1200/800?random=1',
    featured: true,
    year: '2024',
    role: 'Lead Engineer',
    link: 'https://example.com',
    github: 'https://github.com'
  },
  {
    id: 'proj2',
    title: 'VoiceAgent.js',
    description: 'Open source library for building real-time voice conversational agents in the browser.',
    fullDescription: 'VoiceAgent.js is a lightweight abstraction layer over the Web Audio API and WebRTC, designed to make building voice-to-voice AI assistants accessible to frontend developers. It handles VAD (Voice Activity Detection), buffering, and echo cancellation out of the box.',
    challenge: 'Browser-based audio handling is notoriously difficult due to varying sampling rates, latency issues, and browser inconsistencies. Developers spending time on low-level audio plumbing instead of application logic.',
    solution: 'I created a framework-agnostic library that normalizes audio streams into a consistent 16kHz 16-bit PCM format, ready for direct streaming to LLM WebSocket endpoints. It includes a custom VAD worklet that runs off the main thread.',
    features: ['Browser-agnostic AudioWorklet', 'Client-side VAD', 'Zero-dependency', 'React Hooks included'],
    tags: ['TypeScript', 'WebAudio API', 'Node.js'],
    image: 'https://picsum.photos/1200/800?random=2',
    featured: true,
    year: '2023',
    role: 'Maintainer'
  },
  {
    id: 'proj3',
    title: 'Syntax UI',
    description: 'A component library designed for AI interfaces, featuring streaming text components.',
    fullDescription: 'Syntax UI fills the gap in current UI libraries which are static-first. AI interfaces require components that handle streaming states, thinking indicators, and markdown rendering efficiently.',
    challenge: 'Standard UI kits flash or jitter when displaying streaming tokens from an LLM. There was no standardized way to visualize "thinking" or "searching" states in a chat interface.',
    solution: 'A collection of React components optimized for high-frequency updates. It uses a custom virtualizer for chat lists and CSS-based layout stability techniques to prevent layout shift during generation.',
    tags: ['React', 'Storybook', 'CSS Modules'],
    image: 'https://picsum.photos/1200/800?random=3',
    featured: false,
    year: '2023',
    role: 'Solo Developer'
  },
  {
    id: 'proj4',
    title: 'RepoChat',
    description: 'Chat with any GitHub repository. Uses RAG to answer code-specific questions.',
    fullDescription: 'RepoChat allows developers to onboard to new codebases faster by asking natural language questions. It indexes the AST (Abstract Syntax Tree) of the code to understand function relationships, not just text matches.',
    tags: ['Python', 'LangChain', 'React'],
    image: 'https://picsum.photos/1200/800?random=4',
    featured: false,
    year: '2022',
    role: 'Fullstack',
    github: 'https://github.com'
  },
];

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com', icon: 'Github' },
  { platform: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
];

export const TECH_STACK = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS', 'Gemini API', 'PyTorch'
];

export const AI_SYSTEM_INSTRUCTION = `
You are the digital assistant for Alex Chen's portfolio website. 
Alex is a Fullstack Web + AI Developer.
Use the following context to answer visitor questions:

About: ${ABOUT_ME}
Experience: ${JSON.stringify(EXPERIENCES)}
Projects: ${JSON.stringify(PROJECTS)}
Stack: ${TECH_STACK.join(', ')}

Tone: Professional, concise, slightly technical but accessible.
If asked about contact info, suggest emailing alex@example.com.
If asked about something not in the context, politely mention you only know about Alex's professional background.
Keep answers under 100 words unless requested otherwise.
`;
