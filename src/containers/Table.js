import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import MainQuestTableComponent from '../components/MainQuestTable'

import * as actions from '../actions/actions'

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
    config: state.reducer.config
}

function mapDispatchToProps(dispatch) {
  return {
    selected: () => {
      dispatch(actions.rowCheck())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table)
