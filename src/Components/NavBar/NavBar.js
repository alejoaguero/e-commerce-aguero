import react, { useState } from "react";
import { Link } from "react-router-dom";
import '../CSS/navbar.css';
import '../CSS/menuHamburguer.css';
import CartWidget from "./CarWidget";
import Menu from "./Menu";


function NavBar({name}){
const [sidebar, setsidebar] = useState(0)

    return(
      <>  
          <header className="header">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-list" viewBox="0 0 16 16" onClick={()=> setsidebar(!sidebar)}>
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg> */}
              <Menu/>
              <h1 className="header__logo">
                <Link to='/' className="header__logo__principal">ShadowGames</Link>
              </h1>
              <CartWidget/>
          </header>
        </>
    )
}

export default NavBar;