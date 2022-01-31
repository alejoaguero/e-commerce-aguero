import react, { useState } from "react";
import Item from "./Item";
import '../CSS/item.css'

const items = [
    {id:1, name:'Spider-Man', description: 'Vida del Hombre Araña', stock: 10},
    {id:2, name:'God of War 4', description: 'Habla sobre el dios de la guerra y su hijo', stock: 25},
    {id:3, name:'Uncharted', description: 'Aventuras y busquedas de tesoros', stock: 15},
    {id:4, name:'Call of Duty', description: 'Guerra ', stock: 35},
    {id:5, name:'Crash Bandicoot', description: 'Aventura', stock: 8}
]


function ItemListContainer(){
     const [selectedItem,setItemSelected] = useState('Hola')


    return(
        <div className="articulos">
            <h1 className="articulos__titulo">Productos de Lista</h1>
            <div>
                <p>{selectedItem.name}</p>
                <p>{selectedItem.description}</p>
                <p>{selectedItem.stock}</p>
            </div>
            {
                items.map(({name,description,stock,id})=>(
                    <Item key={id} name={name} description={description} stock={stock} setItemSelected={setItemSelected}></Item>
                ))
            }
        </div>
    )
}

export default ItemListContainer