export default function About() {
  const items = [
    { title: 'Creativity', desc: 'Original cuts, stylish pacing, bold visuals.' },
    { title: 'Smart Edit', desc: 'Sharpen sound,cleaner visuals, and effortless captioning' },
    { title: 'Precision', desc: 'Frame-accurate edits and color-consistent looks.' },
  ]
  return (
     <section id="About" className="section relative">
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 opacity-25 blur-2xl animate-float delay-1000" />

      <div className="grid gap-8 md:grid-cols-2">
        <div className="card"data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-white/80">
            I’m not just editing your video—I’m elevating your vision. With precision, creativity, and full commitment, I treat every project like it’s my own. When you work with me, you’re investing in quality, reliability, and someone who truly cares about your story.
          </p>
        </div>
        <div className="grid gap-4">
          {items.map((i) => (
            <div key={i.title} className="card"data-aos="zoom-in">
              <div className="text-xl font-medium">{i.title}</div>
              <div className="text-white/70">{i.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
