// import { useState } from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { Card, CardActions, CardContent, CardMedia, Button } from '@mui/material/';
// import { } from '@mui/material';
import coffeeShipping from '../assets/coffeeshipping.png';
import langchat from '../assets/langchat.jpg';
import kayakpal from '../assets/kayakpal.png';
import drmario from '../assets/drmario.jpg';


function Portfolio() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" color="primary.dark">
        My Recent Work~
      </Typography>
      <br></br>
      <Grid container spacing={7} className="portfolio" direction={"row"} >
        <Grid item xs={6}>
          <Card className="portfolioCard" sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={coffeeShipping}
            alt="coffee shipping site"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Wanderlust Coffee
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Utilized React, Node.js, PostgreSQL, Authentication, Cookies, and Testing to create an exquisite site for dropshipping Artisan coffees from around the World.
            </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="https://github.com/Liz5112/wanderlustcoffee">Code</Button>
              <Button size="small">View Site</Button>
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
                LangChat
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Utilized React, Node.js, PostgreSQL, Authentication, Cookies, and Testing to create an exquisite site for dropshipping Artisan coffees from around the World.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="https://github.com/Liz5112/langchat">Code</Button>
              <Button size="small">View Site</Button>
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
                Kayak Pal
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Utilized React, Node.js, PostgreSQL, Authentication, Cookies, and Testing to create an exquisite site for dropshipping Artisan coffees from around the World.
              </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="https://github.com/Liz5112/kayakpal">Code</Button>
                <Button size="small">View Site</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className="portfolioCard" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={drmario}
              alt="doctor mario game"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dr. Mario Emmulator
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Utilized React, Node.js, PostgreSQL, Authentication, Cookies, and Testing to create an exquisite site for dropshipping Artisan coffees from around the World.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="https://github.com/Liz5112/drmario">Code</Button>
              <Button size="small">View Site</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Portfolio