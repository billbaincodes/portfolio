import React from 'react'
import linkedIn from '../assets/linkedin-logo.png'
import gitHub from '../assets/github-logo.png'
import email from '../assets/contact.png'
import phone from '../assets/mobile-phone.png'




const Contact = () => {
  return (
    <address className="contactContainer">
      <a href="https://www.linkedin.com/in/billbaincodes/" target="blank"><img className="logo" src={linkedIn} alt="LinkedIn"></img></a>
      <a href="https://github.com/billbaincodes" target="blank"><img className="logo" src={gitHub} alt="gitHub"></img></a>
      <a href="mailto:billbaincodes@gmail.com?Subject=Hello"><img className="logo" src={email} alt="email"></img></a>
      <a href="tel:720-394-9962" target="blank"><img className="logo" src={phone} alt="phone"></img></a>
    </address>
  )
}

export default Contact
