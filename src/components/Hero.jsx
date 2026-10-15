import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { EMAIL } from '../data'

function StarCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    canvas.width = 480
    canvas.height = 480

    const layers = [
      { count: 60, speed: 0.05, radius: [0.3, 0.8], alpha: 0.35 },
      { count: 45, speed: 0.12, radius: [0.6, 1.2], alpha: 0.55 },
      { count: 30, speed: 0.22, radius: [1, 1.8], alpha: 0.9 },
    ]
    const stars = layers.flatMap((l) =>
      Array.from({ length: l.count }, () => ({
        x: Math.random() * 480,
        y: Math.random() * 480,
        r: Math.random() * (l.radius[1] - l.radius[0]) + l.radius[0],
        speed: l.speed,
        alpha: l.alpha,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
      })),
    )

    let shooting = []
    let tick = 0
    let raf

    function spawnShootingStar() {
      const fromLeft = Math.random() > 0.5
      const x = fromLeft ? -20 : 500
      const y = Math.random() * 480 * 0.6
      const velocity = Math.random() * 5 + 6
      const angle = fromLeft ? Math.PI / 6 : Math.PI - Math.PI / 6
      shooting.push({
        x, y,
        vx: Math.cos(angle) * velocity * (fromLeft ? 1 : -1),
        vy: Math.sin(angle) * velocity,
        life: 1,
        trail: [],
      })
    }

    function frame() {
      ctx.fillStyle = '#0a192f'
      ctx.fillRect(0, 0, 480, 480)
      tick++

      stars.forEach((s) => {
        s.x -= s.speed
        if (s.x < 0) s.x = 480
        const twinkle = (Math.sin(tick * s.twinkleSpeed + s.twinklePhase) + 1) / 2
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(226,232,240,${s.alpha * (0.3 + twinkle * 0.7)})`
        ctx.fill()
      })

      if (Math.random() < 0.02 && shooting.length < 3) spawnShootingStar()

      shooting.forEach((s) => {
        s.trail.push({ x: s.x, y: s.y })
        if (s.trail.length > 18) s.trail.shift()
        s.x += s.vx
        s.y += s.vy
        s.life -= 0.012
        ctx.beginPath()
        s.trail.forEach((p, i) => {
          ctx.strokeStyle = `rgba(45,212,191,${(i / s.trail.length) * s.life})`
          ctx.lineWidth = 1.8
          i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)
        })
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${s.life})`
        ctx.fill()
      })
      shooting = shooting.filter((s) => s.life > 0 && s.x > -30 && s.x < 510 && s.y < 510)

      raf = requestAnimationFrame(frame)
    }
    frame()
    return () => cancelAnimationFrame(raf)
  }, [])

  return <canvas ref={ref} className="rounded-2xl w-full h-full" />
}

function Orb() {
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <motion.svg
        viewBox="0 0 200 200"
        className="w-48 h-48 drop-shadow-[0_0_35px_rgba(45,212,191,0.35)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="100" cy="100" r="96" fill="none" stroke="#2dd4bf" strokeOpacity="0.4" strokeWidth="1.5" />
        <path d="M100,4 A96,96 0 0,1 100,196 A48,48 0 0,1 100,100 A48,48 0 0,0 100,4 Z" fill="#e2e8f0" />
        <path d="M100,196 A96,96 0 0,1 100,4 A48,48 0 0,1 100,100 A48,48 0 0,0 100,196 Z" fill="#0f2942" />
        <path d="M100,4 Q88,-6 78,4 Q88,10 100,4 Z" fill="#e2e8f0" />
        <path d="M100,196 Q112,206 122,196 Q112,190 100,196 Z" fill="#0f2942" />
        <path d="M76,20 Q84,26 92,22" stroke="#0a192f" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M124,178 Q116,172 108,176" stroke="#e2e8f0" strokeWidth="2" fill="none" opacity="0.5" />
        <circle cx="100" cy="52" r="11" fill="#0f2942" />
        <circle cx="100" cy="52" r="4" fill="#2dd4bf" />
        <circle cx="100" cy="148" r="11" fill="#e2e8f0" />
        <circle cx="100" cy="148" r="4" fill="#2dd4bf" />
      </motion.svg>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-24 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[480px] aspect-square">
            <StarCanvas />
            <Orb />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-teal-300 font-mono text-sm mb-2">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100">
            Malak{' '}
            <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">Barrahmoune</span>.
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-400 mt-2">Software Engineer specializing in AI.</h2>
          <p className="text-slate-400 mt-6 max-w-md leading-relaxed">
            I build machine learning systems and full-stack apps — currently combining a technical support role with self-directed AI projects.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 mt-8 px-5 py-3 border border-teal-300 text-teal-300 rounded hover:bg-teal-300 hover:text-slate-900 transition-all font-semibold"
          >
            ✉ Say hi!
          </a>
        </motion.div>
      </div>
    </section>
  )
}
