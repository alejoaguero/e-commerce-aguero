import react from "react";

function Item({name,description,stock}){

    return(
        <div className="articulos__individuales">
            <h3>{name}</h3>
            <p>{description}</p>
            <h6>{stock}</h6>
            <button>Agregar</button>
        </div>
    )
}

export default Item