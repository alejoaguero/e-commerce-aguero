import react from "react";
import { Link } from "react-router-dom";
import '../CSS/item.css'

function Item({name,imagen,id}){
    return(
        <div className="articulos__individuales">
            <img src={imagen} alt={name} className='imagenes'></img>
            <h5>Producto: {name}</h5>
            <button className="buttonVer">
                <Link to={`/item/${id}`} className="buttonVer__color">Detalle</Link>
            </button>
        </div>
    )
}

export default Item