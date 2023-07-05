import React from 'react'
import Buttons from './Buttons'

const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Nischal Khatiwada</h1>
            <h1 className='text-light'>Frontend Developer.</h1>
            <Buttons/>
        </div>
    </header>
  )
}

export default Header
