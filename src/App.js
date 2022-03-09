import CartContext from './context/CartContext';
import Routes from './routes/Routes';
import {doc, getDoc, getFirestore} from "firebase/firestore"
import { useEffect, useState } from 'react';


function App() {
  const [games, setGames] = useState(null)
  
  return (
    <div className="App">
       <CartContext>
          <Routes/>
       </CartContext>
    </div>
  );
}

export default App;
