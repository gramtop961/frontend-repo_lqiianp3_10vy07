import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const demoImages = [
  // Royalty-free or placeholder fan-art style images (illustrative URLs)
  'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530176611600-c3c0d4fd7076?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517816428104-797678c7cf0d?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1600&auto=format&fit=crop',
];

export default function FanArtGallery({ theme }) {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  const filtered = useMemo(() => demoImages, [theme]);

  useEffect(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % filtered.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, [filtered.length, theme]);

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Fan Art Gallery</h2>
        <div className="flex gap-2">
          {filtered.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`h-2 w-6 rounded-full transition-all ${idx === active ? 'bg-white' : 'bg-white/30 hover:bg-white/50'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AnimatePresence initial={false}>
          {filtered.slice(0, 3).map((src, idx) => (
            <motion.div
              key={`${src}-${active}-${idx}`}
              layout
              initial={{ opacity: 0.4, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10"
            >
              <img src={filtered[(active + idx) % filtered.length]} alt="Fan art" className="h-72 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
