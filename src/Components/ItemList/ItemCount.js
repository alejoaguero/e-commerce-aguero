import React, { useState } from "react";

function ItemCount({contador,setContadorValue,stock}){

const  sumContador = () =>{
    if(contador===stock){
        return setContadorValue(contador)
    }
    else{
        return setContadorValue(contador+1)
    }
}

const minContador = () =>{
    if(contador>0){
        return setContadorValue(contador-1)
    }
}




    return(
        <div className="contadorStock">
            <button className="contadorStock__mas" onClick={sumContador}>+</button>
            <span>{contador}</span>
            <button className="contadorStock__menos" onClick={minContador}>-</button>
        </div>
        
    )
}

export default ItemCount;