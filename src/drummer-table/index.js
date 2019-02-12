import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

import drummers from '../utils/constants';

// Local Variables
const styles = theme => ({
  root: {
    // display: 'flex',
    // justifyContent: 'center',
    margin: '0 64px',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    width: '45%',
  },
  table: {
    minWidth: 700,
  },
});

// Component Definition
function DrummerTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Years</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {drummers.map(row => (
            <TableRow hover key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.years}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

DrummerTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrummerTable);
