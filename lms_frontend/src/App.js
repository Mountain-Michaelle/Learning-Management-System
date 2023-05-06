import Home from './Components/Home';
import Navbar1 from './Components/Navbar1';
import {Routes, Route} from "react-router-dom";
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer /> 
    </div>
  );
}

export default App;
