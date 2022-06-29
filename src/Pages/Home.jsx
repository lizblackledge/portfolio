import { Typography, Container } from '@mui/material';

function Home(props) {
  return (
    <Container>
      <Typography variant="h1" color="primary.dark">
        Hey, I'm Liz.
      </Typography>
      <Typography variant="h4" maxWidth="sm">
        I'm a Software Engineer currently based out of Oklahoma City.
      </Typography>
    </Container>
  );
}

export default Home;