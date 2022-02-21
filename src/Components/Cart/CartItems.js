import React, { useContext } from 'react'
import { CartProvider } from '../../context/CartContext'
import '../CSS/ItemCart.css'

const CartItems = ({item,quantity}) => {
const {removeItem} = useContext(CartProvider)

  return (
    <div className='containerCart'>
        <h4>{item.name}</h4>
        <img className='imageCart' src={item.imagen} alt={item.name}></img>
        <h5>Cantidad: {quantity} - Total: ${item.precio*quantity}</h5>
        <button onClick={() => removeItem(item.id)}>-</button>
    </div>
  )
}

export default CartItems