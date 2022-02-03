import react, { useEffect, useState } from "react";
import Item from "./Item";
import '../CSS/item.css'
import { productsApi } from "../helpers/promises";

function ItemListContainer(){
const [selectedItem,setItemSelected] = useState('Hola')
const [games, setgames] = useState([]);  
const [selecStock, setselecStock] = useState();

console.log(selecStock)
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
                <p>{selectedItem.name && selecStock == 0 ? selectedItem.name = "No hay stock del Producto": selectedItem.name   }</p>
                <p>{selectedItem.description && selecStock == 0 ? selectedItem.description = "" : selectedItem.description}</p>
                <p>{selecStock == 0 ? selectedItem.name = " ": selecStock}</p>
            </div>
            {
                games.map((game)=>(
                    <Item key={game.id} {...game} setItemSelected={setItemSelected} setselecStock={setselecStock}></Item>
                ))}
        </div>
    )
}

export default ItemListContainer