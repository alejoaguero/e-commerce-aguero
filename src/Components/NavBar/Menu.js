import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/menuHamburguer.css'

const Menu = ({sidebar}) => {


    

  return(
        <div className='menu'>
              <Link to='category/PS5' className='menuDesple__link'>PS5</Link>
              <Link to='category/PS4' className='menuDesple__link'>PS4</Link>
              <Link to='category/switch' className='menuDesple__link'>Switch</Link>
        </div>
  )
}

export default Menu;