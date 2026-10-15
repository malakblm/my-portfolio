import { useState } from 'react'
import { experience } from '../data'

export default function Experience() {
  const [index, setIndex] = useState(0)
  const job = experience[index]

  return (
    <section id="experience" className="px-6 md:px-24 max-w-6xl mx-auto py-24">
      <h2 className="text-3xl font-bold text-slate-100 mb-8">/ experience</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <ul className="flex md:flex-col gap-2 border-l border-slate-700">
          {experience.map((j, i) => (
            <li key={j.company}>
              <button
                onClick={() => setIndex(i)}
                className={`px-4 py-2 text-left w-full border-l-2 -ml-px transition ${
                  index === i
                    ? 'border-teal-300 text-teal-300 bg-slate-800/50'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {j.company}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-100">
            {job.role} @ <span className="text-teal-300">{job.company}</span>
          </h3>
          <p className="text-slate-500 mt-1 mb-4">{job.date}</p>
          <ul className="space-y-3">
            {job.points.map((p, i) => (
              <li key={i} className="flex gap-3 text-slate-400">
                <span className="text-teal-300 mt-1">▸</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
