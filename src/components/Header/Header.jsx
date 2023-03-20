import React from 'react'
import "../../Styles/Header.css"
import Logo from '../../assets/img/dumble.png'

const navLink = [
    {
        path:'#',
        display: 'Home'
    },
    {
        path:'#',
        display: 'Schedule'
    },
    {
        path:'#',
        display: 'Classes'
    },
    {
        path:'#',
        display: 'Pricing'
    },
]
const Header = () => {

  return <header className='sticky__header'>
    <div className="container">
        <div className="nav__wrapper">
            {/* =====Logo===== */}
            <div className="logo">
                <div className="logo__img"><img src={Logo} alt=""/></div>
                <h2>BubbleGym</h2>
            </div>
            {/* ===== navigation menu ===== */}
            <div className="navigation">
                <ul className="menu">
                    {
                        navLink.map(item=>(
                            <li className='nav__item' key={item.id}><a href={item.path}>{item.display}</a></li>
                        ))
                    }
                </ul>
            </div>
            {/* Nav Right */}
            <div className="right__menu">
                <button className='register__btn'>Register</button>
                <span className="mobile__menu"><i className="ri-menu-fill"></i></span>
            </div>
        </div>
    </div>
    </header>
  
}

export default Header