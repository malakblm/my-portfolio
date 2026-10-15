import { useEffect, useState } from 'react'
import GameMode from './GameMode'

const links = ['Home', 'About', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [gameOpen, setGameOpen] = useState(false)

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.toLowerCase()))
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 },
    )
    sections.forEach((s) => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-[#0a192f]/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <span className="text-teal-300 font-bold text-lg">Malak Barrahmoune</span>
          <button
            onClick={() => setGameOpen(true)}
            className="hidden sm:inline-block text-xs px-3 py-1 rounded-full border border-teal-300/40 text-teal-300 hover:bg-teal-300/10 transition"
          >
            ● GAME MODE
          </button>
        </div>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-sm">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className={`transition ${active === l.toLowerCase() ? 'text-teal-300' : 'text-slate-300 hover:text-teal-300'}`}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <a href="https://github.com/malakblm" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-teal-300 transition" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M9 18c-4-1-4-4-4-4M9 18v-2.5c0-.8.3-1.2.6-1.5-2-.2-4-1-4-4.5 0-1 .4-1.8 1-2.4-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.8 1a9.4 9.4 0 015 0c2-1.3 2.8-1 2.8-1 .5 1.3.2 2.3.1 2.6.6.6 1 1.4 1 2.4 0 3.5-2 4.3-4 4.5.3.3.6.9.6 1.7V18" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/malak-barrahmoune-2b4092281" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-teal-300 transition" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="7" y1="10" x2="7" y2="17" />
                <circle cx="7" cy="7" r="0.5" fill="currentColor" />
                <path d="M11 17v-4.5a1.5 1.5 0 013 0V17M14 17v-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {gameOpen && <GameMode onClose={() => setGameOpen(false)} />}
    </nav>
  )
}
