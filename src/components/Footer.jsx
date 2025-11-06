export default function Footer() {
  return (
    <footer className="bg-sky-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/70">© {new Date().getFullYear()} Grand Line Hub – A fan-made One Piece experience.</p>
        <div className="flex items-center gap-4 text-white/70">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#crew" className="hover:text-white">Crew</a>
          <a href="#episodes" className="hover:text-white">Episodes</a>
          <a href="#gallery" className="hover:text-white">Gallery</a>
        </div>
      </div>
    </footer>
  );
}
