import Button from '@material-ui/core/Button';
import React from 'react';

// Component Definition
const Footer = () => (
  <footer
    style={{
      marginTop: 32,
      padding: '32px 0',
      textAlign: 'center',
    }}
  >
    <Button
      color="secondary"
      href="https://material-ui.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: 'black',
        fontFamily: 'Roboto',
        textDecoration: 'none',
      }}
      variant="outlined"
    >
      Learn Material-UI
    </Button>
  </footer>
);

export default Footer;
