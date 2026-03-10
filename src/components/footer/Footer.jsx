import React from 'react'
import "./footer.css"
import {ImFacebook2} from "react-icons/im"
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>VS</a>

      <ul className="permalinks">
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/vsalatone/" target="_blank" rel='noreferrer'><ImFacebook2 /></a>
        <a href="https://www.instagram.com/youngmasterabee/" target="_blank" rel='noreferrer'><BsInstagram /></a>
        <a href="https://www.instagram.com/abee_ai/" target="_blank" rel='noreferrer'><BsInstagram /></a>
        <a href="https://twitter.com/YoungMasterAbee" target="_blank" rel='noreferrer'><BsTwitter /></a>
        <a href="https://twitter.com/ScrdSimulations" target="_blank" rel='noreferrer'><BsTwitter /></a>
      </div>
      
      <div className="footer__copyright">
        <small>Copyright &copy; 2022. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer