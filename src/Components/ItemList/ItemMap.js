import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';


const ItemMap = ({products}) => {

return(
  <>
        {
          products && products.map((game)=>(
                    <Item key={game.id} {...game}></Item>
                ))
        }
    </>
  )
};

export default ItemMap;
