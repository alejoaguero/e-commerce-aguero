import react from "react";

function Item({name}){
    return(
        <div className="articulos__individuales">
            <h5>Producto:{name}</h5>
            <button className="buttonVer">Detalles</button>
        </div>
    )
}

export default Item