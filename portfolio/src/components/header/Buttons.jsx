import React from 'react'
import cv from '../../assets/CV.pdf'

const Buttons = () => {
  return (
    <div>
      <a href={cv} download={cv}>Download CV</a>
      <a href="/">Let's Talk</a>
    </div>
  )
}

export default Buttons
