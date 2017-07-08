import { combineReducers } from 'redux'
import CaptchaReducer from './CaptchaReducer'
import FormReducer from './FormReducer'
import HistoryReducer from './HistoryReducer'

export default combineReducers({
  history: HistoryReducer,
  serpost:  CaptchaReducer,
  form: FormReducer
})