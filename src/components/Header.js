import React from 'react'

const Header = ({modalToggle, navigationSelect}) => {

  return (
    <nav className="header">
      <h4 className="headerLogo">Bill Bain Codes</h4>
      <a className="title" onClick={() => {navigationSelect('home')}}>Home</a>
      <a className="title" onClick={() => {navigationSelect('projects')}}>Projects</a>
      <a className="title" onClick={() => {navigationSelect('about')}}>About</a>
      <a className="title" onClick={modalToggle}>Contact</a>
    </nav>
  )
}

export default Header