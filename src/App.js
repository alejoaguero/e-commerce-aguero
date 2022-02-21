
import react from 'react';
import CartContext from './context/CartContext';
import Routes from './routes/Routes';


function App() {
  return (
    <div className="App">
       <CartContext>
          <Routes/>
       </CartContext>
    </div>
  );
}

export default App;
