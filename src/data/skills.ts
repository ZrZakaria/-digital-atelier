export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'PHP', 'SQL (PL/SQL)', 'C', 'C++', 'HTML5', 'CSS3'],
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    skills: ['React', 'Angular', 'Node.js', 'Express', 'Tailwind CSS', 'DaisyUI', 'Vite', 'Material Design'],
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    skills: ['Spring Boot', 'Spring Security', 'JPA/Hibernate', 'REST APIs', 'OAuth2 / JWT', 'DDD Architecture'],
  },
  {
    id: 'ai',
    title: 'AI & Computer Vision',
    skills: ['YOLOv8', 'ByteTrack', 'OpenCV', 'scikit-learn', 'FastAPI', 'Ollama', 'RAG Pipelines', 'NLI'],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Mongoose', 'MySQL', 'Oracle SQL', 'Redis', 'pgvector'],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    skills: ['Docker', 'Git / GitHub', 'NX Monorepo', 'Stripe', 'Render', 'Vercel', 'Postman', 'Figma', 'Jupyter', 'Jenkins'],
  },
];
