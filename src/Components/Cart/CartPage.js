import React, { useContext, useEffect } from 'react'
import { CartProvider } from '../../context/CartContext'
import CartItems from './CartItems'

export const CartPage = () => {
  const {cart,clearItems} = useContext(CartProvider)  

  return (
      <>
          <h1>Carrito de Compras</h1>
          {
            cart.map(item => {
              return <CartItems {...item}></CartItems>
              })
          } 
          <hr/> 
          <button onClick={clearItems}>Eliminar</button>
      </>
  )
}
