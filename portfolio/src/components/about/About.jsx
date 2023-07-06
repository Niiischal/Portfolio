import React from 'react'
import { BsPersonWorkspace } from 'react-icons/bs'
import { VscFolderLibrary } from 'react-icons/vsc'
import myImage from '../../assets/me.jpg'

const About = () => {
  return (
<section>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about">
        <div className="me">
            <div className="myImage">
                <img src={myImage} alt="myself" />
            </div>
        </div>
        <div className="content">
            <div className="cards">
                <article className='card'>
                <BsPersonWorkspace/>
                     <h5>Experience</h5>
                     <small>Few Months.</small>
                </article>
                <article className='card'>
                <VscFolderLibrary/>
                     <h5>Projects</h5>
                     <small>Few.</small>
                </article>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quas. Ad magnam magni iste velit minus accusantium eveniet voluptate at! Vel, quaerat quasi. Ut, harum soluta delectus eos necessitatibus officia!</p>

            <a href="/contact" className='btn btn-primary'>Let's Get Connected</a>
        </div>
    </div>
</section>
  )
}

export default About
