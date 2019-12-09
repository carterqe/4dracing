import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configStore from './redux/store' // redux specific
import { Provider } from 'react-redux' // redux specific

const store = configStore() // redux specific

ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)
