import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostBooks } from "../../api"
import { requireAuth } from "../../utils"

export async function loader({ request }){
    await requireAuth(request)
    return getHostBooks();
}

export default function HostBooks(){

    const books =useLoaderData()

    const hostBooksEls = books.map(book => (
        <Link
            to={`/host/hostBooks/${book.id}`}
            key={book.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={book.id}>
                <img src={book.imageUrl} alt={`Photo of ${book.name}`} />
                <div className="host-van-info">
                    <h3>{book.name}</h3>
                    <p>${book.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return(
        <section>
            <h1 className="host-vans-title">Your listed books</h1>
            <div className="host-vans-list">
                        <section>
                            {hostBooksEls}
                        </section>
            </div>
        </section>
    )
}