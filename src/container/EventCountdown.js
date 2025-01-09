import React, { useState, useEffect } from 'react';
import { Button, createTheme, ThemeProvider, styled } from '@mui/material';

// Create a theme using Material UI v5
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'goldenrod',
          color: 'black',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'goldenrod',
          },
        },
      },
    },
  },
});

// Styled component for the timer
const TimerBox = styled('div')({
  fontSize: '24px',
  margin: '20px 0',
  color: 'black',
  textAlign: 'center',
  backgroundColor: 'orange', // Background color for the box
  padding: '20px', // Padding inside the box
  borderRadius: '10px', // Rounded corners
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow for a more polished look
});

const CountdownTimer = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval]) {
      timerComponents.push(
        <span key={interval}>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <TimerBox>
        {timerComponents.length ? timerComponents : <span>Event has started!</span>}
      </TimerBox>
    </ThemeProvider>
  );
};

const EventCountdown = () => (
  <div>
    <h1>Countdown to Gangotri - </h1>
    <CountdownTimer eventDate="2025-01-27T00:00:00" />
  </div>
);

export default EventCountdown;
