import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  withStyles,
  // withTheme,
} from '@material-ui/core/styles';
// import injectSheet from 'react-jss';

// Local Variables
const styles = {
  appBar: {
    // backgroundColor: theme.palette.primary.light,
  },
  title: {
    color: '#111',
  },
  root: {
    flexGrow: 1,
  },
};

// Component Definition
const TopNav = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar
        // classes={{
        //   colorPrimary: classes.appBar,
        // }}
        color="primary"
        position="static"
      >
        <Toolbar>
          <Typography
            // classes={{
            //   h6: classes.title
            // }}
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

export default withStyles(styles)(TopNav);
