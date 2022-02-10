import React from 'react';
import '../CSS/ItemDetail.css'



export const Item2 = ({id,name,imagen,precio,stock}) => {




  return <div className='cardDetail'>
            <img src={imagen} alt={name}></img>
            <div className='cardDetail__descript'>
              <h2>{name.toUpperCase()}</h2>
              <h4>Precio: ${precio}</h4>
              <p>Stock Disponible: {stock}</p>
            </div>  
        </div>;
};
