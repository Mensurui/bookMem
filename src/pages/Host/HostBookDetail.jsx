import React from "react";
import { Outlet ,Link, NavLink,useLoaderData } from "react-router-dom";
import { getBook } from "../../api";
import { requireAuth } from "../../utils"

export async function loader({ params, request }){
    await requireAuth(request)
    return getBook(params.id)
}

export default function HostBookDetail(){

    const currentBook = useLoaderData()

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all books</span></Link>
        <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentBook.imageUrl} alt="" />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentBook.type}`}
                        >
                            {currentBook.type}
                        </i>
                        <h3>{currentBook.name}</h3>
                        <h4>${currentBook.price}/day</h4>
                    </div>
                </div>
            </div>
            <nav className="host-van-detail-nav">
                <NavLink to='.' end style={({isActive}) => isActive ? activeStyles : null }>Details</NavLink>
                <NavLink to='pricing' style={({isActive}) => isActive ? activeStyles : null }>Price</NavLink>
                <NavLink to='photos'  style={({isActive}) => isActive ? activeStyles : null }>Photo</NavLink>
            </nav>
            <Outlet context={{currentBook}} />
            </section>
    )
}