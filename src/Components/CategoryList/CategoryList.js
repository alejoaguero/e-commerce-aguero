import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Item from '../ItemList/Item';
import Loader from '../Loader/Loader';

const CategoryList = () => {
const [produCategory, setProduCategory] = useState(null)
const [loading, setLoading] = useState(true)
const  id  = useParams();
const categoryId = id.id


useEffect(()=>{
    const db = getFirestore()

          const gamesCollection = query(collection(db,'apigames'), where('category','==',categoryId ))

            getDocs(gamesCollection).then((snapshot)=>{
              setProduCategory(
                snapshot.docs.map((doc)=>({
                  id:doc.id,
                  ...doc.data()
                }))
              )
            }).finally(()=>{
                  setLoading(false)
            })
})

  return (
  <>
        {loading && <Loader/>}
        {
           produCategory && produCategory.map((gamesCategory)=>{
                return <Item {...gamesCategory} image={'../'+gamesCategory.image}></Item>
            })

        }
  </>
            )
}

export default CategoryList