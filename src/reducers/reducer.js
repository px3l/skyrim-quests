import update from 'react/lib/update'
import * as actions from '../actions/actions'

const initialState = {
  config: {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    selectable: true,
    multiSelectable: true,
    deselectOnClickaway: true,
    showCheckboxes: true,
  },
  done: false  
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case actions.QUEST_CHECK:
    	console.log("-------------------------------")
			console.log("THE REDUCER IS RUN")
      return Object.assign({}, state, {
        done: true
      })

    default:
      return state
  }
}
