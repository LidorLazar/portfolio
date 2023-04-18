import Navbar from "./screen/Navbar";
import AboutMe from "./screen/AbuotMe";
import Project from "./screen/Project";
import Skills from "./screen/Skills";
import Footer from "./screen/Footer";

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
