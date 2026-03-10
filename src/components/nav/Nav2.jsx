import React from 'react'
import "./nav2.css"
import {FiHome} from "react-icons/fi"
import {AiOutlineUser} from "react-icons/ai"
import {GiBookshelf} from "react-icons/gi"
import {HiCode} from "react-icons/hi"
import {VscFeedback} from "react-icons/vsc"
import {FiPhoneCall} from "react-icons/fi"


const Nav2 = () => {
    const [activeNav, setActiveNav] = React.useState('#')
    const navArr = [
        {
            id: 1,
            active: '#',
            icon: <FiHome />,
            text: "Home"
        },
        {
            id: 2,
            active: '#about',
            icon: <AiOutlineUser />,
            text: "About"
        },
        {
            id: 3,
            active: '#experience',
            icon: <GiBookshelf />,
            text: "Experience"
        },
        {
            id: 4,
            active: '#portfolio',
            icon: <HiCode />,
            text: "Portfolio"
        },
        {
            id: 5,
            active: '#testimonials',
            icon: <VscFeedback />,
            text: "Testimonials"
        },
        {
            id: 6,
            active: '#contact',
            icon: <FiPhoneCall />,
            text: "Contact"
        }
    ]

    const navList = navArr.map((item)=>(
        <li key={item.id} onClick={() => setActiveNav(item.active)} className={activeNav === item.active ? 'list active' : 'list'}>
            <a href={item.active} >
                <span className="icon">{item.icon}</span>
                <span className="text">{item.text}</span>
            </a>
        </li>
    ))

    return (
        <nav>
            <ul>
                {navList}
                <div className='indicator'></div>
            </ul>
        </nav>
    )
}

export default Nav2