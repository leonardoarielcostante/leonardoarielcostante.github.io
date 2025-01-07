import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Aboutme from "./components/Aboutme/Aboutme";

function App() {
  return (
    <div className="flex">
      <Nav />
      <div className="w-full">
        <Home />
        <Experience />
        <Projects />
        <Aboutme />
      </div>
    </div>
  );
}

export default App;
