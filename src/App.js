import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Main from './components/Main'
import Footer from './components/Footer'
import Projects from './components/Projects'



class App extends Component {

  state = {
    main: false,
    about: false,
    projects: true,
    modal: false,
  }

  componentDidMount(){
    document.title = "Bill Bain Codes"
  }

  mainSetter = () => {
    this.setState({ about : false })
    this.setState({ main : true })
  }

  aboutSetter = () => {
    this.setState({ main : false })
    this.setState({ about : true })
  }

  modalToggle = () => {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    return (
      <div className="site-wrapper">
        <Header aboutSetter={this.aboutSetter}
                mainSetter={this.mainSetter}
                />
        <div className="main-content">
        {this.state.main ? <Main /> : ''}
        {this.state.about ? <About/> : ''}
        {this.state.projects ? <Projects  modal={this.state.modal} 
                                          modalToggle={this.modalToggle}/> : ''}
        </div>
        <Footer />
      </div>
    )
  }

}

export default App
