import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductCard from './product-card'

class AllProductsDisplay extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1>Hello this where all products will be displayed</h1>
        {
          this.props.allProducts.map(product => <ProductCard key={product.id} product={product} />
        )}
      </div>
    )
  }
}

/* ---------- Container ---------- */

const mapState = ({allProducts}) => ({allProducts});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(AllProductsDisplay)
