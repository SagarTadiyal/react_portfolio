import SectionHeading from './SectionHeading'
import { SITE } from '../data/site'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6'
import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    // Frontend-only demo: show a success message.
    setStatus('Thanks! Your message was captured locally (no backend wired yet).')
    e.currentTarget.reset()
  }

  return (
    <section id="contact">
      <div className="container-slim">
        <SectionHeading title="Contact" subtitle="Got a project or role in mind? Let’s talk." />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 card p-6">
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="text-sm">Name</label>
                <input required name="name" className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm">Email</label>
                <input required type="email" name="email" className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm">Message</label>
                <textarea required name="message" rows="5" className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2"></textarea>
              </div>
              <div className="sm:col-span-2 flex items-center gap-3">
                <motion.button whileHover={{ y: -2 }} className="rounded-lg px-5 py-3 bg-primary-600 text-white shadow-soft">Send</motion.button>
                {status && <span className="text-sm text-slate-600 dark:text-slate-300">{status}</span>}
              </div>
            </form>
          </div>
          <div className="space-y-4">
            <div className="card p-6">
              <h4 className="font-semibold">Connect</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">I’m active on:</p>
              <div className="flex gap-4 mt-3">
                <a href={SITE.socials[0].url} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin/></a>
                <a href={SITE.socials[1].url} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub/></a>
                <a href={SITE.socials[2].url} target="_blank" rel="noreferrer" aria-label="X"><FaXTwitter/></a>
              </div>
            </div>
            <div className="card p-6">
              <h4 className="font-semibold">Email</h4>
              <a className="text-primary-600" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
