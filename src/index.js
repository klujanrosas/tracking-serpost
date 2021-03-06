import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'


const createStoreWithMiddleWare = applyMiddleware(ReduxPromise, ReduxThunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <App />
  </Provider>, document.querySelector('.rootContainer'))