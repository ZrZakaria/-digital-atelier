import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative" aria-label="Professional experience">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-mono text-xs text-muted uppercase tracking-widest block mb-4">
            Experience — 03
          </span>
          <h2 className="text-4xl lg:text-6xl font-display font-medium text-softwhite">
            Where I've<br />
            <span className="text-muted">built things.</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative pb-16 last:pb-0"
            >
              {/* Timeline line */}
              {i < experiences.length - 1 && (
                <div className="absolute left-0 top-12 bottom-0 w-px bg-border" />
              )}

              {/* Timeline dot */}
              <div
                className="absolute left-0 top-12 w-2.5 h-2.5 rounded-full -translate-x-[5px]"
                style={{
                  background: i === 0 ? '#D9FF3F' : '#365CFF',
                  boxShadow: `0 0 12px ${i === 0 ? '#D9FF3F' : '#365CFF'}60`,
                }}
              />

              <div className="ml-8">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-mono text-xs text-muted-dim uppercase tracking-widest">
                    {exp.period}
                  </span>
                  <span className="text-mono text-xs px-2.5 py-0.5 rounded-full border border-border text-muted">
                    {exp.type}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-display font-medium text-softwhite mb-1">
                  {exp.title}
                </h3>
                <p className="text-muted font-medium mb-6">{exp.organization}</p>

                <p className="text-muted leading-relaxed mb-6 max-w-2xl">{exp.description}</p>

                <ul className="space-y-2.5 mb-6">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cobalt/70 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-mono text-[11px] px-2.5 py-1 rounded-full bg-surface border border-border text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-border"
        >
          <span className="text-mono text-xs text-muted uppercase tracking-widest block mb-6">
            Education
          </span>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <span className="text-mono text-xs text-muted-dim block mb-1">2022 – Present</span>
              <h4 className="text-softwhite font-medium text-lg mb-1">Engineering Degree — Computer Engineering</h4>
              <p className="text-muted text-sm">ENSAK, Kenitra, Morocco</p>
            </div>
            <div>
              <span className="text-mono text-xs text-muted-dim block mb-1">2019 – 2022</span>
              <h4 className="text-softwhite font-medium text-lg mb-1">High School Diploma — Physics & Chemistry</h4>
              <p className="text-muted text-sm">Fqih Lemrini High School, Sale — With High Honors</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
