import React from 'react'
import headshot from '../assets/headshot.jpg'

const Main = () => {
  return (

    <main className="main">
      <article className="article">
        <h3>Welcome</h3>
        <img className="headshot" src={headshot} alt="headshot"></img>
        <br />
        <br />
        <p>Job please</p>
        <br />
      </article>
    </main>

  )
}

export default Main
