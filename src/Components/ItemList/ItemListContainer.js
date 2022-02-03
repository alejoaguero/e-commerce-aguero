import react, { useEffect, useState } from "react";
import Item from "./Item";
import '../CSS/item.css'
import { productsApi } from "../helpers/promises";

function ItemListContainer(){
const [selectedItem,setItemSelected] = useState('Hola')
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
            <div>
                <p>{selectedItem.name}</p>
                <p>{selectedItem.description}</p>
                <p>{selectedItem.stock}</p>
            </div>
            {
                games.map(({name,description,stock,id})=>(
                    <Item key={id} name={name} description={description} stock={stock} setItemSelected={setItemSelected}></Item>
                ))}
        </div>
    )
}

export default ItemListContainer