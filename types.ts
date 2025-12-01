
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  features?: string[];
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
  featured?: boolean;
  year?: string;
  role?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // lucide icon name
}
