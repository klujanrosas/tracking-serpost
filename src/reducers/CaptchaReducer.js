import {
  FETCH_CAPTCHA
} from '../actions/types'

const INITIAL_STATE = {
  captcha: null,
  tracking: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CAPTCHA:
      return {...state, captcha: action.payload.data.image}
    default:
      return state
  }
}
