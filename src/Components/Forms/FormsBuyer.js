import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartProvider } from '../../context/CartContext'

const FormsBuyer = () => {
const {cart,totalBultos,pagar} = useContext(CartProvider)
const [buyer, setBuyer] = useState({
    name: " ",
    mail: " ",
    phone: " "
})  


const sendOrder  = () =>{
    const order = {
      buyer: " ",
      items: {...cart},
      total: pagar,
      bultos: totalBultos
    }

        const db = getFirestore()

          const orderCollection = collection(db,"orders")

              addDoc(orderCollection, order).then(({id}) => setOrderId(id))
}






  
  return (
    <div>
        <input value={buyer.name} name="name" onChange={(e)=> setBuyer({...buyer,name: e.target.value})}/>
        <input value={buyer.mail} name="email" onChange={(e)=> setBuyer({...buyer,mail: e.target.value})}/>
        <input value={buyer.phone} name="phone" onChange={(e)=> setBuyer({...buyer,phone: e.target.value})}/>
        <button onClick={sendOrder}>Terminar Compra</button>
    </div>
    )
}

export default FormsBuyer