import { useState } from 'react'
import { Menu, X, Bike, Rocket } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Showcase', href: '#showcase' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur bg-white/10 border border-white/15 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-fuchsia-600 text-white shadow-lg shadow-rose-500/30">
                <Rocket className="w-5 h-5" />
              </span>
              <div className="leading-tight">
                <p className="text-white font-extrabold tracking-tight">BlueFiberglass</p>
                <p className="text-white/70 text-xs">Racing Bodyworks</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-4 py-2 rounded-xl hover:bg-white/90 transition shadow">
                <Bike className="w-4 h-4" />
                Get a Quote
              </a>
            </nav>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 border border-white/20 text-white"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block w-full text-white/90 hover:text-white bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="block w-full text-center bg-white text-gray-900 font-semibold px-4 py-3 rounded-xl">
                  Get a Quote
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
