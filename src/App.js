import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Footer from './components/Footer'
import Projects from './components/Projects'
import ContactModal from './components/ContactModal'



class App extends Component {

  state = {
    navigation: 'home',
    modal: false,
  }

  componentDidMount(){
    document.title = "Bill Bain Codes"
  }

  navigationRender = () => {
    switch(this.state.navigation) {
      case 'home':
        return  <Home />
      // break
      case 'projects':
        return <Projects />
      // break
      case 'about':
        return <About />
      // break
      default: 
        return <Home />
    }
  }

  navigationSelect = (destination) => {
    this.setState({ navigation:  destination })
  }


  modalToggle = () => {
    this.setState({ modal : !this.state.modal })
  }

  render() {
    return (
      <div className="site-wrapper">
        <Header navigationSelect={this.navigationSelect}
                modalToggle={this.modalToggle}/>
        {this.state.modal ? <ContactModal modalToggle={this.modalToggle}/> : ''}
        <div className="main-content">
        {this.navigationRender()}
        </div>
        <Footer />
      </div>
    )
  }

}

export default App
