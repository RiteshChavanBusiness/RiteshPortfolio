export default function Services() {
  const cards = [
    { title: 'Cinematic Editing', desc: 'Trailer-style pacing, dramatic transitions, sound design.' },
    { title: 'Social Media Reels', desc: 'Short-form hooks, captions, trends, export presets.' },
    { title: 'Motion Graphics', desc: 'Dynamic Motion, Visual Rhythm, Motion Mastery, Graphic Flow.' },
  ]
  return (
    <section id="Services" className="section relative">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-2xl animate-pulse" />

      <h2 className="text-3xl font-semibold mb-8"data-aos="fade-right">Services</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="card hover:translate-y-[-4px] transition"data-aos="zoom-in">
            <div className="text-xl font-medium mb-2">{c.title}</div>
            <p className="text-white/70">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
