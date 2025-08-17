export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/70 border-b border-border">
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="font-semibold tracking-wide"data-aos="fade-right">Video Editor</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-accent"data-aos="fade-down">About</a>
          <a href="#services" className="hover:text-accent"data-aos="fade-down">Services</a>
          <a href="#portfolio" className="hover:text-accent"data-aos="fade-down">Portfolio</a>
          <a href="#contact" className="hover:text-accent"data-aos="fade-down">Contact</a>
        </nav>
        <a href="#contact" className="btn"data-aos="fade-left">Get a Quote</a>
      </div>
    </header>
  )
}
