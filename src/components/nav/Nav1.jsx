import { useState, useEffect } from 'react'

import {NavLink} from 'react-router-dom'
import {links} from '../../data.js'
import {FaBars} from 'react-icons/fa'
import {MdClose} from 'react-icons/md'


import "./nav1.css"

const Nav1 = () => {
    const [navShow, setNavShow] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navShow && !event.target.closest('.container__nav')) {
            setNavShow(false);
          }
        };
    
        document.addEventListener('click', handleOutsideClick);
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, [navShow]);

  return (
    <nav className="nav1">
        <div className="container__nav nav__container">
            {/* <Link to="/" className="logo">
                <img src={Logo} alt="Logo" />
            </Link> */}
                <ul className={`nav__links ${navShow ? "show__nav" : "hide__nav"}`}>
                    {
                        links.map(({title, url}, index)=> {
                            return (
                                <li key={index} className="nav1__li">
                                    <NavLink to={url} className={({isActive})=> isActive ? "active-nav" : ''}>{title}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            <button className="nav__toggle-btn" onClick={(e) => {e.stopPropagation(); setNavShow(!navShow)}}>
                {
                    navShow ? <MdClose/> : <FaBars/>   
                }
            </button>
        </div>
    </nav>   
  )
}

export default Nav1
