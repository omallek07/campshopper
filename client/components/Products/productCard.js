import React from 'react'
import { Link } from 'react-router-dom'
import AddToCartButton from './add-to-cart-button'

const ProductCard = ({product}) => {
  return (
    <div>
      <Link to={`/products/${product.id}`} >
        <h1>{product.name}</h1>
      </Link>
      <p>{product.description}</p>
      <div>
        <img style={{height: '100px'}} src={product.photoUrl} />
      </div>
      <AddToCartButton />
    </div>
  )
}

export default ProductCard
