import React from 'react'
import { AiOutlineContacts, AiOutlineHome, AiOutlineProject, AiOutlineUser } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import './navbar.css'


const NavBar = () => {
  return (
    <nav>
        <NavLink to="/"><AiOutlineHome/></NavLink>
        <NavLink to="/"><AiOutlineUser/></NavLink>
        <NavLink to="/"><AiOutlineProject/></NavLink>
        <NavLink to="/"><AiOutlineContacts/></NavLink>
    </nav>
  )
}

export default NavBar
