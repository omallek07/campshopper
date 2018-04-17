import React, { Component } from 'react'

class AddToCartButton extends Component {
  constructor() {
    super()
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler(evt) {
    console.log(evt.target.value)
  }

  render() {
    return (
      <div onClick={this.onClickHandler}>
        Click this to add product to cart
      </div>
    )
  }
}

export default AddToCartButton
