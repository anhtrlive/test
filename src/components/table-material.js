import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable({players}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Country</TableCell>
            <TableCell align="left">Date of Birth</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.firstName + player.dateOfBirth + player.country + player.lastName}>
              <TableCell align="left">{player.firstName}</TableCell>
              <TableCell align="left">{player.lastName}</TableCell>
              <TableCell align="left">{player.country}</TableCell>
              <TableCell align="left">{player.dateOfBirth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
