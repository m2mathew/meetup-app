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
      color="primary"
      href="https://material-ui.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: '#fafafa',
      }}
      variant="contained"
    >
      Learn Material-UI
    </Button>
  </footer>
);

export default Footer;
