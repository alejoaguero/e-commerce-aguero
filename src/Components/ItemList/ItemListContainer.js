import react, { useState } from "react";
import Item from "./Item";
import '../CSS/item.css'

const items = [
    {id:1, name:'Farol', description: 'Negro con columna', stock: 10},
    {id:2, name:'Colgante', description: '3 Luces blanco', stock: 25},
    {id:3, name:'Aplique', description: 'Jaula diamante', stock: 15},
    {id:4, name:'Araña', description: '4 Luces', stock: 35},
    {id:5, name:'Difusor', description: 'Negro 1 luz', stock: 8}
]


function ItemListContainer(){
    return(
        <div className="articulos">
            <h1 className="articulos__titulo">Productos de Lista</h1>

            {
                items.map(({name,description,stock,id})=>(
                    <Item key={id} name={name} description={description} stock={stock}></Item>
                ))
            }
        </div>
    )
}

export default ItemListContainer