import React, { Component, PropTypes } from 'react'

import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

import tableData from '../TableData'

class MainQuestTableComponent extends Component {

  render() {
    var props = this.props

    return (
      <div>
        <Table multiSelectable={true} style={{tableLayout: 'auto'}}>

          <TableHeader >
            <TableRow>
              <TableHeaderColumn colSpan={5} style={{textAlign: 'center'}}>
                Main Quest
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow style={{tableLayout: 'auto'}}>
              <TableRowColumn style={{textAlign: 'center'}}>ID</TableRowColumn>
              <TableRowColumn style={{textAlign: 'center'}}>Quest</TableRowColumn>
              <TableRowColumn style={{textAlign: 'center'}}>Description</TableRowColumn>
              <TableRowColumn style={{textAlign: 'center'}}>Giver</TableRowColumn>
              <TableRowColumn style={{textAlign: 'center'}}>Optional</TableRowColumn>
            </TableRow>
            {tableData.mainQuest.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.quest}</TableRowColumn>
                <TableRowColumn>{row.description}</TableRowColumn>
                <TableRowColumn>{row.giver}</TableRowColumn>
                <TableRowColumn>{row.optional}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>

        </Table>
      </div>
    );
  }
}

MainQuestTableComponent.propTypes = {
  
}

export default MainQuestTableComponent