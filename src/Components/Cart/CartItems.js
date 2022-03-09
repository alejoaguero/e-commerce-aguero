import React, { useContext, useEffect } from 'react'
import { CartProvider } from '../../context/CartContext'
import '../CSS/ItemCart.css'

const CartItems = ({name,image,price,quantity,id}) => {
const {removeItem,setTotalPagar,totalPagar} = useContext(CartProvider)
let priceTotal =  price*quantity
  return (
    <>
      <div className='containerCart' key={id}>
          <h4>{name}</h4>
          <img className='imageCart' src={image} alt={name}></img>
          <h5>Cantidad: {quantity} - Total: ${priceTotal}</h5> 
          <button onClick={() => removeItem(id)}>-</button>
      </div>
    </>
  )
}

export default CartItems