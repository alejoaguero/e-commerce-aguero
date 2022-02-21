import react, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import '../CSS/navbar.css';
import '../CSS/menuHamburguer.css';
import CartWidget from "./CarWidget";
import Menu from "./Menu";


function NavBar({name}){
const [sidebar, setsidebar] = useState(0)

    return(
      <>  
          <header className="header">
              <Menu/>
              <h1 className="header__logo">
                <Link to='/' className="header__logo__principal">ShadowGames</Link>
              </h1>
              <NavLink to='/cart'>
                <CartWidget/>
              </NavLink>
          </header>
        </>
    )
}

export default NavBar;