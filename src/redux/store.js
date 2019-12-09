import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import meetups from './reducers/meetup.reducer'

export default (state = {}) => {
  const middleware = [thunkMiddleware]
  const reducers = combineReducers({
    meetups,
  })
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const enhancer = composeEnhancers(applyMiddleware(...middleware))
  return createStore(reducers, state, enhancer)
}