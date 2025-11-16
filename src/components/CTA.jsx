import { Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-[linear-gradient(180deg,#0a0a0a,rgba(10,10,10,0.9))]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Ready to build your next look?</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Tell us your bike model, intended use (street/track), and the style you’re after. We’ll reply with options, pricing, and lead time.</p>

          <form className="mt-8 grid md:grid-cols-3 gap-3">
            <input type="text" placeholder="Your name" className="col-span-3 md:col-span-1 bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input type="email" placeholder="Email or WhatsApp" className="col-span-3 md:col-span-1 bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input type="text" placeholder="Bike model (e.g. R6, CBR1000)" className="col-span-3 md:col-span-1 bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <textarea placeholder="What would you like to build?" rows="4" className="col-span-3 bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"></textarea>

            <button type="button" className="col-span-3 inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition">
              <Mail className="w-4 h-4" />
              Send request
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
