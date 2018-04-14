import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { loadState, saveState } from '../localStorage'
import user from './user'
import allProducts from './allProducts'
import throttle from 'lodash/throttle'

// Check if state is saved in localStorage
const persistedState = loadState();

const reducer = combineReducers({user, allProducts})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, persistedState, middleware)

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 2000))

export default store
export * from './user'
export * from './allProducts'
