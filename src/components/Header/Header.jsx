import React, {useEffect, useRef} from 'react'
import "../../Styles/Header.css"
import Logo from '../../assets/img/dumble.png'

const navLink = [
    {
        path:'#home',
        display: 'Home'
    },
    {
        path:'#schedule',
        display: 'Schedule'
    },
    {
        path:'#classes',
        display: 'Classes'
    },
    {
        path:'#pricing-plan',
        display: 'Pricing'
    },
]
const Header = () => {

    const headerRef = useRef(null)

    const headerFunction =()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80) {
            headerRef.current.classList.add('sticky__header')
        }else headerRef.current.classList.remove('sticky__header')
    }

    useEffect(()=>{
        window.addEventListener("scroll", headerFunction);

        return ()=> window.addEventListener("scroll", headerFunction);
    },[]);

    const handleClick =e=>{
        e.preventDefault()

        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop

        window.scrollTo({
            left:0,
            top:location - 80,
        });
    };

  return <header ref={headerRef}>
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
                            <li className='nav__item' key={item.id}>
                                <a onClick={handleClick} href={item.path}>{item.display}</a>
                                </li>
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