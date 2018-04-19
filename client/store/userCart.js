import axios from 'axios'

/** ACTION TYPES **/
const ADD_TO_CART = 'ADD_TO_CART'
const CREATE_CART = 'CREATE_CART'

/** ACTION CREATORS **/
const addToCartActionCreator = cartProduct => ({type: ADD_TO_CART, cartProduct})

const createCartActionCreator = cartProduct => ({type: CREATE_CART, cartProduct})

/** THUNK CREATORS **/
export const createCartThunk = (product, sessionId) =>
  dispatch =>
    axios.post(`/api/cart/${sessionId}`)
      .then(res =>
        dispatch(createCartActionCreator(res.data)))
      .catch(err => console.log(err))

export const addToCartThunk = (product, sessionId) =>
  dispatch =>
    axios.put(`/api/cart/${sessionId}`)
      .then(res =>
        dispatch(addToCartActionCreator(res.data)))
      .catch(err => console.log(err))

/** REDUCER **/
export default function (state = [], action) {
  switch (action.type) {
    case CREATE_CART:
      return action.cartProduct
    case ADD_TO_CART:
      return [...state, action.cartProduct]
    default:
      return state
  }
}
