import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CrewCarousel from './components/CrewCarousel';
import EpisodesGrid from './components/EpisodesGrid';
import Footer from './components/Footer';
import FanArtGallery from './components/FanArtGallery';
import MusicPlayer from './components/MusicPlayer';
import ArcThemeSwitcher from './components/ArcThemeSwitcher';

function App() {
  const [arc, setArc] = useState('wano');

  const bgClass = useMemo(() => {
    switch (arc) {
      case 'alabasta':
        return 'from-sky-950 via-sky-900 to-indigo-900';
      case 'enies':
        return 'from-slate-950 via-sky-900 to-cyan-900';
      case 'wano':
      default:
        return 'from-sky-950 via-sky-900 to-sky-800';
    }
  }, [arc]);

  return (
    <div className={`min-h-screen bg-gradient-to-b ${bgClass}`}>
      <Navbar />
      <ArcThemeSwitcher value={arc} onChange={setArc} />
      <main>
        <Hero />
        <CrewCarousel />
        <EpisodesGrid />
        <FanArtGallery theme={arc} />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
}

export default App;
