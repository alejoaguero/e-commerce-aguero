import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/menuHamburguer.css'

const Menu = ({sidebar}) => {


    

  return(
        <div className='menu'>
              <Link to='category/ps5' className='menuDesple__link'>PS5</Link>
              <Link to='category/ps4' className='menuDesple__link'>PS4</Link>
              <Link to='category/xbox' className='menuDesple__link'>Xbox</Link>
        </div>
  )
}

export default Menu;