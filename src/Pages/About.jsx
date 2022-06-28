// import { Link } from "react-router-dom";
// import { Routes, Route, Link } from "react-router-dom";
import { Typography, Container } from '@mui/material';

function About() {
  return (
    <Container className="container" maxWidth="md">
      <Typography variant="h4" color="primary.dark">My name is Liz Blackledge and I love to code. Oh, how I love it. It's great. I enjoy new challenges and creating new things. Oh, I'm so great and interesting. You really want me on your team! Oh, how I love computers! I have been coding since I was 7 and built my own computer when I was 12.</Typography>
      <br></br>
      <Typography variant="h4" color="primary.dark">I went to Codesmith, so that means I have two to three years worth of experience. I also created my own startup and did all the work on the project. I work on it every day as a full time job. I'll soon be employing other people. Oh, wait, you asked me about my colleagues. Yes, I had colleagues whom I worked with. Oh, and I mentored them, too.</Typography>
      <br></br>
      <Typography variant="h4" color="primary.dark">Apart from coding, I enjoy learning about new cultures and languages. Kayaking and hiking are the best. I have studied a little martial arts in the past, and I want to get back into it soon. Give me puzzles! I love cryptograms and sudoku. Music. I love to dabble in music, but it's been so long. I forgot most of my music theory. I could probably pick it back up. Soon, soon.</Typography>
    </Container>
  );
}

export default About;