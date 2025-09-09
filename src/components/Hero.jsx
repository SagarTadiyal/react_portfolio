import { motion } from 'framer-motion'
import { SITE } from '../data/site'

export default function Hero(){
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container-slim grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-primary-600 font-semibold">Hi, I’m {SITE.name}</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">{SITE.role}</h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-prose">{SITE.tagline}</p>
          <div className="flex gap-3">
            <a href="#contact" className="inline-flex items-center rounded-lg px-5 py-3 bg-primary-600 text-white shadow-soft hover:translate-y-[-2px] transition-transform">Hire Me</a>
            <a href="#projects" className="inline-flex items-center rounded-lg px-5 py-3 border border-black/10 dark:border-white/10">View Projects</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="justify-self-center"
        >
          <img src="/src/assets/sagar.jpg" alt="Profile" className="w-64 md:w-80 rounded-2xl shadow-soft" />
        </motion.div>
      </div>
    </section>
  )
}
