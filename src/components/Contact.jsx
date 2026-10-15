import { EMAIL } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-24 max-w-6xl mx-auto py-24 text-center">
      <h2 className="text-3xl font-bold text-slate-100 mb-4">/ get in touch</h2>
      <p className="text-slate-400 mb-6">Brent, London — always open to new opportunities.</p>
      <a
        href={`mailto:${EMAIL}`}
        className="inline-block px-6 py-3 border border-teal-300 text-teal-300 rounded hover:bg-teal-300/10 transition"
      >
        Say hello
      </a>
    </section>
  )
}
