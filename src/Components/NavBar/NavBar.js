import react from "react";
import '../CSS/navbar.css'
import CartWidget from "./CarWidget";

function NavBar({name}){
    return(
        <>  
          <header className="header">
            <nav className="header__nav">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </nav>
            <h1 className="header__logo">{name}</h1>
            <CartWidget/>
          </header>
        </>
    )
}

export default NavBar;