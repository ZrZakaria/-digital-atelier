import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { caseStudies } from '@/data/case-studies';
import { ArrowLeft, GitBranch, ExternalLink, ChevronRight } from 'lucide-react';
import { type CaseStudy } from '@/data/case-studies';

function CaseStudyArtwork({ project }: { project: CaseStudy }) {
  return (
    <div
      className="relative aspect-[16/10] rounded-2xl overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${project.accentColor}20 0%, #101014 60%)`,
        border: `1px solid ${project.accentColor}30`,
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {project.slug === 'drone-detection' && (
          <>
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,92,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,92,53,0.3) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 w-1/3 h-1/3 border-2 border-ember/60"
            >
              <span className="absolute -top-5 left-0 text-mono text-[10px] text-ember/80">DRN-01 · 95.2% conf</span>
            </motion.div>
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 250">
              <motion.path
                d="M 50 200 Q 150 100, 200 120 T 350 60"
                fill="none"
                stroke="#FF5C35"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>
            <motion.div
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 right-0 h-px bg-ember/30"
            />
          </>
        )}

        {project.slug === 'springstore' && (
          <div className="absolute inset-8 grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2 + i * 0.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
                className="rounded-lg bg-lime/10 border border-lime/20"
              />
            ))}
          </div>
        )}

        {project.slug === 'labproof' && (
          <>
            {['#E34AFF', '#365CFF', '#D9FF3F'].map((color, i) => (
              <motion.div
                key={color}
                animate={{ x: [i * 8 - 8, i * 8 + 4, i * 8 - 8], rotate: [i * 2 - 1, i * 2 + 1, i * 2 - 1] }}
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
          </>
        )}

        {(project.slug === 'thinkboard' || project.slug === 'foodlik') && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-32 h-32 rounded-full opacity-20"
              style={{ background: `radial-gradient(circle, ${project.accentColor}, transparent)` }}
            />
          </div>
        )}

        {project.slug === 'cnesten-lims' && (
          <div className="absolute inset-0 flex items-center justify-center gap-2">
            {['Demande', 'Réception', 'Préparation', 'Analyse', 'Rapport'].map((step, i) => (
              <motion.div
                key={step}
                animate={{ borderColor: ['#D9FF3F', '#365CFF', '#E34AFF', '#FF5C35', '#D9FF3F'][i] + '80' }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="px-3 py-2 rounded-lg border text-[10px] text-mono font-medium"
                style={{
                  color: ['#D9FF3F', '#365CFF', '#E34AFF', '#FF5C35', '#D9FF3F'][i],
                  background: `${['#D9FF3F', '#365CFF', '#E34AFF', '#FF5C35', '#D9FF3F'][i]}0D`,
                }}
              >
                {step}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CaseStudyNavigation({ project }: { project: CaseStudy }) {
  const allSlugs = Object.keys(caseStudies);
  const currentIndex = allSlugs.indexOf(project.slug);
  const prev = allSlugs[currentIndex - 1];
  const next = allSlugs[currentIndex + 1];

  return (
    <div className="flex items-center justify-between pt-12 border-t border-border">
      <span className="text-mono text-xs text-muted-dim uppercase tracking-widest">
        Exhibition — 01
      </span>
      <div className="flex gap-4">
        {prev && (
          <Link
            to={`/work/${prev}`}
            className="flex items-center gap-2 text-sm text-muted hover:text-softwhite transition-colors"
          >
            <ChevronRight className="rotate-180" size={16} />
            Previous
          </Link>
        )}
        {next && (
          <Link
            to={`/work/${next}`}
            className="flex items-center gap-2 text-sm text-muted hover:text-softwhite transition-colors"
          >
            Next
            <ChevronRight size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? caseStudies[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-medium text-softwhite mb-4">
            Exhibition not found
          </h1>
          <p className="text-muted mb-8">The artwork you're looking for isn't in this gallery.</p>
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 px-6 py-3 bg-softwhite text-obsidian font-medium rounded-full hover:bg-ember hover:text-softwhite transition-all duration-300"
          >
            <ArrowLeft size={16} />
            Back to Exhibition
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-obsidian pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-softwhite transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Exhibition
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-mono text-xs text-muted-dim uppercase tracking-widest">
              0{Object.keys(caseStudies).indexOf(slug!) + 1}
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
          <h1 className="text-4xl lg:text-6xl font-display font-medium text-softwhite mb-3">
            {project.title}
          </h1>
          <p className="text-muted text-lg">{project.subtitle}</p>
        </motion.div>

        {/* Artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mb-12"
        >
          <CaseStudyArtwork project={project} />
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-[1fr_0.6fr] gap-12 lg:gap-16">
          {/* Left column */}
          <div className="space-y-12">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-mono text-xs text-muted-dim uppercase tracking-widest block mb-4">
                Overview
              </span>
              <p className="text-softwhite/80 leading-relaxed text-lg">{project.longDescription}</p>
            </motion.section>

            {/* Architecture */}
            {project.architecture && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="text-mono text-xs text-muted-dim uppercase tracking-widest block mb-4">
                  Architecture
                </span>
                <pre className="text-mono text-xs text-muted leading-relaxed p-6 rounded-xl bg-surface border border-border overflow-x-auto whitespace-pre">
                  {project.architecture}
                </pre>
              </motion.section>
            )}

            {/* Challenges & Decisions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-mono text-xs text-muted-dim uppercase tracking-widest block mb-4">
                Challenges & Trade-offs
              </span>
              <ul className="space-y-3">
                {project.challenges?.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: project.accentColor }}
                    />
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Right column — metadata */}
          <div className="space-y-10">
            {/* Role */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <span className="text-mono text-xs text-muted-dim uppercase tracking-widest block mb-3">
                My Role
              </span>
              <p className="text-softwhite/80 text-sm leading-relaxed">{project.role}</p>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <span className="text-mono text-xs text-muted-dim uppercase tracking-widest block mb-4">
                Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-mono text-[11px] px-2.5 py-1 rounded-full bg-surface border border-border text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Key features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <span className="text-mono text-xs text-muted-dim uppercase tracking-widest block mb-4">
                Key Features
              </span>
              <ul className="space-y-2.5">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                    <ChevronRight size={14} className="mt-0.5 flex-shrink-0" style={{ color: project.accentColor }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <span className="text-mono text-xs text-muted-dim uppercase tracking-widest block mb-4">
                Links
              </span>
              <div className="space-y-2">
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface border border-border hover:border-white/20 transition-all duration-200 group"
                >
                  <GitBranch size={16} className="text-muted group-hover:text-softwhite transition-colors" />
                  <span className="text-sm text-muted group-hover:text-softwhite transition-colors">
                    View Repository
                  </span>
                  <ExternalLink size={14} className="ml-auto text-muted-dim" />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface border border-border hover:border-white/20 transition-all duration-200 group"
                  >
                    <ExternalLink size={16} className="text-muted group-hover:text-softwhite transition-colors" />
                    <span className="text-sm text-muted group-hover:text-softwhite transition-colors">
                      Live Demo
                    </span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        <CaseStudyNavigation project={project} />
      </div>
    </div>
  );
}
