import { useEffect, useRef } from 'react';

const crew = [
  {
    name: 'Monkey D. Luffy',
    role: 'Captain',
    color: 'from-red-500 to-amber-400',
    img: 'https://i.imgur.com/G9s0V2p.png',
  },
  {
    name: 'Roronoa Zoro',
    role: 'Swordsman',
    color: 'from-emerald-500 to-lime-300',
    img: 'https://i.imgur.com/72a3m2y.png',
  },
  {
    name: 'Nami',
    role: 'Navigator',
    color: 'from-amber-400 to-orange-500',
    img: 'https://i.imgur.com/2OtJYxQ.png',
  },
  {
    name: 'Sanji',
    role: 'Cook',
    color: 'from-yellow-400 to-rose-400',
    img: 'https://i.imgur.com/8WQjJr6.png',
  },
  {
    name: 'Tony Tony Chopper',
    role: 'Doctor',
    color: 'from-pink-400 to-sky-400',
    img: 'https://i.imgur.com/Qq0c9Qm.png',
  },
];

export default function CrewCarousel() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let start = 0;
    let raf;

    const step = (t) => {
      start += 0.5; // speed
      el.scrollLeft = start;
      if (start >= el.scrollWidth - el.clientWidth) start = 0;
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="crew" className="bg-sky-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Straw Hat Crew</h2>
          <p className="text-white/60">Scroll to explore</p>
        </div>

        <div
          ref={scrollerRef}
          className="relative overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          <div className="flex gap-6 min-w-max">
            {crew.map((m) => (
              <article
                key={m.name}
                className="snap-center w-72 shrink-0 bg-gradient-to-br rounded-2xl p-5 text-white shadow-xl ring-1 ring-white/10"
              >
                <div className={`h-40 rounded-xl bg-gradient-to-br ${m.color} mb-4 flex items-center justify-center overflow-hidden` }>
                  <img src={m.img} alt={m.name} className="h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold">{m.name}</h3>
                <p className="text-white/70">{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
