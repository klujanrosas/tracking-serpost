import axios from 'axios'
import { 
  FETCH_CAPTCHA,
  CAPTCHATEXT_CHANGED,
  TRACKINGNUMBER_CHANGED,
  SUBMIT_FORM,
  FETCH_HISTORY,
  LOAD_HISTORY_INFO
} from './types'


export const fetchCaptcha = () => {
  const request = axios.get('http://localhost:2000/captcha')

  return {
    type: FETCH_CAPTCHA,
    payload: request
  }
}

export const captchaTextChanged = (text) => {
  return {
    type: CAPTCHATEXT_CHANGED,
    payload: text
  }
}

export const trackingNumberChanged = (text) => {
  return {
    type: TRACKINGNUMBER_CHANGED,
    payload: text
  }
}

export const fetchHistory = () => {
  const request = axios.get('http://localhost:2000/history')

  return {
    type: FETCH_HISTORY,
    payload: request
  }
}

export const loadHistoryInfo = (item) => {
  return dispatch => {

    return dispatch({
      type: LOAD_HISTORY_INFO,
      payload: new Promise(resolve => {
        resolve(item); // resolve the promise with the value 'foo'
      })
    }).then(() => dispatch(trackingNumberChanged(item.tracking_number)))
  }
}

export const submitForm = ({ captchaText, trackingNumber }) =>{
  const request = axios.post('http://localhost:2000/track', {
    captchaText,
    trackingNumber
  })
  return dispatch => {

    return dispatch({
      type: SUBMIT_FORM,
      payload: request
    }).then(() => dispatch(fetchCaptcha()))
  }
}
