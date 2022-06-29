import React from 'react'
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';
import { FaGithub, FaLinkedin } from "react-icons/fa";

import theme from './index';

function Navbar(props) {

  const primary= props.theme.palette.primary.dark
  // const tertiary= props.theme.palette.tertiary.main
  // console.log('tertiary:', tertiary)
  return (
    <nav>
      <ul className="NavbarItems" sx={{display: 'inline-flex' }}>
        <Link to="/" className="title" ><Typography variant="h5" color="secondary.dark">Liz Blackledge</Typography></Link>
        <Link to="/about" className="links"><Typography variant="h6" color="secondary.dark">About</Typography></Link>
        <Link to="/portfolio" className="links"><Typography variant="h6" color="secondary.dark">Portfolio</Typography></Link>
        <Link to="/contact" className="links" ><Typography variant="h6" color="secondary.dark">Contact</Typography></Link>
        <FaGithub className="links" size={35} style={{ color: primary }} />
        <FaLinkedin className="links" size={35} style={{ color: primary }} />

      </ul>
    </nav>
  )
}

export default Navbar;