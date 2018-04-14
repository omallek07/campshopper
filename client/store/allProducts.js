import axios from 'axios'

/** ACTION TYPES **/
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'

/** ACTION CREATORS **/
const allProductsActionCreator = products => ({type: GET_ALL_PRODUCTS, products})

/** THUNK CREATORS **/
export const getAllProductsThunk = () =>
  dispatch =>
    axios.get('/api/products/')
      .then(res =>
        dispatch(allProductsActionCreator(res.data)))
      .catch(err => console.log(err))

/** REDUCER **/
export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.products
    default:
      return state
  }
}
