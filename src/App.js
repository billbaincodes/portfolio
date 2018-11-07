import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <img src="https://picsum.photos/1000/300" alt="hero_image"></img>
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
