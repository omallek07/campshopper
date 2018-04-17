import React from 'react'
import { connect } from 'react-redux'

const CartDisplay = (props) => {
  return (
    <div>
      <h1>Cart Items will display here</h1>
      <p>We will map out items to a subcomponent</p>
    </div>
  )
}

/* --------- CONTAINER ---------- */

const mapState = ({userCart}) => ({userCart})

const mapDispatch = null;

export default connect(mapState, mapDispatch)(CartDisplay)
