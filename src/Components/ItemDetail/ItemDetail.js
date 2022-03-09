import React from 'react';
import { Item2 } from './Item2';



const ItemDetail = ({produDetail}) => {
  
  return (
      <>
                 <Item2 {...produDetail }></Item2>
      </>
  );
};

export default ItemDetail;
