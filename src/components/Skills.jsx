import SectionHeading from './SectionHeading'
import { SITE } from '../data/site'
import { motion } from 'framer-motion'

export default function Skills(){
  const all = [...SITE.skills.technical, ...SITE.skills.soft]
  return (
    <section id="skills">
      <div className="container-slim">
        <SectionHeading title="Skills" subtitle="Tools and traits I use to ship." />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {all.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="card p-4 text-center"
            >
              <span className="text-sm font-medium">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
