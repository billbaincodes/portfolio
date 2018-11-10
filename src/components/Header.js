import React from 'react'

const Header = ({modalToggle, navigationSelect}) => {

  return (
    <nav className="header">
      <h4 className="headerLogo">Bill Bain Codes</h4>
      <button className="navLink" onClick={() => {navigationSelect('home')}}>Home</button>
      <button className="navLink" onClick={() => {navigationSelect('projects')}}>Projects</button>
      <button className="navLink" onClick={() => {navigationSelect('about')}}>About</button>
      <button className="navLink" onClick={modalToggle}>Contact</button>
    </nav>
  )
}

export default Header