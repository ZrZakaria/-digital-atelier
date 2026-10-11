import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/projects/ProjectCard';
import { ChevronRight } from 'lucide-react';

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 lg:py-32 relative" aria-label="Selected work">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-mono text-xs text-muted uppercase tracking-widest block mb-4">
            Exhibition — 01
          </span>
          <h2 className="text-4xl lg:text-6xl font-display font-medium text-softwhite mb-6">
            Selected work
          </h2>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            A curated collection of projects that reflect my growth as an engineer — from computer
            vision pipelines to full-stack applications and AI systems.
          </p>
        </motion.div>

        {/* Projects gallery — alternating asymmetric layout */}
        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`py-16 ${i < projects.length - 1 ? 'border-b border-border/50' : ''}`}
            >
              <div
                className={`grid ${
                  i % 2 === 0
                    ? 'grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-start'
                    : 'grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-start'
                }`}
              >
                {/* Left: Artwork */}
                <div className={i % 2 === 1 ? 'lg:order-first' : ''}>
                  <ProjectCard project={project} index={i} />
                </div>

                {/* Right: Details */}
                <div className={`flex flex-col justify-center ${i % 2 === 0 ? 'lg:order-first' : ''}`}>
                  {/* Exhibition number */}
                  <span
                    className="text-mono text-xs uppercase tracking-widest mb-4 block"
                    style={{ color: project.accentColor }}
                  >
                    Piece 0{i + 1}
                  </span>

                  {/* Role */}
                  <div className="mb-6">
                    <span className="text-mono text-xs text-muted-dim uppercase tracking-widest block mb-2">
                      Contribution
                    </span>
                    <p className="text-softwhite/80 text-sm leading-relaxed">{project.role}</p>
                  </div>

                  {/* Key highlights */}
                  <div className="mb-8">
                    <span className="text-mono text-xs text-muted-dim uppercase tracking-widest block mb-3">
                      Highlights
                    </span>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: project.accentColor }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a
                    href={`/work/${project.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-softwhite/70 hover:text-ember transition-colors duration-200"
                  >
                    View Case Study
                    <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center gap-4 text-muted"
        >
          <span className="text-mono text-xs uppercase tracking-widest">More projects on GitHub</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>
      </div>
    </section>
  );
}
