import { motion } from 'framer-motion';
import { DossierLabel } from './DossierLabel';
import { fieldNotes } from '../data/fieldnotes';

export function FieldNotes() {
  return (
    <section className="section" id="notes">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <DossierLabel>// Field Notes //</DossierLabel>
        <h2 className="section__heading">
          Things <em>written down.</em>
        </h2>
      </motion.div>

      <div className="notes__list">
        {fieldNotes.map((note, i) => (
          <motion.div
            key={note.id}
            className="note-entry"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="note-entry__date">// {note.date} //</p>
            <p className="note-entry__text">{note.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
