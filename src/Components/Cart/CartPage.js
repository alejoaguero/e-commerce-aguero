import React, { useContext, useEffect } from 'react'
import { CartProvider } from '../../context/CartContext'
import CartItems from './CartItems'

export const CartPage = () => {
  const {cart,clearItems,cantRequest} = useContext(CartProvider)  

  return (
      <>
        
          {
            cart.length > 0 ?
            
            cart.map(item => {
              return <CartItems {...item} />
              }) 

              : <h3>No hay articulos agregados al carrito</h3>
          } 
          {
            cart.length > 0 ?
              <div> 
                <button onClick={clearItems}>Eliminar</button>
                <h4>Total Bultos: {} - Total a Pagar: {}</h4>
              </div>
              : null
          }
      </>
  )
}
