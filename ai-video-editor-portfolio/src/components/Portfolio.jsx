export default function Portfolio() {
  const items = [
   { id: 0, thumb: 'https://res.cloudinary.com/ddhhoprps/video/upload/v1755323060/3D_MAP_ou1krc.mp4', title: '3D Map Animation' },
   { id: 1, thumb: 'https://res.cloudinary.com/ddhhoprps/video/upload/v1755323035/Comp_1_1_eqaadr.mp4', title: 'Liquid Glass Drop' },
   { id: 2, thumb: 'https://res.cloudinary.com/ddhhoprps/video/upload/v1755323048/Liquid_Icon_1_hz6b4h.mp4', title: 'Liquid Glass Icon' },
   { id: 3, thumb: 'https://res.cloudinary.com/ddhhoprps/video/upload/v1755323050/Comp_4_1_l9qlam.mp4', title: 'Liquid Glass Shape' },
   { id: 4, thumb: 'https://res.cloudinary.com/ddhhoprps/video/upload/v1755323034/Final_Liquid_Comp_cg0euz.mp4', title: 'Apple Liquid Glass' },
   { id: 5, thumb: 'https://res.cloudinary.com/ddhhoprps/video/upload/v1755323064/PORTFOLIO_bcww5q.mp4', title: '3D Reels' },
   { id: 6, thumb: 'https://res.cloudinary.com/ddhhoprps/video/upload/v1755323059/Text_Linked_Comp_45_1_p5vw3l.mp4', title: 'Youtube UI Animation' },
  ]


  return (
   <section id="Portfolio" className="section relative">
    <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-gradient-to-br from-green-400 via-teal-400 to-blue-400 opacity-25 blur-2xl animate-float delay-500" />

      <h2 className="text-3xl font-semibold mb-8"data-aos="fade-right">Portfolio & Showreel</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <a key={it.id} href="#" className="card group"data-aos="fade-up">
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-border">
             <video
  src={it.thumb}
  autoPlay
  loop
  muted
  className="h-full w-full object-cover group-hover:scale-[1.02] transition"
/>

            </div>
            <div className="mt-3 text-white/80">{it.title}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
