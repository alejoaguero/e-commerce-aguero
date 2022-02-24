import React, { createContext, useState} from 'react'

export const CartProvider = createContext()



const CartContext = ({children}) => {
const [cart, setCart] = useState([])
const [cantRequest, setCantRequest] = useState(0)


const addItem = (item,quantity) =>{
const repeatArticule = (element) => element.item.id === item.id
const articule = {
    item,
    quantity
  }

  
  if(cart.some(repeatArticule) || quantity === 0){
    return;
  }
        else
        setCart([...cart,articule]) 
  
}

const removeItem = (id) =>{
  const removeArticules = cart.filter((art) => art.item.id !== id)
      setCart(removeArticules)
      
}

const clearItems = () => {
    setCart([])
}



  return <CartProvider.Provider value={{cart,setCart,addItem,removeItem,clearItems,cantRequest,setCantRequest}}>{children}</CartProvider.Provider>
}

export default CartContext