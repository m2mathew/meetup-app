import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  // withStyles,
  withTheme,
} from '@material-ui/core/styles';
import injectSheet from 'react-jss/lib/injectSheet';

// Local Variables
const styles = theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.light,
    // backgroundColor: 'hotpink',
  },
  title: {
    color: '#111',
    '&:hover': {
      color: ({ hoverTitle }) => hoverTitle || 'blue',
    }
  },
  root: {
    flexGrow: 1,
  },
});

// Component Definition
const TopNav = (props) => {
  const { classes, theme } = props;

  console.log({ theme });

  return (
    <div className={classes.root}>
      <AppBar
        classes={{
          colorPrimary: classes.appBar,
        }}
        color="primary"
        position="static"
      >
        <Toolbar>
          <Typography
            classes={{
              h6: classes.title
            }}
            color="inherit"
            variant="h6"
          >
            <div>
              All the Great Drummers
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

TopNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(withTheme()(TopNav));
