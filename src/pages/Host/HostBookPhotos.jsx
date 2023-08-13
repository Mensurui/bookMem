import React from 'react';
import { useOutletContext } from "react-router-dom"

export default function HostBookPhotos(){
    const { currentBook} = useOutletContext()
    return (
        <img src={currentBook.imageUrl} className="host-van-detail-image" alt=''/>
    )
}