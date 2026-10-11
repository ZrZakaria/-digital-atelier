import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? window.scrollY / docHeight : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  const isHome = location.pathname === '/';

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] z-[60] origin-left"
        style={{
          width: '100%',
          background: 'linear-gradient(90deg, #FF5C35, #E34AFF, #D9FF3F)',
        }}
        animate={{ scaleX: scrollProgress }}
        aria-hidden="true"
      />

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-obsidian/80 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href={isHome ? '#hero' : '/'}
              className="text-softwhite font-display font-medium text-lg tracking-tight hover:text-ember transition-colors duration-200"
              aria-label="Back to top"
            >
              ZZ<span className="text-muted-dim">.</span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={isHome ? link.href : '#'}
                  onClick={(e) => {
                    if (!isHome) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-softwhite bg-surface-light'
                      : 'text-muted hover:text-softwhite'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={isHome ? '#contact' : '/#contact'}
                onClick={(e) => {
                  if (!isHome) {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }
                }}
                className="ml-4 px-5 py-2.5 text-sm font-medium bg-softwhite text-obsidian rounded-full hover:bg-ember hover:text-softwhite transition-all duration-300"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-softwhite hover:text-ember transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-softwhite hover:text-ember transition-colors"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 pt-8 px-6">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={isHome ? link.href : '#'}
                  onClick={(e) => {
                    if (!isHome) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                    setMobileOpen(false);
                  }}
                  className="text-2xl font-display font-medium text-softwhite hover:text-ember transition-colors py-3"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={isHome ? '#contact' : '/#contact'}
                onClick={(e) => {
                  if (!isHome) {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }
                  setMobileOpen(false);
                }}
                className="mt-6 px-8 py-3 text-base font-medium bg-softwhite text-obsidian rounded-full hover:bg-ember hover:text-softwhite transition-all duration-300"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
