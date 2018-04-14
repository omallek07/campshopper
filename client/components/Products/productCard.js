import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <div>
        <img style={{height: '100px'}} src={product.photoUrl} />
      </div>
    </div>
  )
}

export default ProductCard
