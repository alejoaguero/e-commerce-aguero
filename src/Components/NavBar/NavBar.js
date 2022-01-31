import react from "react";
import '../CSS/navbar.css'
import CartWidget from "./CarWidget";

function NavBar({name}){
    return(
        <>  
          <header className="header">
            <nav className="header__nav">
                <li><a href="#">Videojuegos</a></li>
                <li><a href="#">Electronica</a></li>
                <li><a href="#">Jueguetes</a></li>
            </nav>
            <h1 className="header__logo">{name}</h1>
            <CartWidget/>
          </header>
        </>
    )
}

export default NavBar;