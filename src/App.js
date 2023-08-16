import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Source from "./pages/source/Source";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/source" component={Source} />
      </Routes>
    </div>
  );
}

export default App;
