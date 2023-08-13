import React from 'react';
import { useOutletContext } from "react-router-dom"

export default function HostBookPricing(){
    const { currentBook} = useOutletContext()
    return (
        <h3 className="host-van-price">${currentBook.price}<span>/day</span></h3>
    )
}