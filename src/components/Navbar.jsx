import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-sky-950/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/2/29/One_Piece_Logo.svg"
              alt="One Piece"
              className="h-8 w-auto drop-shadow"
            />
            <span className="hidden sm:block font-bold tracking-wide text-white/90">Grand Line Hub</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#crew" className="text-white/80 hover:text-white transition">Crew</a>
            <a href="#episodes" className="text-white/80 hover:text-white transition">Episodes</a>
            <a href="#gallery" className="text-white/80 hover:text-white transition">Gallery</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              <input
                type="text"
                placeholder="Search the seas..."
                className="bg-white/5 text-white placeholder-white/50 rounded-md pl-8 pr-3 py-1.5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
            </div>
            <a
              href="#join"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-amber-300 to-red-500 text-black font-semibold px-4 py-2 shadow-sm hover:shadow-amber-500/30 transition"
            >
              Join the Crew
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#crew" className="block text-white/80 hover:text-white">Crew</a>
            <a href="#episodes" className="block text-white/80 hover:text-white">Episodes</a>
            <a href="#gallery" className="block text-white/80 hover:text-white">Gallery</a>
            <a href="#join" className="block text-amber-300 hover:text-amber-200">Join the Crew</a>
          </div>
        )}
      </div>
    </header>
  );
}
