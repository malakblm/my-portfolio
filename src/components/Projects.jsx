import { motion } from 'framer-motion'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-24 max-w-6xl mx-auto py-24">
      <h2 className="text-3xl font-bold text-slate-100 mb-8">/ projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-slate-800/40 border border-slate-700 rounded-lg overflow-hidden flex flex-col hover:border-teal-300/60 hover:shadow-lg hover:shadow-teal-300/10 transition-colors"
          >
            {p.image && (
              <div className="h-40 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{p.description}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono">{p.stack}</p>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 mr-4 text-sm text-teal-300 hover:underline">
                    Live demo
                  </a>
                )}
                {p.github && p.github.startsWith('http') && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-teal-300 hover:underline"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

