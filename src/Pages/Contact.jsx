import { useState } from 'react';
import emailjs from 'emailjs-com';
// import emailjs from '@emailjs/browser';
// import { send } from 'emailjs-com';
import { Typography, Container, TextField, Grid, Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// initialize state
const initialValues = {
  fullName: '',
  email: '',
  message: ''
}

function Contact(props) {

  // set state values as they type
  const [values, setValues] = useState(initialValues);
  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]:value,
    })
  }

  // send the message to my email using the three input values and my emailjs account info
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_ugudpwn',
      'template_5qqdpo5',
      e.target,
      'aJ8y1lQv6jkGNKCCn'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message Submitted')
        setValues({
          fullName: '',
          email: '',
          message: ''
        });
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <Container maxWidth="sm" direction={"column"} >
      <form onSubmit={sendEmail}>
        <Grid container >
          <Grid item xs={12}>
            <Typography variant="h3" color="primary.main" gutterBottom>
              Let's get in touch~
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-name"
              label="Name"
              name="fullName"
              value={values.fullName}
              fullWidth={true}
              color="secondary"
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              id="outlined-email"
              label="Email"
              name="email"
              value={values.email}
              margin="normal"
              fullWidth={true}
              color="secondary"
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-message"
              label="Message"
              name="message"
              value={values.message}
              flex-basis="auto"
              fullWidth={true}
              style={{ marginTop: 10 }}
              multiline
              rows={5}
              color="secondary"
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit" style={{ marginTop: 10, color:"white", bgColor:"#008094" }} >Submit Message <KeyboardArrowRightIcon /></Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Contact;