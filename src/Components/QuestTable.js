import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import tableData from '../TableData'


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">

        <TableHead>
          <TableRow>
            <TableCell>Game ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Giver</TableCell>
            <TableCell>Location(s)</TableCell>
            <TableCell>Level Required</TableCell>
            <TableCell>Reward</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>UESP Link</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {tableData.mainQuest.map( (row) => (
              <TableRow selected={row.selected}>
                <TableCell>{row.ID}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.giver}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.level}</TableCell>
                <TableCell>{row.reward}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.link}</TableCell>
              </TableRow>
              ))}
          </TableBody>


      </Table>
    </TableContainer>
  );
}

