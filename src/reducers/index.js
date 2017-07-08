import { combineReducers } from 'redux'
import CaptchaReducer from './CaptchaReducer'
import FormReducer from './FormReducer'

export default combineReducers({
  serpost:  CaptchaReducer,
  form: FormReducer
})