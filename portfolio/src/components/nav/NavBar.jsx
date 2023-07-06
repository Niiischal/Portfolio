import React from 'react'
import { AiOutlineContacts, AiOutlineHome, AiOutlineProject, AiOutlineUser } from 'react-icons/ai'
import './navbar.css'

const NavBar = () => {
  return (
    <nav>
        <a href="/"><AiOutlineHome/></a>
        <a href="/about"><AiOutlineUser/></a>
        <a href="/projects"><AiOutlineProject/></a>
        <a href="/contact"><AiOutlineContacts/></a>
    </nav>
  )
}

export default NavBar
