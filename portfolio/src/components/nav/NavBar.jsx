import React from "react";
import {
    AiOutlineContacts,
    AiOutlineHome,
    AiOutlineProject,
    AiOutlineUser,
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
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "var(--color-light)" : "",
          background: isActive ? "var(--color-bg)" : "",
        })}
      >
        <AiOutlineUser />
      </NavLink>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "var(--color-light)" : "",
          background: isActive ? "var(--color-bg)" : "",
        })}
      >
        <AiOutlineProject />
      </NavLink>
      <NavLink
        to="/"
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
