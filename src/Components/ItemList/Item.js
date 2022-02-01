import react, { useEffect } from "react";

function Item({name,description,stock,setItemSelected}){
const cambiarNombre = () =>{
    setItemSelected({name,description,stock})
}



    
    return(
        <div className="articulos__individuales">
            <h3>{name}</h3>
            <p>{description}</p>
            <h6>{stock}</h6>
                <div>
                    <button>+</button>
                    <input />
                    <button>-</button>
                </div>
            <button onClick={cambiarNombre}>Agregar</button>
        </div>
    )
}

export default Item