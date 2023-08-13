import React from "react"
import { useOutletContext } from "react-router-dom"
export default function HostBookInfo() {
    const { currentBook} = useOutletContext()
    return (
        <section className="host-van-detail-info">
            <h4>Name: <span>{currentBook.name}</span></h4>
            <h4>Category: <span>{currentBook.type}</span></h4>
            <h4>Description: <span>{currentBook.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
    )
}