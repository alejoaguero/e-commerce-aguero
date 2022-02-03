import react, { useEffect, useState } from "react";

function Item({name,description,stock,setItemSelected,setselecStock}){
    const [contador,setContadorValue] = useState(0)
    
    const  sumContador = () =>{
        if(contador===stock){
            return setContadorValue(contador)
        }
        else{
            return setContadorValue(contador+1)
        }
    }
    const stockReal = () =>{
    return setselecStock(contador)
}
const minContador = () =>{
    if(contador>0){
        return setContadorValue(contador-1)
    }
}

const cambiarNombre = () =>{
    setItemSelected({name,description,stock})
    setselecStock(contador)
}
    return(
        <div className="articulos__individuales">
            <h3>Producto:{name}</h3>
            <p>{description}</p>
            <h6>Stock: {stock}</h6>
                <div className="contadorStock">
                    <button className="contadorStock__mas" onClick={sumContador}>+</button>
                    <span>{contador}</span>
                    <button className="contadorStock__menos" onClick={minContador}>-</button>
                </div>
            <button onClick={cambiarNombre}>Agregar</button>
            <button>Detalles</button>
        </div>
    )
}

export default Item