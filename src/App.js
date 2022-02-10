
import react, { useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';

function App() {
  return (
    <div className="App">
        <NavBar name="Shadow-Games"/>
       {/* <ItemListContainer/> */}
       <ItemDetailContainer/>
    </div>
  );
}

export default App;
