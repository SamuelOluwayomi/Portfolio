import { ScrollProgress } from './components/ScrollProgress';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Origin } from './components/Origin';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Failures } from './components/Failures';
import { Wins } from './components/Wins';
import { Stats } from './components/Stats';
import { Obsessions } from './components/Obsessions';
import { FieldNotes } from './components/FieldNotes';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteInterstitial } from './components/QuoteInterstitial';

function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main>
        {/* Act I */}
        <Hero />

        {/* Act II */}
        <Origin />

        {/* Quote 1 */}
        <QuoteInterstitial
          text="Ships are safe in harbor, but that is not what ships are for."
          author="John A. Shedd"
        />

        {/* Act III */}
        <Process />

        {/* Quote 2 */}
        <QuoteInterstitial
          text="Opportunities do not happen. You create them."
          author="Chris Grosser"
        />

        {/* Act IV */}
        <Projects />

        {/* Act V */}
        <Failures />

        {/* Quote 3 */}
        <QuoteInterstitial
          text="The best time to plant a tree was twenty years ago. The second best time is now."
          author="Chinese Proverb"
        />

        {/* Act VI */}
        <Wins />

        {/* Act VII */}
        <Stats />

        {/* Quote 4 */}
        <QuoteInterstitial
          text="You are the average of the five closest people to you."
          author="Jim Rohn"
        />

        {/* Act VIII */}
        <Obsessions />

        {/* Act IX */}
        <FieldNotes />

        {/* Quote 5 */}
        <QuoteInterstitial
          text="Do not go where the path may lead. Go instead where there is no path and leave a trail."
          author="Ralph Waldo Emerson"
        />

        {/* Act X */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
