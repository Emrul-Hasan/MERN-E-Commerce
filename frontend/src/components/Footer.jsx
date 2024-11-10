import React from 'react'
import instraImg1 from "../assets/instagram-1.jpg"
import instraImg2 from "../assets/instagram-2.jpg"
import instraImg3 from "../assets/instagram-3.jpg"
import instraImg4 from "../assets/instagram-4.jpg"
import instraImg5 from "../assets/instagram-5.jpg"
import instraImg6 from "../assets/instagram-6.jpg"

const Footer = () => {
  return (
<>
<footer className='section__container footer__container'>
    <div className='footer__col'>
    <h4>Contact Info</h4>
    <p>
       <span><i className='ri-map-pin-2-fill'></i></span>
       123, London Bridge Street, London
    </p>
    <p>
    <span><i className='ri-mail-fill'></i></span>
    support@e-commerce.com
    </p>
    <p>
    <span><i className='ri-phone-fill'></i></span>
    +8801782387758
    </p>
    </div>
    <div className='footer__col'>
        <h4>Company</h4>
        <a href='./'>Home</a>
        <a href='./'>About Us</a>
        <a href='./'>Work With Us</a>
        <a href='./'>Our Blogs</a>
        <a href='./'>Trems and Conditions</a>
    </div>
    <div className='footer__col'>
    <h4>Useful Links</h4>
        <a href='./'>Help</a>
        <a href='./'>Track Your Order</a>
        <a href='./'>Menu</a>
        <a href='./'>Men</a>
        <a href='./'>Women</a>
        <a href='./'>Dresses</a>
    </div>

    <div className='footer__col'>
    <h4>Instragram</h4>
    <div className='instagram__grid'>
        <img src={instraImg1} alt=''></img>
        <img src={instraImg2} alt=''></img>
        <img src={instraImg3} alt=''></img>
        <img src={instraImg4} alt=''></img>
        <img src={instraImg5} alt=''></img>
        <img src={instraImg6} alt=''></img>
    </div>
    </div>
</footer>
<div className='footer__bar'>Copyright @2025 by Emrul. All rights reserved.</div>
</>
  )
}

export default Footer
