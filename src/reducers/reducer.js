import update from 'react/lib/update'
import * as actions from '../actions/actions'

const initialState = {
  fixedHeader: true,
  fixedFooter: true,
  stripedRows: false,
  showRowHover: false,
  selectable: true,
  multiSelectable: true,
  enableSelectAll: false,
  deselectOnClickaway: true,
  showCheckboxes: true,
  height: '300px',
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
