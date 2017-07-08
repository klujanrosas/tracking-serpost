import { 
  CAPTCHATEXT_CHANGED,
  TRACKINGNUMBER_CHANGED,
  SUBMIT_FORM
} from '../actions/types'

const INITIAL_STATE = {
  captchaText: '',
  trackingNumber: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CAPTCHATEXT_CHANGED:
      console.log('captcha',action.payload)
      return {
        ...state,
        captchaText: action.payload
      }
    case TRACKINGNUMBER_CHANGED:
      console.log('tracking',action.payload)
      return {
        ...state,
        trackingNumber: action.payload
      }
    case SUBMIT_FORM:
      console.log(action.payload.data)
      return state
    default:
      return state
  }
}
