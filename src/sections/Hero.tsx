import { ArrowDown, GitBranch } from 'lucide-react';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ThreeHeroInstallation } from '@/components/hero';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(243,240,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(243,240,235,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Accent glow */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-[600px] h,[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #365CFF 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-40 -left-20 w-[500px] h,[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #E34AFF 0%, transparent 70%)' }}
        />
        {/* Decorative line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '40%' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          className="absolute left-8 lg:left-16 top-[20%] w-px bg-gradient-to-b from-ember/40 via-orchid/20 to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-mono text-xs text-muted uppercase tracking-widest">
                Software Engineer
              </span>
              <span className="w-8 h-px bg-muted-dim" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="text-5xl lg:text-7xl xl:text-8xl font-display font-medium text-softwhite leading-[0.95] tracking-tight mb-8"
            >
              Engineering
              <br />
              the invisible.
              <br />
              <span className="text-muted">Designing what</span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-ember">comes next.</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C40 2 80 2 100 4.5C120 7 160 5 199 3.5" stroke="#FF5C35" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="text-lg lg:text-xl text-muted leading-relaxed max-w-lg mb-10"
            >
              I build software at the intersection of full-stack engineering, artificial intelligence,
              and creative exploration. Currently a final-year engineering student at ENSAK, Kenitra.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="group relative px-7 py-3.5 bg-softwhite text-obsidian font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(243,240,235,0.2)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore My Work
                  <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                </span>
              </a>
              <a
                href="https://github.com/ZrZakaria"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border border-border text-softwhite font-medium rounded-full hover:border-softwhite/40 hover:bg-surface-light transition-all duration-300 flex items-center gap-2"
              >
                <GitBranch size={16} />
                GitHub
              </a>
            </motion.div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex items-center gap-3 text-sm text-muted"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-40" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime" />
              </span>
              <span>
                Available for PFE / internship — from{' '}
                <span className="text-softwhite font-medium">February 2027</span>
              </span>
            </motion.div>
          </div>

          {/* Right side — Three.js installation (lazy-loaded) */}
          <Suspense
            fallback={
              <div className="relative hidden lg:block w-full aspect-square max-w-md mx-auto">
                <div
                  className="absolute inset-0 rounded-full flex items-center justify-center"
                  style={{
                    background: 'radial-gradient(circle at 40% 40%, #E34AFF30, #365CFF10, transparent 70%)',
                  }}
                >
                  <div
                    className="w-24 h-24 rounded-full animate-pulse"
                    style={{ background: 'radial-gradient(circle at 35% 35%, #E34AFF, #365CFF)' }}
                  />
                </div>
              </div>
            }
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Glow behind canvas */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #E34AFF 0%, #365CFF 40%, transparent 70%)' }}
              />
              <ThreeHeroInstallation />
            </motion.div>
          </Suspense>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-xs"
        >
          <span className="text-mono uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-muted to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
