import react from "react";
import '../CSS/navbar.css'

function NavBar(){
    return(
        <>
          <header className="header">
              <h1 className="header__logo">Shadow-Games</h1>
              <nav className="header__nav">
                  <li><a href="#">Videojuegos</a></li>
                  <li><a href="#">Electronica</a></li>
                  <li><a href="#">Jueguetes</a></li>
              </nav>
          </header>
        </>
    )
}

export default NavBar;