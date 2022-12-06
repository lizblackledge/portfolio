import { Typography, Container, Grid, Button, Box  } from '@mui/material';
import estrella from '../assets/EstrellaCoffeeCo.png'
import langchat from '../assets/LangChat.png';
import kayakpal from '../assets/KayakPal.png';
import memtool from '../assets/MemTool.png';
import kaffia from '../assets/kaffia1.png';


function Portfolio(props) {
  return (
    <Container maxWidth="2xl" sx={{ display:"flex", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
      <Container maxWidth="lg" >
        <Typography variant="h2" color="primary.dark" sx={{mb:"2rem"}}>
          My Recent Work.
        </Typography>
        <Grid container spacing={5} className="portfolio" direction={"row"} sx={{display: 'inline-flex', flexWrap: 'column wrap' }}>
          {/* Item 1: Estrella Coffee Co. */}
          <Grid item xs={6} minWidth="400px">
            <Typography gutterBottom variant="h4" component="div" color='secondary.dark'>Estrella Coffee Co.</Typography>
            <Box
              component="img"
              width="95%"
              boxShadow={3}
              alt="photo of e-commerce coffee site"
              src={estrella}
            />
            <Typography gutterBottom variant="h6" component="div" marginTop="1rem">E-commerce Site for Lovers of Artisan Coffee</Typography>
            <Typography variant="body1" color="text.secondary">
              Utilized React (Router, Hooks), Node.js/Express, PostgreSQL, and Material-UI to create an exquisite site for dropshipping artisan coffees from around the world.
            </Typography>
            <Button size="medium" variant="contained" color="primary" style={{ marginTop: 10}} href="https://github.com/Liz5112/Estrella-Coffee-Co" rel="noreferrer" target="_blank">Code</Button>
          </Grid>
          {/* Item 2: LangChat */}
          <Grid item xs={6} minWidth="400px" >
            <Typography gutterBottom variant="h4" component="div" color='secondary.dark'>LangChat</Typography>
            <Box
              component="img"
              width="95%"
              boxShadow={3}
              alt="photo of language learning social media site"
              src={langchat}
            />
            <Typography gutterBottom variant="h6" component="div" marginTop="1rem">Social Media App for Language Learning and Exchanges</Typography>
            <Typography variant="body1" color="text.secondary">
            Employed React (Router, Hooks), Node.js/Express, Chakra UI, and continuing to develop a NoSQL database to manage user data and implement OAuth for ease of access.
            </Typography>
            <Button size="medium" variant="contained" color="primary" style={{ marginTop: 10}} href="https://github.com/Liz5112/langchat" rel="noreferrer" target="_blank">Code</Button>
          </Grid>
          {/* Item 3: Memtool */}
          <Grid item xs={6} minWidth="400px" >
          <Typography gutterBottom variant="h4" component="div" color='secondary.dark'>MemTool</Typography>
          <Box
              component="img"
              width="95%"
              boxShadow={3}
              alt="photo of MemTool Flashcards"
              src={memtool}
            />
            <Typography gutterBottom variant="h6" component="div" marginTop="1rem">Sleek and Efficient Memorization Tool</Typography>
            <Typography variant="body1" color="text.secondary">
            Contructed React components that utilize Hooks to modify component behavior. Also utilized Chakra UI, Node.js/Express, and PostgreSQL to store user-generated decks and cards. Continuing to add React Testing Library unit tests and migrate to TypeScript.
            </Typography>
            <Button size="medium" variant="contained" color="primary" style={{ marginTop: 10}}  href="https://github.com/Liz5112/MemTool" rel="noreferrer" target="_blank">Code</Button>
          </Grid>
          {/* Item 4: Kayak Pal */}
          <Grid item xs={6} minWidth="400px" >
            <Typography gutterBottom variant="h4" component="div" color='secondary.dark'>Kayak Pal</Typography>
            <Box
              component="img"
              width="95%"
              boxShadow={3}
              alt="photo of kayaking weather and maps site"
              src={kayakpal}
            />
            <Typography gutterBottom variant="h6" component="div" marginTop="1rem">Kayaking Planner that lets you know if the weather is suitable to go kayaking.</Typography>
            <Typography variant="body1" color="text.secondary">
            Implementing Google Maps Places APIs and integrated data from OpenWeather into a React Frontend to inform the user whether the temperature, wind speed, gusts, and precipitation all fall within a range condusive to kayaking.
            </Typography>
            <Button size="medium" variant="contained" color="primary" style={{ marginTop: 10}} href="https://github.com/Liz5112/kayak-pal" rel="noreferrer" target="_blank">Code</Button>
          </Grid>
          {/* Item 5: Kaffia */}
          <Grid item xs={6} minWidth="400px">
          <Typography gutterBottom variant="h4" component="div" color='secondary.dark'>Kaffia</Typography>
          <Box
              component="img"
              width="95%"
              boxShadow={3}
              alt="photo of open-source Apache Kafka Metrics Visualizer and Administrator"
              src={kaffia}
            />
            <Typography gutterBottom variant="h6" component="div" marginTop="1rem">
            Open Source Apache Kafka Metrics Visualizer and Administrator
            </Typography>
            <Typography variant="body1" color="text.secondary">
            Built Node.js runtime (in Electron) and containerized in Docker, this Open Source Dev Tool employs Prometheus and Grafana to extract Kafka cluster health metrics, display them on the desktop app dashboard, and alerts the engineer of any metrics issues. View our team site below.
            </Typography>
            <Button size="medium" variant="contained" color="primary" style={{ marginTop: 10}} href="https://github.com/Liz5112/kaffia" rel="noreferrer" target="_blank">Code</Button>
            <Button size="medium" style={{ marginTop: 10, marginLeft: 10}} href="https://kaffia.dev" rel="noreferrer" target="_blank">View Team Site</Button>
          </Grid>
        </Grid>
        <Button size="medium"  className="backToTop" color="secondary" style={{ marginTop: "3rem", align: "center", scrollBehavior: "smooth"}} href="#" >Back To Top</Button>
      </Container>
    </Container>
  );
}

export default Portfolio