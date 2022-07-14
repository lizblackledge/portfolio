import { Typography, Container, Box } from '@mui/material';
import code from '../assets/shahadat-rahman-BfrQnKBulYQ-unsplash.jpg'

function About() {
  return (
    <Container className="container" maxWidth="large" sx={{ display: "flex", align: "center" }}>
      <Box
          component="img"
          maxWidth="35%"
          marginLeft="1rem"
          boxShadow={5}
          alt="computer code"
          src={code}
        />
      <Container>
        <Typography variant="h6" color="primary.dark" margin="1rem" className="content">My name is Liz Blackledge and I enjoy solving complex problems and building cool things.</Typography>
        <Typography variant="h6" color="primary.dark" margin="1rem" className="content">The bulk of my experience is in React(Router and Hooks), Node.js/Express, PostgreSQL, and MongoDB, but I'm always keen on tackling new challenges and learning new things.</Typography>
        <Typography variant="h6" color="primary.dark" margin="1rem" className="content">Earlier this year, my team built an Open-Source <a href="https://kaffia.dev" rel="noreferrer" target="_blank">Apache Kafka Visualizer and Administrator</a> that containerizes and deploys Kafka clusters in Docker, imports cluster health metrics using Prometheus, and utilizes Grafana to display them in an Electron desktop application.</Typography>
        <Typography variant="h6" color="primary.dark" margin="1rem" className="content">Most recently, I have been focusing on implementing testing with Jest and React Testing Library, improving User Authentication with OAuth and Bcrypt, and  learning Typescript.</Typography>
      </Container>
    </Container>
  );
}

export default About;