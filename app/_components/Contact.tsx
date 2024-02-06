import React, { useState, FormEvent } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import Fade from '@mui/material/Fade';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Contact = () => {
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [emailFailed, setEmailFailed] = useState<boolean>(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, message }),
      });

      if (response.ok) {
        setEmailSent(true);
      } else {
        setEmailFailed(true);
      }
    } catch (error) {
      setEmailFailed(true);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Want to find out more or hire me? I'm down to chat.
      </Typography>
      <Box component="form" onSubmit={sendEmail} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Your Name"
          name="name"
          autoComplete="name"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Your Email Address"
          name="email"
          autoComplete="email"
          type="email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="subject"
          label="Subject"
          name="subject"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="message"
          label="Message Content"
          name="message"
          multiline
          rows={4}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
      {emailSent && (
        <Fade in={emailSent} style={{ transitionDelay: '500ms' }}>
          <Card sx={{ backgroundColor: 'success.main', color: 'white', mt: 2 }}>
            <CardContent>
              Thank you! I have received your message and will get back to you ASAP. Have a good one!
            </CardContent>
          </Card>
        </Fade>
      )}
      {emailFailed && (
        <Fade in={emailFailed} style={{ transitionDelay: '500ms' }}>
          <Card sx={{ backgroundColor: 'error.main', color: 'white', mt: 2 }}>
            <CardContent>
              Sorry, something went wrong. Please try again!
            </CardContent>
          </Card>
        </Fade>
      )}
    </Container>
  );
};

export default Contact;