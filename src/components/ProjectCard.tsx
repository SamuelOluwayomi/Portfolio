import { useState } from 'react';
import { motion } from 'framer-motion';
import { type Project } from '../data/projects';
import { StampBadge } from './StampBadge';
import { ProjectModal } from './ProjectModal';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const rotations = [-2.5, 1.8, -1.2, 2.2, -1.8, 1.2, -2.2, 1.5, -1.5, 2.0, -0.8];

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const rotation = rotations[index % rotations.length];

  return (
    <>
      <motion.div
        className="project-card"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
        onClick={() => setModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setModalOpen(true)}
        aria-label={`Open ${project.name} case file`}
      >
        <div
          className="project-card__frame"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`Project screenshot for ${project.name} built by Samuel Oluwayomi (DevSam)`}
              className="project-card__img"
            />
          ) : (
            <div className="project-card__img project-card__img--placeholder">
              {project.exhibit}
            </div>
          )}
          <div className="project-card__meta">
            <span className="project-card__name">{project.name}</span>
            <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
              {project.won && <StampBadge variant="win" rotate={-2}>Win</StampBadge>}
              <StampBadge
                variant={project.status === 'ARCHIVED' ? 'archived' : 'shipped'}
                rotate={1.5}
              >
                {project.status}
              </StampBadge>
            </div>
          </div>
        </div>
      </motion.div>

      <ProjectModal
        project={project}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
