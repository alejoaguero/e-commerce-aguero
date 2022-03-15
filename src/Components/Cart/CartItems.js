import React, { useContext, useEffect } from 'react'
import { CartProvider } from '../../context/CartContext'
import './ItemCart.css'

const CartItems = ({name,image,price,quantity,id}) => {
const {removeItem,totalaPagar} = useContext(CartProvider)
let priceTotal =  price*quantity
useEffect(()=>{
  totalaPagar(priceTotal)
})


  return (
    <>
      <div className='containerItem' key={id}>
          <img className='imageCart marginItem' src={image} alt={name}></img>
          <h4 className='marginItem'>{name}</h4>
          <h5 className='marginItem'>Cantidad: {quantity} - Total: ${priceTotal}</h5> 
          <button onClick={() => removeItem(id)}>x</button>
      </div>
    </>
  )
}

export default CartItems