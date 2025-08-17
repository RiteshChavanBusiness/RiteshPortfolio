import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Stop page reload
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjkolqwk", { // your Formspree URL
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        form.reset();
      } else {
        setStatus("❌ Oops! Something went wrong.");
      }
    } catch (error) {
      setStatus("❌ Oops! Something went wrong.");
    }
  };

  return (
    <section id="Contact" className="section relative">
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-gradient-to-br from-gray-500 via-gray-700 to-black opacity-20 blur-2xl animate-float" />

      <h2 className="text-3xl font-semibold mb-8"data-aos="fade-right">Contact</h2>
      <form data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"
        className="card grid gap-4 md:grid-cols-2"
        onSubmit={handleSubmit}
      >
        <input
          className="bg-muted/40 border border-border rounded-xl px-4 py-3"
          type="text"
          name="name"
          placeholder="Your name"
          required
        />
        <input
          className="bg-muted/40 border border-border rounded-xl px-4 py-3"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          className="md:col-span-2 bg-muted/40 border border-border rounded-xl px-4 py-3"
          name="message"
          rows="5"
          placeholder="Tell me about your project..."
          required
        ></textarea>
        <button className="btn md:col-span-2" type="submit">
          Send Message
        </button>
        {status && (
          <p className="md:col-span-2 mt-2 text-sm">{status}</p>
        )}
      </form>

      <div className="mt-6 flex gap-4">
        <a data-aos="fade-up"
          href="https://www.instagram.com/ritesh_chavan_24/"
          className="badge"
        >
          Instagram
        </a>
        <a href="#" className="badge"data-aos="fade-up">LinkedIn</a>
      </div>
    </section>
  );
}
