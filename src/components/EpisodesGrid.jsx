const episodes = [
  { no: 1, title: 'Romance Dawn', arc: 'East Blue', cover: 'https://i.imgur.com/0HqS5Dp.jpeg' },
  { no: 37, title: 'Luffy vs. Arlong', arc: 'Arlong Park', cover: 'https://i.imgur.com/7DrLZ5k.jpeg' },
  { no: 151, title: 'Alabasta Showdown', arc: 'Alabasta', cover: 'https://i.imgur.com/6G2T8bK.jpeg' },
  { no: 278, title: 'I Want to Live!', arc: 'Enies Lobby', cover: 'https://i.imgur.com/7RZt9u8.jpeg' },
  { no: 405, title: 'Gear Second', arc: 'Enies Lobby', cover: 'https://i.imgur.com/xB0m3jc.jpeg' },
  { no: 808, title: 'Snakeman', arc: 'Whole Cake', cover: 'https://i.imgur.com/4vYqM6E.jpeg' },
];

export default function EpisodesGrid() {
  return (
    <section id="episodes" className="bg-sky-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Iconic Episodes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((ep) => (
            <div key={ep.no} className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
              <img src={ep.cover} alt={ep.title} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/90 via-sky-950/30 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4">
                <p className="text-amber-300 text-sm">Episode {ep.no} • {ep.arc}</p>
                <h3 className="text-white font-semibold text-lg">{ep.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
