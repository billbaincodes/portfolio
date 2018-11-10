import React from 'react'
import linkedIn from '../assets/linkedin-logo.png'
import gitHub from '../assets/github-logo.png'
import email from '../assets/contact.png'
import phone from '../assets/mobile-phone.png'


const Modal = ({ modalToggle }) => {

  return (

    <main className="main">
      <div className='modal-display'>
        <div className="modal-content">
          <span class="close" onClick={modalToggle}>&times;</span>
          <div class="modal-wrapper">
            <a href="https://www.linkedin.com/in/billbaincodes/" target="blank"><img className="logo" src={linkedIn} alt="LinkedIn"></img></a>
            <p>linkedin.com/in/billbaincodes/</p>
          </div>
          <div class="modal-wrapper">
            <a href="https://github.com/billbaincodes" target="blank"><img className="logo" src={gitHub} alt="GitHub"></img></a>
            <p>github.com/billbaincodes</p>
          </div>
          <div class="modal-wrapper">
            <a href="mailto:billbaincodes@gmail.com?Subject=Hello" target="blank"><img className="logo" src={email} alt="Email"></img></a>
            <p>billbaincodes@gmail.com</p>
          </div>
          <div class="modal-wrapper">
            <a href="tel:720-394-9962" target="blank"><img className="logo" src={phone} alt="Phone"></img></a>
            <p>720-394-9962</p>
          </div>
        </div>
      </div>
    </main>

  )
}

export default Modal