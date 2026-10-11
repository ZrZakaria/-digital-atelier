import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch, Link2, Mail, Download } from 'lucide-react';
import { Trophy, Award } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative" aria-label="Contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-mono text-xs text-muted uppercase tracking-widest block mb-4">
            Contact — 06
          </span>
          <h2 className="text-5xl lg:text-7xl xl:text-8xl font-display font-medium text-softwhite mb-6">
            Let&apos;s build
            <br />
            <span className="text-muted">something together.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl leading-relaxed">
            I&apos;m always open to discussing new opportunities, interesting projects, or just a good
            conversation about engineering and AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Left: Contact cards */}
          <div className="space-y-4">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'zazaouri@gmail.com',
                href: 'mailto:zazaouri@gmail.com',
                color: '#FF5C35',
              },
              {
                icon: GitBranch,
                label: 'GitHub',
                value: 'github.com/ZrZakaria',
                href: 'https://github.com/ZrZakaria',
                color: '#365CFF',
              },
              {
                icon: Link2,
                label: 'LinkedIn',
                value: 'linkedin.com/in/zakaria-zaouri',
                href: 'https://www.linkedin.com/in/zakaria-zaouri-2869422b6',
                color: '#D9FF3F',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-5 p-5 rounded-xl bg-surface border border-border hover:border-white/15 transition-all duration-300 group"
              >
                <div
                  className="p-3 rounded-lg transition-colors duration-300"
                  style={{ background: `${item.color}15`, color: item.color }}
                >
                  <item.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-mono text-xs text-muted-dim uppercase tracking-widest block mb-0.5">
                    {item.label}
                  </span>
                  <span className="text-softwhite font-medium truncate">{item.value}</span>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted-dim group-hover:text-softwhite transition-colors flex-shrink-0"
                />
              </a>
            ))}
          </div>

          {/* Right: CTA area */}
          <div
            className="rounded-2xl p-8 lg:p-10 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(135deg, #19191F 0%, #1E1E26 100%)',
              border: '1px solid #2A2A36',
            }}
          >
            <div>
              <span className="text-mono text-xs text-muted-dim uppercase tracking-widest block mb-4">
                Availability
              </span>
              <h3 className="text-2xl lg:text-3xl font-display font-medium text-softwhite mb-3">
                Ready for your next project
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                I&apos;m available for a PFE or pre-employment internship starting February 2027.
                Whether it&apos;s a full-stack application, an AI system, or something experimental —
                I&apos;d love to hear about it.
              </p>

              {/* CV Downloads */}
              <div className="mb-8">
                <span className="text-mono text-xs text-muted-dim uppercase tracking-widest block mb-3">
                  Curriculum Vitae
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/cv-en.pdf"
                    download="cv-en.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-softwhite/10 border border-border rounded-full text-sm text-softwhite hover:bg-softwhite/20 transition-all duration-200"
                  >
                    <Download size={14} />
                    CV (English)
                  </a>
                  <a
                    href="/cv-fr.pdf"
                    download="cv-fr.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-softwhite/10 border border-border rounded-full text-sm text-softwhite hover:bg-softwhite/20 transition-all duration-200"
                  >
                    <Download size={14} />
                    CV (Français)
                  </a>
                </div>
              </div>
            </div>

            <a
              href="mailto:zazaouri@gmail.com"
              className="block w-full text-center px-6 py-3.5 border border-border text-softwhite font-medium rounded-full hover:border-softwhite/40 transition-all duration-300"
            >
              Send me an email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
