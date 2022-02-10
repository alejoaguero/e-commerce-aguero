import React, { useEffect, useState } from 'react';
import { productsApi } from '../helpers/promises';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
const [gamesDetail, setGamesDetail] = useState([]);


useEffect(()=>{
    getApiGames()
},[])


const getApiGames = async() =>{
    try {
        const result = await productsApi
        setGamesDetail(result)
    } catch (error) {
        console.log(error)
    }
    
}
  
  
  
  
  
  
  
    return (
      <>
        <ItemDetail gameDetail={gamesDetail}/>
      </>
  )
};

export default ItemDetailContainer;
