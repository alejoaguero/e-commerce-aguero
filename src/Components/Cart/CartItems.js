import React, { useContext } from 'react'
import { CartProvider } from '../../context/CartContext'

const CartItems = ({item}) => {
const {cart,removeItem} = useContext(CartProvider)

  return (
    <div>
        <button onClick={() => removeItem(item.id)}>-</button>
    </div>
  )
}

export default CartItems