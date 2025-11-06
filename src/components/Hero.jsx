import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-20 overflow-hidden bg-gradient-to-b from-sky-950 via-sky-900 to-sky-800">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-16">
          <p className="inline-flex items-center gap-2 text-amber-300 font-semibold tracking-wide uppercase">
            The Grand Line Awaits
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Embark on a One Piece adventure
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Discover the Straw Hat crew, iconic episodes, and stunning fan art. Chart your course through the vast seas of Eiichiro Oda's world.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#crew" className="px-5 py-3 rounded-md bg-amber-400 text-black font-semibold shadow hover:shadow-amber-400/30 transition">
              Meet the Crew
            </a>
            <a href="#episodes" className="px-5 py-3 rounded-md border border-white/20 text-white/90 hover:bg-white/10 transition">
              Explore Episodes
            </a>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px] lg:h-[620px]">
          <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <Spline scene="https://prod.spline.design/9k5mO5m6g1qP3W6U/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
