import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

import tableData from './TableData'

export default class MainQuestTable extends React.Component {

  render() {
    var props = this.props

    return (
      <div>
        <Table multiSelectable={props.config.multiSelectable}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn colSpan={props.config.colSpan} style={{textAlign: 'center'}}>
                Main Quest
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The quest name">Quest</TableHeaderColumn>
              <TableHeaderColumn tooltip="The quest details">Description</TableHeaderColumn>
              <TableHeaderColumn tooltip="Who gives you the quest">Giver</TableHeaderColumn>
              <TableHeaderColumn tooltip="Is it completed?">Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.mainQuest.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.quest}</TableRowColumn>
                <TableRowColumn>{row.description}</TableRowColumn>
                <TableRowColumn>{row.giver}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}