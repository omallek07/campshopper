import axios from 'axios'

/** ACTION TYPES **/
const ADD_TO_CART = 'ADD_TO_CART'

/** ACTION CREATORS **/
const addToCartActionCreator = product => ({type: ADD_TO_CART, product})

/** THUNK CREATORS **/
export const cartPersistenceThunk = () =>
  dispatch =>
    axios.post('/api/products/')
      .then(res =>
        dispatch(addToCartActionCreator(res.data)))
      .catch(err => console.log(err))

/** REDUCER **/
export default function (state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.product]
    default:
      return state
  }
}
