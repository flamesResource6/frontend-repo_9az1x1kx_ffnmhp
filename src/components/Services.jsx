import { Wrench, ShieldCheck, Wind, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Custom Fabrication',
    desc: 'From sketches to finished body kits tailored to your bike and riding style.'
  },
  {
    icon: Wind,
    title: 'Aero & Fitment',
    desc: 'Functional ducts, winglets, and precise alignment for track-ready performance.'
  },
  {
    icon: ShieldCheck,
    title: 'Durable Materials',
    desc: 'Motorsport-grade fiberglass, reinforced mounting points, and heat-resistant resins.'
  },
  {
    icon: Sparkles,
    title: 'Finishing & Paint',
    desc: 'Showroom finishes, graphics, and racing liveries with protective clear coat.'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">What We Do</h2>
          <p className="mt-2 text-white/70">Specialized services for riders who demand speed and style</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <span className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-white text-gray-900">
                <Icon className="w-5 h-5" />
              </span>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="text-white/70 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
