import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Plans } from './components/sections/Plans';
import { Authors } from './components/sections/Authors';
import { Telegram } from './components/sections/Telegram';
import { Marquee } from './components/sections/Marquee';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Plans />
        <Authors />
        <Marquee reverse speed="fast" />
        <Telegram />
      </main>
      <Footer />
    </>
  );
}

export default App;
