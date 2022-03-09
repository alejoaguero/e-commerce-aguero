import react, { useState } from "react";
import { Link } from "react-router-dom";
import '../CSS/item.css'
import ItemCounter from "./ItemCounter";

function Item({name,image,id}){
    return(
        <div className="articulos__individuales">
            <img src={image} alt={name} className='articulos__imagenes'></img>
            <h5>{name}</h5>
            <Link to={`/item/${id}`} className="buttonVer__color">
                <button className="buttonVer">Detalle</button>  
            </Link>
        </div>
    )   
}

export default Item