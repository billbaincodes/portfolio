import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


class App extends Component {

  componentDidMount(){
    document.title = "Bill Bain Codes"
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
  
}

export default App
