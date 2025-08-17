import { useEffect, useState } from 'react'

const slides = [
  { quote: 'Delivered a stunning promo in record time!', name: 'Aarav • Brand Manager' },
  { quote: 'My reels exploded after the edit. Amazing sense of pacing.', name: 'Neha • Creator' },
  { quote: 'Clean, cinematic, and on-brief. Will hire again.', name: 'Karan • Producer' },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 4000)
    return () => clearInterval(t)
  }, [])
  return (
     <section id="Testimonial" className="section relative">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 opacity-20 blur-3xl animate-float delay-1500" />

    <h2 className="text-3xl font-semibold mb-8"data-aos="fade-right">Testimonials</h2>
      <div className="card"data-aos="fade-up">
        <p className="text-xl md:text-2xl leading-relaxed">“{slides[i].quote}”</p>
        <div className="mt-4 text-white/70">{slides[i].name}</div>
      </div>
    </section>
  )
}
