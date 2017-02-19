import React, { Component, PropTypes } from 'react'

import AppBar from 'material-ui/AppBar'
import Table from '../containers/Table'

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Skyrim Quest Checklist"
        />
        <Table />
      </div>
    )
  }
}

HomeComponent.propTypes = {
  
}

export default HomeComponent
