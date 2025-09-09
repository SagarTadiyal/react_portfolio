import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import ThemeToggle from './ThemeToggle'
import { SITE } from '../data/site'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const IconMap = { FaGithub, FaLinkedin, FaXTwitter }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/60 dark:bg-surface-dark/60 border-b border-black/5 dark:border-white/10' : ''}`}>
      <nav className="container-slim flex items-center justify-between h-16">
        <a href="#home" className="font-bold">Sagar<span className="text-primary-600">.</span></a>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm hover:text-primary-600">{l.label}</a>
          ))}
          <div className="h-5 w-px bg-black/10 dark:bg-white/10" />
          <div className="flex items-center gap-3">
            {SITE.socials.map(s => {
              const Ico = IconMap[s.icon]
              return <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}><Ico /></a>
            })}
            <ThemeToggle />
          </div>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-surface-dark border-t border-black/5 dark:border-white/10">
          <div className="container-slim py-4 space-y-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="block" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              {SITE.socials.map(s => {
                const Ico = IconMap[s.icon]
                return <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}><Ico /></a>
              })}
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
