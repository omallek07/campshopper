import React from 'react'

const CartProductCard = ({product}) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Product quantity will go here</p>
    </div>
  )
}

export default CartProductCard
