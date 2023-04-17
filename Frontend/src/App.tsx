import Navbar from "./Screen/Navbar";
import AboutMe from "./Screen/abuotMe";
import Project from "./Screen/Project";
import Skills from "./Screen/Skills";
import Footer from "./Screen/Footer";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <AboutMe />
        <Project />
        <Skills />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
