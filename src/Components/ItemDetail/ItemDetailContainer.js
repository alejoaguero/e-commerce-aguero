import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore} from "firebase/firestore";
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
const [produDetail, setProduDetail] = useState(null) 
const [loading, setLoading] = useState(true)
const { id } = useParams();


useEffect(() =>{
  const db = getFirestore();

  const docRef = doc(db,"apigames", id)

      getDoc(docRef).then((snapshot=>{

        setProduDetail({id: snapshot.id,...snapshot.data()})

              
      })).finally(()=>{setLoading(false)})
},[])



    return (
      <>
        {loading && <Loader/>}
        <ItemDetail produDetail={produDetail}/>
      </>
  )
};

export default ItemDetailContainer;
