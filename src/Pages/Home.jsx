import { Link } from "react-router-dom";
// import { Routes, Route, Link } from "react-router-dom";
import { Typography, Container } from '@mui/material';

function Home(props) {
  return (
    <Container>
      <Typography variant="h1" color="primary.dark">
        Hey, I'm Liz.
      </Typography>
      <Typography variant="h4" >
        Software Engineer
      </Typography>
    </Container>
  );
}

export default Home;