import React from 'react'
import headshot from '../assets/headshot.jpg'
import resume from '../assets/billBainResume.pdf'

const Main = () => {

  return (
    <main className="main">
      <article className="article">
        <img className="headshot" src={headshot} alt="headshot"></img>
        <br />
        <br />
        <embed src={resume} width="500" height="375"></embed>
        <p>Job please</p>
        <br />
      </article>
    </main>
  )
  
}

export default Main