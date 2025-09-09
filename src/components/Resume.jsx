import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'

export default function Resume(){
  return (
    <section id="resume">
      <div className="container-slim">
        <SectionHeading title="Resume" subtitle="Download a concise PDF of my experience and skills." />
        <div className="card p-6 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
          <p>Grab my latest CV (PDF).</p>
          <motion.a
            whileHover={{ y: -2 }}
            className="inline-flex items-center rounded-lg px-5 py-3 bg-primary-600 text-white shadow-soft"
            href="/resume.pdf"
            download
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </section>
  )
}
