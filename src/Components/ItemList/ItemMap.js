import React from 'react';
import Item from './Item';


const ItemMap = ({games}) => {
    console.log(games)

  return(
    <>
        {
            games.map((game)=>(
                    <Item key={game.id} name={game.name}></Item>
                ))
        }
    </>
  )
};

export default ItemMap;
