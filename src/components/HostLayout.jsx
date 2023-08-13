import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function HostLayout(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return(
        <>
        <nav className="host-nav"> 
            <NavLink to="." style={({isActive}) => isActive ? activeStyles : null} end >Dashboard</NavLink>
            <NavLink to="income" style={({isActive}) => isActive ? activeStyles : null}>Income</NavLink>
            <NavLink to="hostBooks" style={({isActive}) => isActive ? activeStyles : null}>Books</NavLink>
            <NavLink to="reviews" style={({isActive}) => isActive ? activeStyles : null}>Reviews</NavLink>
        </nav>
        <Outlet/>
        </>
    )
}