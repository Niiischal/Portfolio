import React from "react";
import {
  AiOutlineBook,
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineUser
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "var(--color-light)" : "",
          background: isActive ? "var(--color-bg)" : "",
        })}
      >
        <AiOutlineHome />
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "var(--color-light)" : "",
          background: isActive ? "var(--color-bg)" : "",
        })}
      >
        <AiOutlineUser />
      </NavLink>
      <NavLink
        to="/skills"
        style={({ isActive }) => ({
          color: isActive ? "var(--color-light)" : "",
          background: isActive ? "var(--color-bg)" : "",
        })}
      >
        <AiOutlineBook />
      </NavLink>
      <NavLink
        to="/projects"
        style={({ isActive }) => ({
          color: isActive ? "var(--color-light)" : "",
          background: isActive ? "var(--color-bg)" : "",
        })}
      >
        <AiOutlineProject />
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          color: isActive ? "var(--color-light)" : "",
          background: isActive ? "var(--color-bg)" : "",
        })}
      >
        <AiOutlineContacts />
      </NavLink>
    </nav>
  );
};

export default NavBar;
