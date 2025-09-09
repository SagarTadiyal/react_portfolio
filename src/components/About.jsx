import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { SITE } from '../data/site'

export default function About(){
  return (
    <section id="about">
      <div className="container-slim">
        <SectionHeading title="About Me" subtitle="A quick intro and what I love doing." />
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <motion.img
            src="/src/assets/sagar.jpg" alt="Sagar profile"
            className="rounded-xl shadow-soft md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              I’m {SITE.name}, based in {SITE.location}. I enjoy building fast, delightful web apps and deriving
              insights from messy real-world datasets. I’m currently focused on React + Tailwind on the frontend and
              Python + scikit-learn for data projects.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card p-5">
                <h4 className="font-semibold mb-3">Technical Skills</h4>
                <ul className="flex flex-wrap gap-2">
                  {SITE.skills.technical.map(s => <li key={s} className="px-3 py-1 rounded-full bg-primary-50 dark:bg-white/10 text-sm">{s}</li>)}
                </ul>
              </div>
              <div className="card p-5">
                <h4 className="font-semibold mb-3">Soft Skills</h4>
                <ul className="flex flex-wrap gap-2">
                  {SITE.skills.soft.map(s => <li key={s} className="px-3 py-1 rounded-full bg-primary-50 dark:bg-white/10 text-sm">{s}</li>)}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
