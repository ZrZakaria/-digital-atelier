import { GitBranch, Link2, Mail, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="text-softwhite font-display font-medium text-lg">
              Zakaria<span className="text-muted-dim">. Zaouri</span>
            </span>
            <span className="text-mono text-xs text-muted-dim">© {new Date().getFullYear()}</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ZrZakaria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-softwhite transition-colors"
              aria-label="GitHub"
            >
              <GitBranch size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/zakaria-zaouri-2869422b6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-softwhite transition-colors"
              aria-label="LinkedIn"
            >
              <Link2 size={18} />
            </a>
            <a
              href="mailto:zazaouri@gmail.com"
              className="text-muted hover:text-softwhite transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="/cv-en.pdf"
              download="cv-en.pdf"
              className="text-muted hover:text-softwhite transition-colors flex items-center gap-1"
              aria-label="Download English CV"
            >
              <Download size={16} />
              <span className="text-xs hidden sm:inline">CV</span>
            </a>
          </div>

          {/* Tagline */}
          <p className="text-mono text-xs text-muted-dim">
            Built with React · TypeScript · Tailwind · Motion · Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
