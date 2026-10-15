import { motion } from 'framer-motion'
import headshot from '../assets/headshot.jpg'
import { skills } from '../data'

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-24 grid md:grid-cols-3 gap-10 items-center">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-slate-100 mb-8">/ about me</h2>
          <p className="text-slate-400 mb-6">
            I'm a Software Engineer specializing in Artificial Intelligence, with hands-on experience across machine learning, data analysis, and full-stack development. I'm comfortable working independently or collaboratively on projects spanning data pipelines, computer vision, and assistive technology. I hold a BSc in Software Engineering (Artificial Intelligence) from Cardiff Metropolitan University.
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span key={s} className="text-sm px-3 py-1 rounded-full border border-teal-300/30 text-teal-300">{s}</span>
            ))}
          </div>
        </div>
        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(45,212,191,0.15)]">
          <img src={headshot} alt="Malak Barrahmoune" className="w-full h-full object-cover" style={{ objectPosition: 'center 20%' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/40 via-transparent to-transparent" />
        </div>
      </div>
    </motion.section>
  )
}
