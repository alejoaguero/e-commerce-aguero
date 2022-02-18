import React, { useState } from 'react';
import '../CSS/ItemDetail.css'
import ItemCounter from '../ItemList/ItemCounter';



export const Item2 = ({id,name,imagen,precio}) => {

const stock = 20;
const [contador, setContador] = useState(0);
const onAdd = () =>{
    console.log('Item agregado al Carrito')
}



  return <div className='cardDetail' id={id}>
            <img src={"../"+ imagen } alt={name}></img>
            <div className='cardDetail__descript'>
              <h2>{name}</h2>
              <h4>Precio: ${precio}</h4>
              <p>Stock Disponible: {stock}</p>
              <ItemCounter setContador={setContador} contador={contador} onAdd={onAdd} stock={stock}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iste harum earum. Vel maiores quod repellat. Totam possimus perferendis tempora officia, ratione quaerat suscipit ullam soluta labore quia? Fuga inventore sed in velit fugiat quia non, consequatur autem nisi, a illum corrupti perferendis aliquid? Quam labore obcaecati repellendus suscipit enim pariatur accusantium, facere, voluptatum blanditiis qui omnis voluptatem quaerat reiciendis vitae ipsam sit cumque fugit animi dignissimos possimus officia. Numquam asperiores fuga esse illo autem, quas, aut ratione quaerat ex perspiciatis et voluptas excepturi magnam rem quo impedit a. Beatae sunt repellat debitis. Ullam nihil animi corporis. Incidunt, harum laboriosam.</p>
            </div>  
        </div>;
};
