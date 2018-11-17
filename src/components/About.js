import React from 'react'
import headshot from '../assets/headshot.jpg'
import resume from '../assets/billBainResume.pdf'

const Main = () => {

  return (
    <main className="main">
      <article className="article">
        <img className="headshot" src={headshot} alt="mymug"></img>
        <br />
        <br />
        <embed src={resume} width="750" height="500"></embed>
        <p>Job please</p>
        <br />
      </article>
    </main>
  )

}

export default Main