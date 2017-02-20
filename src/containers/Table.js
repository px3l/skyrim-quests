import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import MainQuestTableComponent from '../components/MainQuestTable'

class Table extends Component {
  render() {
    var props = this.props

    return (
      <MainQuestTableComponent {...props} />
    )
  }
}

function mapStateToProps(state) {
  return {
    config: state.reducer.config,
    done: state.reducer.done
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table)
