import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

const TableComponent = ({
  data,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="quest table">

        <TableHead>
          <TableRow>
            <TableCell>UID</TableCell>
            <TableCell>Complete</TableCell>
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
          {data.map( (row, i) => (
            <TableRow key={ i }>
              <TableCell>{row.ID}</TableCell>
              <TableCell><Checkbox /></TableCell>
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


export default TableComponent