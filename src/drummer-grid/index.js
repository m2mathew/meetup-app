import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import drummers from '../utils/constants';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '90%',
    // height: 450,
  },
});

function DrummerGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={160}
        className={classes.gridList}
        cols={5}
      >
        {drummers.map(drummer => (
          <GridListTile
            cols={drummer.cols || 1}
            key={drummer.name}
            rows={drummer.rows}
          >
            <img
              alt={drummer.title}
              src={drummer.image}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

DrummerGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrummerGrid);
