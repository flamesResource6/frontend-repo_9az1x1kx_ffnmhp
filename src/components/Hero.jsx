import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-white/80 bg-white/10 border border-white/20 rounded-full px-3 py-1 backdrop-blur"
          >
            Motorsport-grade fiberglass
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
          >
            Feel Racing. Look Fast.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-4 text-white/90 text-base sm:text-lg md:text-xl"
          >
            Custom motorcycle body kits, race fairings, and aerodynamic components crafted in lightweight fiberglass. Built for speed, finished for show.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-white/90 transition">
              Get a Quote
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/15 transition">
              View Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
