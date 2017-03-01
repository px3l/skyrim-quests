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
