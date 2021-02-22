import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import QuestTable from '../QuestTable';
import TemporaryDrawer from '../TemporaryDrawer';

import tableData from '../../TableData'

function App() {
  return (
    <Container maxWidth="100%" className="App">
      <Paper>

        <TemporaryDrawer />
        
        <Typography variant="h4" component="h1" gutterBottom>
          Skyrim 100% Completion Checklist
        </Typography>

        <QuestTable
          data = { tableData.mainQuest }
        />
        <QuestTable
          data = { tableData.collegeOfWinterhold }
        />

      </Paper>
    </Container>
  );
}export default App;