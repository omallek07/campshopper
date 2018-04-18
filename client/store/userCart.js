import axios from 'axios'

/** ACTION TYPES **/
const ADD_TO_CART = 'ADD_TO_CART'

/** ACTION CREATORS **/
const addToCartActionCreator = product => ({type: ADD_TO_CART, product})

/** THUNK CREATORS **/
export const cartPersistenceThunk = (product, sessionId) =>
  dispatch => console.log(product)
    // axios.post(`/api/cart/${sessionId}`)
    //   .then(() =>
    //     dispatch(addToCartActionCreator(product)))
    //   .catch(err => console.log(err))

/** REDUCER **/
export default function (state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.product]
    default:
      return state
  }
}
