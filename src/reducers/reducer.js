import update from 'react/lib/update'
import * as actions from '../actions/actions'

const initialState = {
  config: {
    multiSelectable: true,
    colSpan: 4
  }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case actions.ROW_CHECK:
      return Object.assign({}, state, {
      })

    default:
      return state
  }
}
