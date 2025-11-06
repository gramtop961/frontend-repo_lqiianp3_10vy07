import { useMemo } from 'react';

const arcs = [
  { key: 'wano', label: 'Wano' },
  { key: 'alabasta', label: 'Alabasta' },
  { key: 'enies', label: 'Enies Lobby' },
];

export default function ArcThemeSwitcher({ value, onChange }) {
  const current = useMemo(() => arcs.find(a => a.key === value) || arcs[0], [value]);

  return (
    <section className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-sm sm:text-base font-medium text-white/80">Arc theme</h2>
          <div className="flex items-center gap-2 rounded-xl bg-white/5 p-1 ring-1 ring-white/10">
            {arcs.map(arc => {
              const selected = arc.key === current.key;
              return (
                <button
                  key={arc.key}
                  onClick={() => onChange(arc.key)}
                  className={
                    `relative px-3 sm:px-4 py-1.5 rounded-lg text-sm transition-all ` +
                    (selected
                      ? 'bg-white/15 text-white shadow-inner shadow-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/10')
                  }
                  aria-pressed={selected}
                >
                  {arc.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
