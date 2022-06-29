// import { useState } from 'react';
import theme from '../index';
import { Typography, Container, TextField, Grid, Button } from '@mui/material';

function Contact(props) {
  return (
    <Container maxWidth="sm" direction={"column"}>
      <Grid item>
        <Typography variant="h3" color="primary.dark">
          Let's get in touch~
        </Typography>
      </Grid>
      <Grid item>
        <TextField
          id="outlined-name"
          label="Name"
          color="secondary"
          margin="normal"
          style={{ width: '48%', marginRight: '1rem' }}
          // value={name}
          // onChange={handleChange}
          required
        />
      <TextField
        id="outlined-email"
        label="Email"
        color="secondary"
        margin="normal"
        style ={{ width: '48.5%' }}
        // value={email}
        // onChange={handleChange}
        required
      />
      </Grid>
      <TextField
        id="outlined-message"
        label="Message"
        color="secondary"
        // margin="normal"
        style={{ marginTop: 10 }}
        fullWidth={true}
        multiline
        rows={5}
        rowsMax={15}
        flex-basis="auto"
        // value={message}
        // onChange={handleChange}
        required
      />
      <Grid item>
        <Button variant="outlined" style={{ color: theme.palette.primary.dark, border: theme.palette.primary.dark, marginTop: 10 }} >Submit</Button>
        {/* <Button variant="outlined" style={{ marginTop: 10 }}>Submit</Button> */}
      </Grid>
    </Container>
  );
}

export default Contact;