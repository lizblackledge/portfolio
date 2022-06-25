import { Routes, Route, Link } from "react-router-dom";
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <Typography>Hello from Home</Typography>
      </main>
      <nav>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <Typography>Hello from About</Typography>
      </main>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
}

function Portfolio() {
  return (
    <>
      <main>
        <Typography>Hello from Portfolio</Typography>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
}

function Contact() {
  return (
    <>
      <main>
        <Typography>Hello from Contact</Typography>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
      </nav>
    </>
  );
}

export default App;
