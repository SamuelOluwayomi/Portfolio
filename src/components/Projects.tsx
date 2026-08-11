import { motion } from 'framer-motion';
import { DossierLabel } from './DossierLabel';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section className="section" id="work">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <DossierLabel>// Case Files //</DossierLabel>
        <h2 className="section__heading">
          The <em>work.</em>
        </h2>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          fontWeight: 300,
          color: 'var(--charcoal-light)',
          marginBottom: '3rem',
          maxWidth: 560,
        }}>
          Eleven builds. Every submission, every shipped product, every thing that
          got finished — regardless of whether it won. Click any file to open the
          case.
        </p>
      </motion.div>

      <div className="projects__grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
