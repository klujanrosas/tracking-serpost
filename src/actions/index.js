import axios from 'axios'
import { 
  FETCH_CAPTCHA,
  CAPTCHATEXT_CHANGED,
  TRACKINGNUMBER_CHANGED,
  SUBMIT_FORM
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

export const submitForm = ({ captchaText, trackingNumber }) =>{
  const request = axios.post('http://localhost:2000/track', {
    captchaText,
    trackingNumber
  })
  return {
    type: SUBMIT_FORM,
    payload: request
  }
}