import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'

const TESTIMONIALS = [
  { quote: 'Sagar is thoughtful, fast, and detail-oriented. A joy to collaborate with.', author: 'Colleague A' },
  { quote: 'He translates business problems into clean, actionable dashboards.', author: 'Mentor B' },
  { quote: 'Pixel-perfect UI and clear communication throughout.', author: 'Client C' },
]

export default function Testimonials(){
  return (
    <section id="testimonials">
      <div className="container-slim">
        <SectionHeading title="Testimonials" subtitle="What people say about working with me." />
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={i}
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <p className="italic">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-600 dark:text-slate-300">— {t.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
