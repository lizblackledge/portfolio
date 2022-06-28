import { Routes, Route, Navigate } from "react-router-dom";
import './styles.css';
import Navbar from './Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import theme from './index';

function App(props) {
  return (
    <div className="App" theme={theme}>
      <div>
        <Navbar className="nav" theme={theme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact theme={theme}/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

