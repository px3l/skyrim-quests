import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button, Paper } from '@material-ui/core';
import QuestTable from '../QuestTable';

import tableData from '../../TableData'

function App() {
  return (
    <Container maxWidth="100%" className="App">
      <Paper>
        <Typography variant="h4" component="h1" gutterBottom>
          Skyrim 100% Completion Checklist
        </Typography>
        <QuestTable
          data = { tableData.mainQuest }
        />
        <QuestTable
          data = { tableData.collegeOfWinterhold }
        />
        
        <Button variant="contained" color="primary">
          mainQuest
        </Button>
        
        <Button variant="contained" color="secondary">
          College of Winterhold
        </Button>

      </Paper>
    </Container>
  );
}export default App;