import React from 'react';
import { Item2 } from './Item2';

const ItemDetail = ({gameDetail}) => {
  
  return (
      <>
        {
          gameDetail.map((game) => {
              if(game.id === '15'){
                 return <Item2 key={game.id} name={game.name} imagen={game.imagen} precio={game.precio} stock={game.stock}></Item2>
              }
          })
        }
      </>
  );
};

export default ItemDetail;
