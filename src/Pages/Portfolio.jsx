// import { useState } from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { Card, CardActions, CardContent, CardMedia, Button } from '@mui/material/';
import estrella from '../assets/estrella.png';
import kayakpal from '../assets/kayakpal.png';
import langchat from '../assets/langchat.jpg';
import kaffia from '../assets/kaffia.png';


function Portfolio() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" color="primary.dark">
        My Recent Work~
      </Typography>
      <br></br>
      <Grid container  spacing={7} className="portfolio" direction={"row"} >
        <Grid item xs={6}>
          <Card className="portfolioCard" sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={estrella}
            alt="coffee shipping site"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Estrella Coffee Co. - E-Commerce Site for Artisan Coffee
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Utilized React, Node.js, PostgreSQL, Authentication, Cookies, and Testing to create an exquisite site for dropshipping Artisan coffees from around the World.
            </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="https://github.com/Liz5112/wanderlustcoffee" rel="noreferrer" target="_blank">Code</Button>
              <Button size="small" href="https://estrellacoffeeco.github.io" rel="noreferrer" target="_blank">View Site</Button>
            </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className="portfolioCard" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={langchat}
              alt="language learning social media site"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                LangChat - Social Networking for Language Learners (In progress)
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Utilized React, Node.js, PostgreSQL, Authentication, Cookies, and Testing to create an exquisite site for dropshipping Artisan coffees from around the World.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="https://github.com/Liz5112/langchat" rel="noreferrer" target="_blank">Code</Button>
              <Button size="small" href="https://langchat.github.io" rel="noreferrer" target="_blank">View Site</Button>
            </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className="portfolioCard"sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={kayakpal}
              alt="kayaking weather and maps site"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Kayak Pal - Find Places to Kayak and See Whether the Weather is Suitable for Kayaking Today
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Utilized React, Node.js, PostgreSQL, Authentication, Cookies, and Testing to create an exquisite site for dropshipping Artisan coffees from around the World.
              </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="https://github.com/Liz5112/kayak-pal" rel="noreferrer" target="_blank">Code</Button>
                <Button size="small" href="https://kayak-pal.github.io" rel="noreferrer" target="_blank">View Site</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className="portfolioCard" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="240"
              image={kaffia}
              alt="doctor mario game"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Apache Kafka Visualizer and Administrator
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Open-Source Dev Tool created to help Kafka engineers spin up clusters and monitor their cluster health efficiently in an Electron desktop application GUI.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="https://github.com/Liz5112/kaffia" rel="noreferrer" target="_blank">Code</Button>
              <Button size="small" href="https://kaffia.dev" rel="noreferrer" target="_blank">View Site</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Portfolio