import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsApi } from '../helpers/promises';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
const [gamesDetail, setGamesDetail] = useState([]);
const [selectedItem, setSelectedItem] = useState(null)
const { id } = useParams();

useEffect(()=>{
    getApiGames()
},[])
useEffect(() => {
    const findGamedId = gamesDetail.find(produc => produc.id === id)
    setSelectedItem(findGamedId)
}, [gamesDetail])



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
        <ItemDetail selectedItem={selectedItem}/>
      </>
  )
};

export default ItemDetailContainer;
