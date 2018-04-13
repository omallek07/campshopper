import React, { Component } from 'react'
import { connect } from 'react-redux'
import productCard from './productCard'

class allProductsDisplay extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {
          this.props.allProducts.map(product => <productCard product={product} />
        )}
      </div>
    )
  }
}

/* ---------- Container ---------- */

const mapState = ({allProducts}) => ({allProducts});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(allProductsDisplay)
