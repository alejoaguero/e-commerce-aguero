import React, { createContext, useState} from 'react'

export const CartProvider = createContext()



const CartContext = ({children}) => {
const [cart, setCart] = useState([])
const [itemCart, setItemCart] = useState(null)
const [totalPagar, setTotalPagar] = useState(0)


const addItem = (item,quantity = 0) =>{
const repeatArticule = (element) => element.item.id === item.id

const articule = {
    item,
    quantity
  }
  
  if(cart.some(repeatArticule) ){
      cart.map((element)=> element.quantity += quantity)
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



  return <CartProvider.Provider value={{cart,setCart,addItem,removeItem,clearItems,itemCart,setItemCart,totalPagar,setTotalPagar}}>{children}</CartProvider.Provider>
}

export default CartContext