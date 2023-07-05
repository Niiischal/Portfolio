import React from 'react'
import cv from '../../assets/CV.pdf'

const Buttons = () => {
  return (
    <div>
      <a href={cv} download={cv} className='btn'>Download CV</a>
      <a href="/" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Buttons
