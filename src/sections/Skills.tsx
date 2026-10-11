import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative" aria-label="Technical skills">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-mono text-xs text-muted uppercase tracking-widest block mb-4">
            Skills — 04
          </span>
          <h2 className="text-4xl lg:text-6xl font-display font-medium text-softwhite">
            Tools of<br />
            <span className="text-muted">the trade.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 lg:p-8 rounded-2xl bg-surface border border-border hover:border-white/10 transition-colors duration-300"
            >
              <span className="text-mono text-xs text-muted-dim uppercase tracking-widest block mb-4">
                {category.id}
              </span>
              <h3 className="text-xl font-display font-medium text-softwhite mb-5">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-muted px-3 py-1.5 rounded-full bg-obsidian border border-border hover:border-muted-dim hover:text-softwhite transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-12 border-t border-border flex flex-wrap items-center gap-8"
        >
          <span className="text-mono text-xs text-muted-dim uppercase tracking-widest">Languages</span>
          {['Arabic — Native', 'French — Fluent', 'English — Fluent'].map((lang) => (
            <span key={lang} className="text-softwhite/70 text-sm">
              {lang}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
