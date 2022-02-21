import React, { createContext, useState} from 'react'

export const CartProvider = createContext()



const CartContext = ({children}) => {
const [cart, setCart] = useState([])
const addItem = (item,quantity) =>{
  const articule = {
    item,
    quantity
  }

  if(quantity !== 0){
    setCart([...cart,articule])
  }
    else
      console.log('Elegir la cantidad deseada')
}

const removeItem = (id) =>{
  const removeArticules = cart.filter((art) => art.item.id !== id)
      setCart(removeArticules)
      
}

const clearItems = () => {
    setCart([])
}
  
const isInCart = Boolean;
  



  return <CartProvider.Provider value={{cart,setCart,addItem,removeItem,clearItems,isInCart}}>{children}</CartProvider.Provider>
}

export default CartContext