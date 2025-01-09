import React, { useState, useEffect } from 'react';
import { Button, createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: 'goldenrod',
        color: 'black',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'goldenrod', // Adjust hover background color if needed
        },
      },
    },
  },
});

const useStyles = makeStyles({
  timer: {
    fontSize: '24px',
    margin: '20px 0',
    color: 'black',
    textAlign: 'center',
  },
});

const CountdownTimer = ({ eventDate }) => {
  const classes = useStyles();
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
      <div className={classes.timer}>
        {timerComponents.length ? timerComponents : <span>Event has started!</span>}
      </div>
    </ThemeProvider>
  );
};

const EventCountdown = () => (
  <div>
    <h1>Countdown to Gangotri</h1>
    <CountdownTimer eventDate="2025-01-27T00:00:00" />
  </div>
);

export default EventCountdown;
