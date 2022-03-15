import React, { createContext, useState, useEffect} from 'react'

export const CartProvider = createContext()



const CartContext = ({children}) => {
const [cart, setCart] = useState([])
const [itemCart, setItemCart] = useState(null)
const [pagar, setPagar] = useState(0)
const reducer = (acc,curr) => acc + curr;
let totalBultos
let total = 0


const totalaPagar = (totalPrice) =>{
    total= total + totalPrice 

          setPagar(total)
}


if(cart.length>0){
   totalBultos = cart.map(element=>element.quantity).reduce(reducer)
}



//Funcion para agregar los items al carritos
const addItem = (item,quantity = 0) =>{
const repeatArticule = (element) => element.id === item.id
  
  const articule = {
    id:item.id,
    price: item.price,
    name: item.name,
    image: item.image,
    quantity
  }
  
  if(cart.some(repeatArticule)){
      let itemIndex = cart.findIndex(repeatArticule)
          cart[itemIndex].quantity = cart[itemIndex].quantity + quantity

            setCart([...cart])
      }
      
      else if(quantity == 0){
        console.log('no ingreso la cantidad')
      }
          else
            setCart([...cart,articule])

        
    }

//Funcion para remover los items del carrito 

const removeItem = (id) =>{
  const removeArticules = cart.filter((art) => art.id !== id)
  setCart(removeArticules)
  
}


// Vaciar Carrito
const clearItems = () => {
  setCart([])
}

  return (
  <CartProvider.Provider value={{
  cart,
  setCart,
  addItem,
  removeItem,
  clearItems,
  itemCart,
  setItemCart,
  totalBultos,
  totalaPagar,
  pagar}}>
            {children}
        </CartProvider.Provider>)
}

export default CartContext