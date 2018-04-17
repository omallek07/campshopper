import React from 'react'
import { connect } from 'react-redux'

const SingleProductDisplay = (props) => {
  const {singleProduct} = props
  return (
    <div>
      <h1>This will display all information about an individual product</h1>
      <h1>{singleProduct.name}</h1>
      <p>{singleProduct.description}</p>
      <p>{singleProduct.currentPrice}</p>
      <img src={singleProduct.photoUrl} />
    </div>
  )
}

/* ------------ CONTAINER ------------ */

const mapState = ({allProducts}, ownProps) => {
  const productId = +ownProps.match.params.productId
  const singleProduct = allProducts.filter(product => product.id === productId)
  return {
    singleProduct: singleProduct[0]
  }
}

const mapDispatch = null;

export default connect(mapState, mapDispatch)(SingleProductDisplay)
