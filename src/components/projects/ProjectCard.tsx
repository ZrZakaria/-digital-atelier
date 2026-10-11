import { ArrowDown, ExternalLink, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';
import { type Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
      style={{ '--accent': project.accentColor } as React.CSSProperties}
    >
      {/* Exhibition label */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-mono text-xs text-muted-dim uppercase tracking-widest">
          0{index + 1}
        </span>
        <span
          className="text-mono text-xs px-2.5 py-1 rounded-full border"
          style={{
            borderColor: `${project.accentColor}40`,
            color: project.accentColor,
            background: `${project.accentColor}10`,
          }}
        >
          {project.year}
        </span>
      </div>

      {/* Visual artwork */}
      <div
        className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 cursor-pointer"
        style={{
          background: `linear-gradient(135deg, ${project.accentColor}15 0%, #101014 60%)`,
          border: `1px solid ${project.accentColor}25`,
        }}
      >
        {/* Abstract geometric composition per project */}
        <div className="absolute inset-0 overflow-hidden">
          {project.slug === 'drone-detection' && (
            <>
              {/* Tracking grid */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,92,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,92,53,0.3) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              {/* Bounding box frames */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-1/3 h-1/3 border-2 border-ember/60 rounded-sm"
              >
                <span className="absolute -top-5 left-0 text-mono text-[10px] text-ember/80">DRN-01</span>
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 border border-ember/40 rounded-sm"
              >
                <span className="absolute -top-5 left-0 text-mono text-[10px] text-ember/60">DRN-02</span>
              </motion.div>
              {/* Trajectory lines */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 250">
                <motion.path
                  d="M 50 200 Q 150 100, 200 120 T 350 60"
                  fill="none"
                  stroke="#FF5C35"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M 100 220 Q 200 150, 280 170 T 380 100"
                  fill="none"
                  stroke="#FF5C35"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                />
              </svg>
              {/* Scan line */}
              <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-px bg-ember/30"
              />
            </>
          )}

          {project.slug === 'springstore' && (
            <>
              {/* Product grid */}
              <div className="absolute inset-8 grid grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{
                      duration: 2 + i * 0.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.15,
                    }}
                    className="rounded-lg bg-lime/10 border border-lime/20"
                  />
                ))}
              </div>
              {/* Cart overlay */}
              <motion.div
                animate={{ x: [20, 0, 20] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-lime/20 border border-lime/40 flex items-center justify-center"
              >
                <span className="text-mono text-lime text-xs font-medium">3</span>
              </motion.div>
            </>
          )}

          {project.slug === 'labproof' && (
            <>
              {/* Document layers */}
              {['#E34AFF', '#365CFF', '#D9FF3F'].map((color, i) => (
                <motion.div
                  key={color}
                  animate={{
                    x: [i * 8 - 8, i * 8 + 4, i * 8 - 8],
                    rotate: [i * 2 - 1, i * 2 + 1, i * 2 - 1],
                  }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                  className="absolute rounded-lg border opacity-40"
                  style={{
                    width: `${60 - i * 10}%`,
                    height: `${40 - i * 8}%`,
                    top: `${20 + i * 12}%`,
                    left: `${15 + i * 8}%`,
                    borderColor: color,
                    background: `${color}08`,
                  }}
                />
              ))}
              {/* Query cursor */}
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 left-6 w-px h-6 bg-orchid/60"
              />
            </>
          )}

          {project.slug === 'thinkboard' && (
            <>
              {/* Note cards */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 p-8">
                {[
                  { w: '70%', h: '50%', rot: -3, top: '-10%', left: '5%', color: '#365CFF' },
                  { w: '60%', h: '45%', rot: 2, top: '5%', left: '20%', color: '#E34AFF' },
                  { w: '55%', h: '40%', rot: -1, top: '15%', left: '35%', color: '#D9FF3F' },
                ].map((note, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.4,
                    }}
                    className="absolute rounded-lg border shadow-lg"
                    style={{
                      width: note.w,
                      height: note.h,
                      transform: `rotate(${note.rot}deg)`,
                      top: note.top,
                      left: note.left,
                      borderColor: `${note.color}40`,
                      background: `${note.color}0A`,
                    }}
                  >
                    <div className="p-3 space-y-1.5">
                      <div className="h-1.5 rounded-full bg-white/10 w-2/3" />
                      <div className="h-1 rounded-full bg-white/5 w-full" />
                      <div className="h-1 rounded-full bg-white/5 w-5/6" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {project.slug === 'foodlik' && (
            <>
              {/* Map grid */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #FF5C35 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              {/* Route path */}
              <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 250">
                <motion.path
                  d="M 60 180 C 120 180, 140 80, 200 100 S 300 60, 340 120"
                  fill="none"
                  stroke="#FF5C35"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.circle
                  cx={340}
                  cy={120}
                  r="6"
                  fill="#FF5C35"
                  animate={{ r: [5, 8, 5], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.circle
                  cx={60}
                  cy={180}
                  r="5"
                  fill="#D9FF3F"
                  animate={{ r: [4, 7, 4], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </svg>
            </>
          )}

          {project.slug === 'cnesten-lims' && (
            <>
              {/* Workflow pipeline */}
              <div className="absolute inset-0 flex items-center justify-center">
                {['Demande', 'Réception', 'Préparation', 'Analyse', 'Rapport'].map((step, i) => (
                  <motion.div
                    key={step}
                    animate={{
                      borderColor: ['#D9FF3F', '#365CFF', '#E34AFF', '#FF5C35', '#D9FF3F'][i] + '80',
                      background: ['#D9FF3F', '#365CFF', '#E34AFF', '#FF5C35', '#D9FF3F'][i] + '0D',
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className="mx-1 px-3 py-2 rounded-lg border text-[10px] text-mono font-medium"
                    style={{ color: ['#D9FF3F', '#365CFF', '#E34AFF', '#FF5C35', '#D9FF3F'][i] }}
                  >
                    {step}
                  </motion.div>
                ))}
              </div>
              {/* Connection arrows */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 250">
                <line x1="70" y1="125" x2="330" y2="125" stroke="#D9FF3F" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </>
          )}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/40 transition-all duration-400 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-3">
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-softwhite/10 backdrop-blur-sm hover:bg-softwhite/20 transition-colors text-softwhite"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GitBranch size={18} />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-softwhite/10 backdrop-blur-sm hover:bg-softwhite/20 transition-colors text-softwhite"
                aria-label={`View ${project.title} demo`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Title and description */}
      <h3 className="text-2xl lg:text-3xl font-display font-medium text-softwhite mb-2 group-hover:text-ember transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-muted-dim text-sm mb-3">{project.subtitle}</p>
      <p className="text-muted text-sm leading-relaxed mb-4">{project.shortDescription}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="text-mono text-[11px] px-2.5 py-1 rounded-full bg-surface border border-border text-muted"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="text-mono text-[11px] px-2.5 py-1 rounded-full bg-surface border border-border text-muted-dim">
            +{project.technologies.length - 5}
          </span>
        )}
      </div>
    </motion.article>
  );
}
