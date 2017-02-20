import update from 'react/lib/update'
import * as actions from '../actions/actions'

const initialState = {
  config: {
    multiSelectable: true,
    colSpan: 5
  }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    default:
      return state
  }
}
