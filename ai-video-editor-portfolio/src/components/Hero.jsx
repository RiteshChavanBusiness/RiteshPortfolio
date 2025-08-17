export default function Hero() {
  return (
    <section id="home" className="section relative">
  {/* blobs here will stay in Hero */}


      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-accent to-primary bg-300 animate-gradient opacity-20"></div>
<div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-purple-500 opacity-30 blur-3xl animate-float" />

      {/* Floating shapes */}
      <div className="pointer-events-none absolute -top-10 left-8 h-24 w-24 rounded-full bg-primary/30 blur-2xl animate-float" />
      <div className="pointer-events-none absolute top-20 right-12 h-28 w-28 rounded-2xl bg-accent/30 blur-2xl animate-float" />

      <div className="grid items-center gap-10 md:grid-cols-2" >
        <div className="space-y-6">
          <span className="badge" data-aos="fade-down">Ritesh's • Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight"data-aos="fade-right">
            Ritesh<span className="text-accent"></span>
          </h1>
          <p className="text-lg text-white/80"data-aos="fade-up">
            I’m a video editor who blends storytelling , polished results for brands and creators.
          </p>
          <div className="flex gap-4">
            <a href="#portfolio" className="btn"data-aos="fade-up">Watch My Showreel</a>
            <a href="#services" className="btn bg-accent"data-aos="fade-up">View Services</a>
          </div>
        </div>

        {/* Profile image placeholder */}
        <div className="relative mx-auto aspect-square w-80 md:w-96 rounded-2xl overflow-hidden border border-border shadow-soft"data-aos="flip-left">
          <img 
            src="https://res.cloudinary.com/ddhhoprps/image/upload/v1755357819/Ritesh_s_Potrait_Pic_uguyuy.png"
            alt="Your profile"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </section>
  )
}
