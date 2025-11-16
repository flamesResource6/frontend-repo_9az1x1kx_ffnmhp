import { motion } from 'framer-motion'

const items = [
  {
    title: 'Supersport Race Kit',
    desc: 'Ultra-light fairing set with quick-release mounts',
    img: 'https://images.unsplash.com/photo-1607973159249-9c608658fb85?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Streetfighter Conversion',
    desc: 'Aggressive lines, wind-channelled side panels',
    img: 'https://images.unsplash.com/photo-1517940310602-75f39a1d0f47?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Track Aero Package',
    desc: 'Winglets and belly pan for stability at speed',
    img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-20 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Signature Builds</h2>
          <p className="mt-2 text-white/70">A selection of recent fiberglass projects</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-lg">{card.title}</h3>
                <p className="text-white/70 text-sm mt-1">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
