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
        <Link to="/about" className="pages"><Typography variant="h6" color="secondary.dark" className="pages" >About</Typography></Link>
        <Link to="/portfolio" className="pages"><Typography variant="h6" color="secondary.dark" className="pages" >Portfolio</Typography></Link>
        <Link to="/contact" className="pages" ><Typography variant="h6" color="secondary.dark" className="pages">Contact</Typography></Link>
        <div className="links">
          <a href="https://github.com/Liz5112" rel="noreferrer" target="_blank">
            <FaGithub className="links" size={35} style={{ color: primary }} />
          </a>
          <a href="https://www.linkedin.com/in/lizblackledge01/" rel="noreferrer" target="_blank">
            <FaLinkedin className="links" size={35} style={{ color: primary }} />
          </a>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar;