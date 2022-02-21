import React, { useContext, useEffect } from "react";
import { CartProvider } from "../../context/CartContext";

function ItemCounter({contador,setContador,stock,itemCart}){
const {addItem, cart} = useContext(CartProvider)

useEffect(() => {
    console.log(cart)
}, [addItem])


const  sumContador = () =>{
    if(contador===stock){
        return setContador(contador)
    }
    else{
        return setContador(contador+1)
    }
}

const minContador = () =>{
    if(contador>0){
        return setContador(contador-1)
    }
}




    return(
        <>
            <div className="contadorStock">
                <button className="contadorStock__mas" onClick={sumContador}>+</button>
                <span>{contador}</span>
                <button className="contadorStock__menos" onClick={minContador}>-</button>
            </div>
            <button onClick={()=> addItem(itemCart,contador)}>Agregar Carrito</button>
        </>
    )
}

export default ItemCounter;