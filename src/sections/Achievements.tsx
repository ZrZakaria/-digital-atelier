import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: '3rd Place — Web Development Competition',
      organizer: 'ENSAK Student Association Club (AFAAQ)',
      description:
        'Competed against fellow engineering students in a web development challenge, placing third overall.',
      year: '2024',
    },
    {
      icon: Award,
      title: 'High Honors — Baccalaureate',
      organizer: 'Fqih Lemrini High School, Sale',
      description:
        'Earned the baccalaureate diploma in Physics and Chemistry with the highest distinction.',
      year: '2019',
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative" aria-label="Achievements">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-mono text-xs text-muted uppercase tracking-widest block mb-4">
            Achievements — 05
          </span>
          <h2 className="text-4xl lg:text-6xl font-display font-medium text-softwhite">
            Milestones.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 rounded-2xl bg-surface border border-border hover:border-ember/30 transition-all duration-400 group"
              style={{ '--accent': '#FF5C35' } as React.CSSProperties}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-xl bg-ember/10 border border-ember/20 text-ember group-hover:bg-ember/20 transition-colors duration-300">
                  <item.icon size={22} />
                </div>
                <span className="text-mono text-xs text-muted-dim">{item.year}</span>
              </div>
              <h3 className="text-xl font-display font-medium text-softwhite mb-2 group-hover:text-ember transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-dim text-sm mb-3">{item.organizer}</p>
              <p className="text-muted text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-12 border-t border-border"
        >
          <span className="text-mono text-xs text-muted-dim uppercase tracking-widest block mb-6">
            Certifications
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
            {[
              'The Complete JavaScript Course — Udemy (2024)',
              'HTML & CSS — Udemy (2024)',
              'PHP Course — Udemy (2024)',
              'Full Stack Web Development — Amazon / Coursera (in progress)',
            ].map((cert) => (
              <span key={cert} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-dim" />
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
