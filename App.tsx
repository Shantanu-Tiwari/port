
import React, { useState, useEffect, useRef } from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, Sun, Moon, Brain, Zap, Layout, Calendar, ArrowLeft, ExternalLink, Code } from 'lucide-react';
import { ABOUT_ME, EXPERIENCES, PROJECTS, TECH_STACK, SOCIALS } from './constants';
import AIChat from './components/AIChat';
import { Experience, Project } from './types';

// --- Animated Timeline Item Component ---
const TimelineItem: React.FC<{ experience: Experience; index: number }> = ({ experience, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.2 });

    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return (
    <div ref={domRef} className={`relative pl-8 md:pl-12 py-2 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className={`absolute -left-[5px] top-3 h-2.5 w-2.5 rounded-full ring-4 ring-background transition-all duration-500 delay-100 ${isVisible ? 'bg-primary scale-100' : 'bg-border scale-0'}`} />
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-baseline mb-1">
        <h3 className="text-lg font-semibold text-primary">{experience.role}</h3>
        <span className="text-secondary text-sm font-medium">@ {experience.company}</span>
      </div>
      <div className="flex items-center gap-2 text-xs font-mono text-secondary mb-3">
        <Calendar className="w-3 h-3" />
        {experience.period}
      </div>
      <p className="text-secondary text-sm leading-relaxed max-w-2xl">
        {experience.description}
      </p>
    </div>
  );
};

// --- Home View Component ---
const HomeView: React.FC<{ onOpenProject: (project: Project) => void; isDarkMode: boolean; toggleTheme: () => void }> = ({ onOpenProject, isDarkMode, toggleTheme }) => {
  return (
    <div className="space-y-24 animate-fade-up">
       {/* Header / Hero */}
       <section className="space-y-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="font-bold text-background text-lg">A</span>
                </div>
                <span className="font-mono text-sm text-secondary">Alex Chen / Portfolio</span>
            </div>
            
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-surface text-secondary hover:text-primary transition-all duration-300"
                aria-label="Toggle Theme"
            >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-[1.1]">
            Building intelligent <br />
            web interfaces.
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-xl leading-relaxed">
            {ABOUT_ME}
          </p>

          <div className="flex gap-4 pt-4">
            {SOCIALS.map((social) => {
                const Icon = social.icon === 'Github' ? Github : social.icon === 'Twitter' ? Twitter : Linkedin;
                return (
                    <a 
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-secondary hover:text-primary transition-colors hover:scale-110 duration-200"
                    >
                        <Icon className="w-5 h-5" />
                    </a>
                )
            })}
             <a href="mailto:alex@example.com" className="text-secondary hover:text-primary transition-colors hover:scale-110 duration-200">
                <Mail className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-sm font-mono uppercase tracking-wider text-secondary flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                    Selected Projects
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.map((project) => (
                    <div 
                        key={project.id} 
                        onClick={() => onOpenProject(project)}
                        className={`group relative bg-surface/40 backdrop-blur-md rounded-xl overflow-hidden cursor-pointer hover:bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5 ${project.featured ? 'md:col-span-2' : ''}`}
                    >
                        {project.image && project.featured && (
                            <div className="h-48 md:h-64 overflow-hidden relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-90" />
                            </div>
                        )}
                        <div className="p-6 space-y-4">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-semibold text-primary group-hover:underline decoration-secondary underline-offset-4">{project.title}</h3>
                                <ArrowUpRight className="w-4 h-4 text-secondary group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                            </div>
                            <p className="text-secondary text-sm leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded text-secondary bg-background/30 group-hover:bg-background/50 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-8">
            <h2 className="text-sm font-mono uppercase tracking-wider text-secondary flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                Experience
            </h2>
            <div className="relative border-l border-border/40 ml-3 md:ml-4 space-y-12 pb-4">
                <div className="absolute top-0 left-[-1px] w-[1px] h-full bg-gradient-to-b from-primary via-transparent to-transparent opacity-20"></div>
                {EXPERIENCES.map((exp, index) => (
                    <TimelineItem key={exp.id} experience={exp} index={index} />
                ))}
            </div>
        </section>

        {/* Stack & Focus Area */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface/40 backdrop-blur-md p-6 rounded-xl hover:bg-surface/60 transition-colors duration-300">
                <h3 className="text-sm font-mono uppercase text-secondary mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                    {TECH_STACK.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-background/30 rounded-md text-xs text-primary hover:bg-background/50 transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="bg-surface/40 backdrop-blur-md p-6 rounded-xl hover:bg-surface/60 transition-colors duration-300 flex flex-col justify-between">
                 <h3 className="text-sm font-mono uppercase text-secondary mb-4">Focus</h3>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 group">
                        <div className="p-2 bg-background/50 rounded-lg text-secondary group-hover:text-primary group-hover:bg-background transition-colors">
                            <Brain className="w-4 h-4" />
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-primary">AI Integration</h4>
                            <p className="text-xs text-secondary mt-0.5">RAG Pipelines, Agents, & Fine-tuning</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 group">
                        <div className="p-2 bg-background/50 rounded-lg text-secondary group-hover:text-primary group-hover:bg-background transition-colors">
                            <Layout className="w-4 h-4" />
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-primary">Fullstack Systems</h4>
                            <p className="text-xs text-secondary mt-0.5">Scalable React & Node Architectures</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 group">
                        <div className="p-2 bg-background/50 rounded-lg text-secondary group-hover:text-primary group-hover:bg-background transition-colors">
                            <Zap className="w-4 h-4" />
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-primary">Performance</h4>
                            <p className="text-xs text-secondary mt-0.5">Core Web Vitals & Edge Optimization</p>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
        
        {/* Footer */}
        <footer className="pt-12 pb-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-secondary">
            <p>© {new Date().getFullYear()} Alex Chen. All rights reserved.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-1">
                Designed with <span className="text-primary font-medium">Gemini</span> & <span className="text-primary font-medium">React</span>
            </p>
        </footer>
    </div>
  );
};

// --- Project Detail Component ---
const ProjectDetail: React.FC<{ project: Project; onBack: () => void; isDarkMode: boolean; toggleTheme: () => void }> = ({ project, onBack, isDarkMode, toggleTheme }) => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="animate-fade-in space-y-12">
            {/* Header / Nav */}
            <div className="flex items-center justify-between sticky top-6 z-40">
                 <button 
                    onClick={onBack}
                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 backdrop-blur-md border border-border/50 text-sm font-medium text-secondary hover:text-primary hover:border-border transition-all"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back
                 </button>

                 <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-surface/50 backdrop-blur-md border border-border/50 hover:bg-surface text-secondary hover:text-primary transition-all duration-300"
                >
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
            </div>

            {/* Title Block */}
            <div className="space-y-4 pt-4 animate-fade-up">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">{project.title}</h1>
                    <div className="flex gap-3">
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-background text-sm font-medium hover:opacity-90 transition-opacity">
                                Visit Site <ExternalLink className="w-3 h-3" />
                            </a>
                        )}
                        {project.github && (
                             <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-primary text-sm font-medium hover:bg-border transition-colors">
                                <Github className="w-3 h-3" /> Code
                            </a>
                        )}
                    </div>
                </div>
                <p className="text-xl text-secondary max-w-2xl leading-relaxed">{project.fullDescription || project.description}</p>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/20 shadow-2xl animate-scale-in delay-100">
                <img 
                    src={project.image || `https://picsum.photos/seed/${project.id}/1200/800`} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border/40 animate-fade-up delay-200">
                <div className="space-y-1">
                    <p className="text-xs font-mono text-secondary uppercase tracking-wider">Role</p>
                    <p className="text-sm font-medium text-primary">{project.role || 'Developer'}</p>
                </div>
                <div className="space-y-1">
                    <p className="text-xs font-mono text-secondary uppercase tracking-wider">Year</p>
                    <p className="text-sm font-medium text-primary">{project.year || '2023'}</p>
                </div>
                 <div className="space-y-1 col-span-2">
                    <p className="text-xs font-mono text-secondary uppercase tracking-wider">Stack</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {project.tags.map(tag => (
                             <span key={tag} className="text-xs text-primary">{tag}{tag === project.tags[project.tags.length -1] ? '' : ','}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Narrative Sections */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 animate-fade-up delay-300">
                <div className="space-y-8">
                     {project.features && (
                        <div>
                            <h3 className="text-sm font-mono uppercase text-secondary mb-4 flex items-center gap-2">
                                <Zap className="w-4 h-4" /> Key Features
                            </h3>
                            <ul className="space-y-3">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="text-sm text-primary flex items-start gap-2">
                                        <span className="text-secondary mt-1.5 w-1 h-1 rounded-full bg-secondary block" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                     )}
                </div>

                <div className="space-y-12">
                    {project.challenge && (
                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-primary">The Challenge</h2>
                            <p className="text-secondary leading-relaxed">
                                {project.challenge}
                            </p>
                        </section>
                    )}
                    
                    {project.solution && (
                        <section className="space-y-4">
                            <h2 className="text-xl font-semibold text-primary">The Solution</h2>
                            <p className="text-secondary leading-relaxed">
                                {project.solution}
                            </p>
                        </section>
                    )}
                </div>
            </div>

             {/* Footer */}
            <footer className="pt-24 pb-8 flex justify-center text-xs text-secondary">
                <p>© {new Date().getFullYear()} Alex Chen. All rights reserved.</p>
            </footer>
        </div>
    );
};


// --- Main App Component ---
const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentView, setCurrentView] = useState<'home' | 'project'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleOpenProject = (project: Project) => {
      setSelectedProject(project);
      setCurrentView('project');
  };

  const handleBackToHome = () => {
      setCurrentView('home');
      // Timeout to allow state to settle before clearing data if we want animation, 
      // but for now immediate is snappier
      setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen text-primary selection:bg-primary selection:text-background transition-colors duration-300 relative overflow-hidden">
      
      {/* Modern Gradient Background */}
      <div className="fixed inset-0 -z-10 transition-opacity duration-700">
        <div className={`absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[100px] opacity-40 mix-blend-normal pointer-events-none 
          ${isDarkMode ? 'bg-indigo-900/30' : 'bg-blue-100'}`} 
        />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[80px] opacity-30 mix-blend-normal pointer-events-none
          ${isDarkMode ? 'bg-zinc-800/20' : 'bg-indigo-50'}`}
        />
      </div>

      {/* Main Content Area */}
      <main className="max-w-3xl mx-auto px-6 py-20 md:py-28 relative z-10 min-h-screen">
          {currentView === 'home' ? (
              <HomeView 
                onOpenProject={handleOpenProject} 
                isDarkMode={isDarkMode} 
                toggleTheme={toggleTheme} 
              />
          ) : (
             selectedProject && (
                 <ProjectDetail 
                    project={selectedProject} 
                    onBack={handleBackToHome}
                    isDarkMode={isDarkMode} 
                    toggleTheme={toggleTheme}
                 />
             )
          )}
      </main>

      <AIChat />
    </div>
  );
};

export default App;
