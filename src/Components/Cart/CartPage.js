import React, { useContext, useEffect, useState } from 'react'
import { CartProvider } from '../../context/CartContext'
import { addDoc, collection,getFirestore} from "firebase/firestore";
import CartItems from './CartItems'
import './ItemCart.css'
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormsBuyer from '../Forms/FormsBuyer';

export const CartPage = () => {
const {cart,clearItems,totalBultos,pagar,setCart} = useContext(CartProvider)
const [orderId, setOrderId] = useState(null)

  return (
    <div className='padreCart'>
      <div className='hijoCart'>
        {
        cart.length > 0 ?
          (
              <div>
                {
                  cart.map((item) => {
                    return <CartItems {...item} quantity={item.quantity} key={item.id}/> 
                    })
                  
                }
                    <div> 
                      <h4 className='totalCart'>Total Bultos: {totalBultos} unid - Total a Pagar: ${pagar}</h4>
                      <button onClick={clearItems} className='vaciarCarro'>Vaciar Carrito</button>
                      <Link to='/forms'>
                        <button>Continuar Compra</button>
                      </Link>
                    </div>
              </div>
          )
          : <h3>Carrito Vacio</h3>
              }
        </div>
      </div>
  )
}
