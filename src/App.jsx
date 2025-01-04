import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="flex">
      <Nav />
      <div className="w-full">
        <Home />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
