import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = ()=>{
    return (
        <div className="nav">
            <h2>Personal Portfolio</h2>
            <div className="links">
                <NavLink to='/' className='navbar_item'> Home </NavLink>
                <NavLink to='/about' className='navbar_item'> About </NavLink>
                <NavLink to='/project' className='navbar_item'> Projects </NavLink>
                <NavLink to='/contact' className='navbar_item'> Contact Me </NavLink>
            </div>
            
        </div>
    
    )
};

export default NavBar;