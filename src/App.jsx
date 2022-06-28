import './styles.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
// import { Typography } from '@mui/material';
import theme from './index';
// import background from './assets/shahadat-rahman.jpg'

export function App(props) {
  return (
    <div className="App" theme={theme}>
    {/* <div className="App" style={{backgroundImage: `url(${background})`}}> */}
      <div>
        <Navbar className="nav" theme={theme} />
        <Routes>
          {/* <ul> */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
          {/* </ul>  */}
        </Routes>
      </div>
    </div>
  );
}

export default App;

