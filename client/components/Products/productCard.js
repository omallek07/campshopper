import React from 'react'

const productCard = ({product}) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  )
}

export default productCard
