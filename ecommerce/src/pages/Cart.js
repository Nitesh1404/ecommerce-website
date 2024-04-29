import React from 'react'
import CartItems from '../components/CartItems'
import CartTotal from '../components/CartTotal/CartTotal'

const Cart = () => {
  return (
    <div>
      <CartItems />
      <CartTotal />
    </div>
  )
}

export default Cart