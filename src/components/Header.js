import React from 'react'

const Header = ({aboutSetter, mainSetter}) => {



  return (
    <nav className="header">
      <h4 className="headerLogo">Bill Bain Codes</h4>
      <a className="title" onClick={mainSetter}>Home</a>
      <a className="title">Projects</a>
      <a className="title" onClick={aboutSetter}>About</a>
      <a className="title">Contact</a>
    </nav>
  )
}

export default Header