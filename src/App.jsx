import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CrewCarousel from './components/CrewCarousel';
import EpisodesGrid from './components/EpisodesGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-sky-950">
      <Navbar />
      <main>
        <Hero />
        <CrewCarousel />
        <EpisodesGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
