import Navbar from "./Screen/Navbar";
import AboutMe from "./Screen/abuotMe";
import Project from "./Screen/Project";
import Skills from "./Screen/Skills";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <AboutMe />
        <Project />
      </main>
    </div>
  );
}

export default App;
