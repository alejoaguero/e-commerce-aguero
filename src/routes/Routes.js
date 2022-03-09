import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { CartPage } from '../Components/Cart/CartPage';
import CategoryList from '../Components/CategoryList/CategoryList';
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
          <Route path='/cart' element={<CartPage/>}></Route>
          <Route path='/category/:id' element={<CategoryList/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Switch>
      </BrowserRouter>
  )
};

export default Routes;
