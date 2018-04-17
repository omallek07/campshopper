import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddToCartButton extends Component {
  constructor(props) {
    super(props)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler(product) {
    console.log(product)
  }

  render() {
    const {product} = this.props
    return (
      <div onClick={() => this.onClickHandler(product)}>
        Click this to add product to cart
      </div>
    )
  }
}

/* --------- CONTAINER ----------- */

const mapState = null;

const mapDispatch = null

export default connect(mapState, mapDispatch)(AddToCartButton)
