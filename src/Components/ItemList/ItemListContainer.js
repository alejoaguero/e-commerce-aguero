import react, { useEffect, useState } from "react";
import Item from "./Item";
import '../CSS/item.css'
import { productsApi } from "../helpers/promises";
import ItemMap from "./ItemMap";
import { useParams } from "react-router-dom";

function ItemListContainer(){
const { id } = useParams();
const [games, setgames] = useState([]);  

useEffect(()=>{
    getApiGames()
},[])


const getApiGames = async() =>{
    try {
        const result = await productsApi
        setgames(result)
    } catch (error) {
        console.log('Error Problemas')
    }
    
}
    return(
        <div className="articulos">
            <ItemMap games={games} id ={id}/> 
        </div>
    )
}

export default ItemListContainer