// import React from "react";

// export default function Dashboard(){
//     return(
//         <h1>Dashboard</h1>
//     )
// }

import React from "react"
import { Link, defer, Await, useLoaderData } from "react-router-dom"
import { getHostBooks } from "../../api"
import { requireAuth } from "../../utils"
import { BsStarFill } from "react-icons/bs"

export async function loader({ request }) {
    await requireAuth(request)
    return defer({ book: getHostBooks() })
}

export default function Dashboard() {
    const loaderData = useLoaderData()

    function renderBookElements(books) {
        const hostBooksEls = books.map((book) => (
            <div className="host-van-single" key={book.id}>
                <img src={book.imageUrl} alt={`Photo of ${book.name}`} />
                <div className="host-van-info">
                    <h3>{book.name}</h3>
                    <p>${book.price}/day</p>
                </div>
                <Link to={`books/${book.id}`}>View</Link>
            </div>
        ))

        return (
            <div className="host-vans-list">
                <section>{hostBooksEls}</section>
            </div>
        )
    }

    return (
        <>
            <section className="host-dashboard-earnings">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to="income">Details</Link>
            </section>
            <section className="host-dashboard-reviews">
                <h2>Review score</h2>
                <BsStarFill className="star" />
                <p>
                    <span>5.0</span>/5
                </p>
                <Link to="reviews">Details</Link>
            </section>
            <section className="host-dashboard-vans">
                <div className="top">
                    <h2>Your listed vans</h2>
                    <Link to="vans">View all</Link>
                </div>
                    {/* <React.Suspense fallback={<h3>Loading...</h3>}>
                        <Await resolve={loaderData.books}>{renderBookElements}</Await>
                    </React.Suspense> */}
            </section>
        </>
    )
}