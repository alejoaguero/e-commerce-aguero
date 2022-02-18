import React from "react";

function ItemCounter({contador,setContador,stock,onAdd}){

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
            <button onClick={onAdd}>Agregar Carrito</button>
        </>
    )
}

export default ItemCounter;