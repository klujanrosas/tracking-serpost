import {
  FETCH_HISTORY
} from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_HISTORY:
      return action.payload.data
    default:
      return state
  }
}
