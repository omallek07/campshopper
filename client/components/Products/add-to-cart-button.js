import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cartPersistenceThunk } from '../../store'

class AddToCartButton extends Component {
  constructor(props) {
    super(props)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler(product) {
    console.log('user', this.props.user)
    this.cartPersistenceThunk(product)
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

const mapState = ({ user }) => ({ user });

const mapDispatch = { cartPersistenceThunk };

export default connect(mapState, mapDispatch)(AddToCartButton)
