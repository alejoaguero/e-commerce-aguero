import React, { useContext, useEffect } from 'react'
import { CartProvider } from '../../context/CartContext'
import CartItems from './CartItems'

export const CartPage = () => {
const {cart,clearItems} = useContext(CartProvider)
const reducer = (acc,curr) => acc + curr
let totalBultos
let sumTotalBultos
    if(cart.length > 0){
      sumTotalBultos = cart.map((element)=> element.quantity)   
      totalBultos = sumTotalBultos.reduce(reducer)
    }

  return (

    cart.length > 0 ?
      (
          <div>
            {
              cart.map((item) => {
                return <CartItems {...item.item} quantity={item.quantity}/> 
                })

            }
                <div> 
                  <button onClick={clearItems}>Vaciar Carrito</button>
                  <h4>Total Bultos: {totalBultos} - Total a Pagar: {}</h4>
                </div>
          </div>
      )
      : <h3>Carrito Vacio</h3>
  )
}
