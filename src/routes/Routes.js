import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import ItemDetailContainer from '../Components/ItemDetail/ItemDetailContainer';
import ItemListContainer from '../Components/ItemList/ItemListContainer';
import NavBar from '../Components/NavBar/NavBar';
import PageNotFound from '../Components/NotFound/PageNotFound';


const Routes = () => {
  return(
      <BrowserRouter>
        <NavBar name="Shadow-Games"></NavBar>
        <Switch>  
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/category/:id' element={<ItemListContainer/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Switch>
      </BrowserRouter>
  )
};

export default Routes;