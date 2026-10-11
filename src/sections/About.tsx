import { motion } from 'framer-motion';
import profilePic from '@/assets/profile_pic.jpeg';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative" aria-label="About me">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-mono text-xs text-muted uppercase tracking-widest block mb-4">
            About — 02
          </span>
          <h2 className="text-4xl lg:text-6xl font-display font-medium text-softwhite">
            The engineer<br />
            <span className="text-muted">behind the code.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={profilePic}
                alt="Zakaria Zaouri"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
              {/* Accent border */}
              <div className="absolute inset-0 rounded-2xl border border-white/10" />
            </div>
            {/* Floating label */}
            <div
              className="absolute -bottom-4 -right-4 px-5 py-3 rounded-xl text-mono text-sm font-medium"
              style={{
                background: '#19191F',
                border: '1px solid #2A2A36',
                color: '#D9FF3F',
              }}
            >
              ENSAK '27
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl lg:text-2xl text-softwhite/90 leading-relaxed font-display"
            >
              I'm a final-year computer engineering student at{' '}
              <span className="text-ember">ENSAK</span> in Kenitra, Morocco. I build software at the
              intersection of full-stack engineering and artificial intelligence — from REST APIs and
              e-commerce platforms to computer vision pipelines and RAG systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted leading-relaxed"
            >
              My approach to engineering is rooted in curiosity and craft. I enjoy taking a problem,
              understanding its constraints, and building something that works well — with attention
              to architecture, user experience, and the details that make software feel thoughtful.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted leading-relaxed"
            >
              I've interned at{' '}
              <span className="text-softwhite/80 font-medium">CNESTEN</span>, where I contributed
              to a laboratory information management system for nuclear spectrometry, and at{' '}
              <span className="text-softwhite/80 font-medium">ABIRNET</span>, where I redesigned a
              company website from scratch. These experiences taught me how to ship software that
              people actually use.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted leading-relaxed"
            >
              When I'm not building production systems, I'm exploring generative AI, experimenting
              with creative coding, or digging into the internals of the tools I use every day. I
              believe the best engineers are also relentless learners.
            </motion.p>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-8 grid grid-cols-2 gap-6"
            >
              {[
                { label: 'Based in', value: 'Kenitra, Morocco' },
                { label: 'Education', value: 'ENSAK — Engineering' },
                { label: 'Languages', value: 'Arabic · French · English' },
                { label: 'Availability', value: 'From February 2027' },
              ].map((fact) => (
                <div key={fact.label}>
                  <span className="text-mono text-xs text-muted-dim uppercase tracking-widest block mb-1">
                    {fact.label}
                  </span>
                  <span className="text-softwhite text-sm font-medium">{fact.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
