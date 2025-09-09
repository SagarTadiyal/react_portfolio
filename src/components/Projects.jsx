import SectionHeading from './SectionHeading'
import { SITE } from '../data/site'
import { motion } from 'framer-motion'

function ProjectCard({ p, i }){
  return (
    <motion.a
      href={p.demo || '#'}
      target={p.demo ? '_blank' : undefined}
      rel="noreferrer"
      className="card overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
    >
      <img src={p.img} alt={p.title} className="h-48 w-full object-cover group-hover:scale-105 transition-transform" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">{p.title}</h4>
          <span className="text-xs text-slate-500">{p.tags.join(' • ')}</span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{p.desc}</p>
      </div>
    </motion.a>
  )
}

export default function Projects(){
  return (
    <section id="projects">
      <div className="container-slim">
        <SectionHeading title="Projects" subtitle="A few things I’ve built and shipped." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE.projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}
