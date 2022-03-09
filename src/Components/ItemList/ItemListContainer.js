import react, { useContext, useEffect, useState } from "react";
import Item from "./Item";
import '../CSS/item.css'
import ItemMap from "./ItemMap";
import { useParams } from "react-router-dom";
import { collection, doc, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loader from "../Loader/Loader";




function ItemListContainer(){
const [products, setProducts] = useState(null);
const [loading, setLoading] = useState(true)


useEffect(()=>{
    const db = getFirestore();

    const gamesCollection = collection(db,"apigames");

        getDocs(gamesCollection).then((snapshot)=>{ 
            setProducts(snapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data()}))
                )
            }).finally(()=>{setLoading(false)})

},[])
    
    return(
        <>
            {loading && <Loader/>}
            <div className="articulos">
                <ItemMap products={products}/> 
            </div>
        </>
    )
}

export default ItemListContainer