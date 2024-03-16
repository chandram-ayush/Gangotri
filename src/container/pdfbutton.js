import React from 'react';
import { Button, createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import Pdf from '../assets/Product_Details.pdf'; // Import the PDF file

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
  blinking: {
    animation: '$blink 1s infinite',
  },
  '@keyframes blink': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
});

const PdfButton = () => {
  const classes = useStyles();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Pdf;
    link.download = 'Product_Details.pdf'; // Set the download attribute to specify the filename
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <ThemeProvider theme={theme}>
      <Button
        className={clsx(classes.blinking)}
        onClick={handleDownload}
      >
        Download Catalog
      </Button>
    </ThemeProvider>
  );
};

export default PdfButton;
