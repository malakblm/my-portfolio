import { useEffect, useRef, useState } from 'react'

export default function GameMode({ onClose }) {
  const canvasRef = useRef(null)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [round, setRound] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = 400
    canvas.height = 220

    const player = { x: 50, y: 160, w: 24, h: 30, vy: 0, jumping: false }
    let obstacles = []
    let spawnTimer = 0
    let speed = 4
    let frames = 0
    let running = true
    let raf

    setGameOver(false)
    setScore(0)

    function jump() {
      if (!player.jumping) { player.vy = -12; player.jumping = true }
    }
    function onKey(e) {
      if (e.code === 'Space' || e.key === 'ArrowUp') { e.preventDefault(); jump() }
    }
    window.addEventListener('keydown', onKey)
    canvas.addEventListener('mousedown', jump)

    function loop() {
      if (!running) return
      player.vy += 0.7
      player.y += player.vy
      if (player.y >= 190 - player.h) { player.y = 190 - player.h; player.vy = 0; player.jumping = false }

      spawnTimer++
      if (spawnTimer > 70) { spawnTimer = 0; obstacles.push({ x: 400, w: 18, h: 30 + Math.random() * 20 }) }
      obstacles.forEach((o) => (o.x -= speed))
      obstacles = obstacles.filter((o) => o.x + o.w > 0)

      obstacles.forEach((o) => {
        if (player.x < o.x + o.w && player.x + player.w > o.x && player.y + player.h > 190 - o.h) {
          running = false
          setGameOver(true)
        }
      })
      if (running) {
        frames++
        setScore(Math.floor(frames / 5))
        speed = 4 + Math.floor(frames / 500)
      }

      const bg = ctx.createLinearGradient(0, 0, 0, 220)
      bg.addColorStop(0, '#0f2942')
      bg.addColorStop(1, '#0a192f')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, 400, 220)
      ctx.strokeStyle = '#2dd4bf'
      ctx.globalAlpha = 0.4
      ctx.beginPath(); ctx.moveTo(0, 190); ctx.lineTo(400, 190); ctx.stroke()
      ctx.globalAlpha = 1
      ctx.fillStyle = '#2dd4bf'
      ctx.beginPath(); ctx.roundRect(player.x, player.y, player.w, player.h, 4); ctx.fill()
      ctx.fillStyle = '#f87171'
      obstacles.forEach((o) => { ctx.beginPath(); ctx.roundRect(o.x, 190 - o.h, o.w, o.h, 3); ctx.fill() })

      if (running) raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('keydown', onKey)
      canvas.removeEventListener('mousedown', jump)
    }
  }, [round])

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <button
        onClick={onClose}
        aria-label="Close game"
        style={{ position: 'absolute', top: 20, right: 20, width: 40, height: 40, borderRadius: '50%', background: '#0a192f', border: '1px solid rgba(45,212,191,0.4)', color: '#2dd4bf', fontSize: 18, cursor: 'pointer' }}
      >
        ✕
      </button>
      <div style={{ background: '#0a192f', border: '1px solid rgba(45,212,191,0.3)', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, boxShadow: '0 0 60px rgba(45,212,191,0.15)' }}>
        <span style={{ color: '#2dd4bf', fontWeight: 'bold', fontSize: 18 }}>Score: {score}</span>
        <canvas ref={canvasRef} style={{ borderRadius: 8, border: '1px solid #334155' }} />
        {gameOver ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <p style={{ color: '#f87171', fontWeight: 600, margin: 0 }}>Game over! Final score: {score}</p>
            <button
              onClick={() => setRound((r) => r + 1)}
              style={{ padding: '8px 20px', borderRadius: 8, background: '#2dd4bf', color: '#0a192f', fontWeight: 700, border: 'none', cursor: 'pointer' }}
            >
              Play Again
            </button>
          </div>
        ) : (
          <p style={{ color: '#64748b', fontSize: 12 }}>Press Space, ↑, or click to jump over obstacles</p>
        )}
      </div>
    </div>
  )
}
