import { 
  CAPTCHATEXT_CHANGED,
  TRACKINGNUMBER_CHANGED,
  SUBMIT_FORM
} from '../actions/types'

const INITIAL_STATE = {
  captchaText: '',
  trackingNumber: '',
  trackingInfo: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CAPTCHATEXT_CHANGED:
      return {
        ...state,
        captchaText: action.payload
      }
    case TRACKINGNUMBER_CHANGED:
      return {
        ...state,
        trackingNumber: action.payload
      }
    case SUBMIT_FORM:
      return {
        ...INITIAL_STATE,
        trackingInfo: action.payload.data.payload
      }
    default:
      return state
  }
}
