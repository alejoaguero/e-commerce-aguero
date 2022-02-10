import react, { useEffect, useState } from "react";
import Item from "./Item";
import '../CSS/item.css'
import { productsApi } from "../helpers/promises";
import ItemMap from "./ItemMap";

function ItemListContainer(){
const [games, setgames] = useState([]);  

useEffect(()=>{
    getApiGames()
},[])


const getApiGames = async() =>{
    try {
        const result = await productsApi
        setgames(result)
    } catch (error) {
        console.log(error)
    }
    
}
    return(
        <div className="articulos">
            <h1 className="articulos__titulo">Productos de Lista</h1>
            <ItemMap games={games}/> 
        </div>
    )
}

export default ItemListContainer