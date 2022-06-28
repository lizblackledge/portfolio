import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { Typography } from '@mui/material';
import { LaptopIcon } from '@mui/icons-material';

import theme from './index';

function Navbar(props) {
  return (
    <nav className="NavbarItems">
      <Typography variant="h5" align="left"></Typography>
      <div className="menu-icons">

      </div>
      <ul>
        <Link to="/" className="title"><Typography variant="h5" color="secondary.dark">Liz Blackledge</Typography></Link>
        <Link to="/about" className="links"><Typography variant="h6" color="secondary.dark">About</Typography></Link>
        <Link to="/portfolio" className="links"><Typography variant="h6" color="secondary.dark">Portfolio</Typography></Link>
        <Link to="/contact" className="links" ><Typography variant="h6" color="secondary.dark">Contact</Typography></Link>
      </ul>
    </nav>
  )
}

export default Navbar