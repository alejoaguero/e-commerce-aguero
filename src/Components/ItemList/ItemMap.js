import React from 'react';
import Item from './Item';


const ItemMap = ({games,id}) => {

const filterGames = games.filter((game) => game.category === id)

  return(
    <>
        {
           !id && games.map((game)=>(
                    <Item key={game.id} name={game.name} imagen={game.imagen} id={game.id}></Item>
                ))
        }
        { 
          id && filterGames.map((game)=>(
                    <Item key={game.id} name={game.name} imagen={"../"+ game.imagen}></Item>
                ))
        }
    </>
  )
};

export default ItemMap;
