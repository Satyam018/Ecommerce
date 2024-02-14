import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerlogo">
        <img src={footer_logo}/>
        <p>SHOPPER</p>
      </div>
      <ul className="footerlinks">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footersocialicons">
        <div className="footericoncontainer">
            <img src={instagram_icon}/>
        </div>
        <div className="footericoncontainer">
            <img src={whatsapp_icon}/>
        </div>
        <div className="footericoncontainer">
            <img src={pinterest_icon}/>
        </div>
      </div>
      <div className="footercopyright">
        <hr/>
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
