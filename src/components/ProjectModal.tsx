import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type Project } from '../data/projects';
import { X, GithubLogo, ArrowSquareOut } from '@phosphor-icons/react';

interface ProjectModalProps {
  project: Project;
  open: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} case file`}
        >
          <motion.div
            className="modal"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="modal__header">
              <div>
                <span className="modal__exhibit">{project.exhibit} // Case File</span>
                <h2 className="modal__title">{project.name}</h2>
              </div>
              <button className="modal__close" onClick={onClose} aria-label="Close">
                <X size={20} />
              </button>
            </div>

            {project.image && (
              <img
                src={project.image}
                alt={`Case file visual for ${project.name} built by Samuel Oluwayomi`}
                className="modal__img"
              />
            )}

            <div className="modal__body">
              <p className="modal__desc">{project.description}</p>

              {project.won && (
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.1em',
                  color: 'var(--rust)',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <span style={{
                    width: 6, height: 6,
                    borderRadius: '50%',
                    background: 'var(--rust)',
                    display: 'inline-block',
                  }} />
                  {project.won}
                </p>
              )}

              <p className="modal__stack-label">// Tech Stack //</p>
              <div className="modal__stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="modal__tag">{tech}</span>
                ))}
              </div>

              <div className="modal__links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal__link modal__link--primary"
                >
                  <GithubLogo size={14} />
                  View Source
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal__link"
                  >
                    <ArrowSquareOut size={14} />
                    Live Demo
                  </a>
                )}
                {project.colosseum && (
                  <a
                    href={project.colosseum}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal__link"
                  >
                    <ArrowSquareOut size={14} />
                    Colosseum
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
