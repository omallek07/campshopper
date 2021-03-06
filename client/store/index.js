import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { loadState, saveState } from '../localStorage'
import throttle from 'lodash/throttle'

// Reducer imports
import user from './user'
import allProducts from './allProducts'
import userCart from './userCart'

// configureStore ensures store is ready
const configureStore = () => {

  // Check if state is saved in localStorage
  const persistedState = loadState();

  const reducer = combineReducers({user, allProducts, userCart})

  const middleware = composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger({collapsed: true})
  ))
  const store = createStore(reducer, persistedState, middleware)

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 2000))

  return store;
}

export default configureStore
export * from './user'
export * from './allProducts'
export * from './userCart'
