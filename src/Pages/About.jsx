import { Typography, Container, Box, Grid } from '@mui/material';
import code from '../assets/shahadat-rahman-BfrQnKBulYQ-unsplash.jpg'

function About() {
  return (
    <Grid container maxWidth="xl" spacing={7} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Grid item xs={6} minWidth="400px" >
        <Box
          component="img"
          maxWidth="100%"
          minWidth="400px"
          marginLeft="2rem"
          boxShadow={5}
          alt="computer code"
          src={code}
        />
      </Grid>
      <Grid item xs={6} minWidth="400px">
        <Container>
          <Typography variant="h6" color="primary.dark" margin="1rem" className="content">My name is Liz Blackledge and I enjoy solving complex problems and building cool things.</Typography>
          <Typography variant="h6" color="primary.dark" margin="1rem" className="content">The bulk of my experience is in React (Router and Hooks), Node.js/Express, PostgreSQL, and MongoDB, but I'm always keen on tackling new challenges and learning new things.</Typography>
          <Typography variant="h6" color="primary.dark" margin="1rem" className="content">Earlier this year, my team built an Open-Source <a href="https://kaffia.dev" rel="noreferrer" target="_blank">Apache Kafka Visualizer and Administrator</a> that containerizes and deploys Kafka clusters in Docker, imports cluster health metrics using Prometheus, and utilizes Grafana to display them in an Electron desktop application.</Typography>
          <Typography variant="h6" color="primary.dark" margin="1rem" className="content">Most recently, I have been focusing on implementing testing with Jest and React Testing Library, improving User Authentication with OAuth and Bcrypt, and  learning TypeScript.</Typography>
        </Container>
      </Grid>
    </Grid>
  );
}

export default About;