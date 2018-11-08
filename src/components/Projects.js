import React from 'react'


const Projects = ({ modal, modalToggle }) => {

  return (

    <main className="main">
      <button onClick={modalToggle}>Modal Time</button>
      <div className={modal ? 'modal-display' : 'modal-hidden'}>
        <div class="modal-content">
          <span class="close" onClick={modalToggle}>&times;</span>
          <p>Some text in the Modal.</p>
          <a href="https://www.linkedin.com/in/billbaincodes/" target="blank"><img className="logo" alt="LinkedIn"></img></a>
          <p>Github</p>
        </div>
      </div>
    </main>

  )
}

export default Projects