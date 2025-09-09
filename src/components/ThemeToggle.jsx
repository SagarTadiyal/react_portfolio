import { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const theme = stored || system
    document.documentElement.classList.toggle('dark', theme === 'dark')
    setIsDark(theme === 'dark')
  }, [])

  const toggle = () => {
    const next = isDark ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
    setIsDark(!isDark)
  }

  return (
    <button onClick={toggle} aria-label="Toggle dark mode" className="rounded-lg px-2 py-1 border border-black/10 dark:border-white/10">
      {isDark ? '🌙' : '☀️'}
    </button>
  )
}
