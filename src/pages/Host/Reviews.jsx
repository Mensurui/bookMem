// import React from "react";

// export default function Reviews(){
//     return(
//         <h1>Reviews</h1>
//     )
// }

import React from "react"
import { BsStarFill } from "react-icons/bs"
import Image from "../../assets/images/reviews-graph.png"

export default function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum rem a saepe id aliquam mollitia, in, voluptas eaque dolor natus at fuga neque quis! Pariatur voluptas mollitia sapiente ad!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "Lorem ipsum dolor sit amet consect",
            id: "2",
        },
    ]
    
    return (
        <section className="host-reviews">
            <div className="top-text">
                <h2>Your reviews</h2>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <img
                className="graph"
                src={Image}
                alt="Review graph"
            />
            <h3>Reviews (2)</h3>
            {reviewsData.map((review) => (
                <div key={review.id}>
                    <div className="review">
                        {[...Array(review.rating)].map((_, i) => (
                            <BsStarFill className="review-star" key={i} />
                        ))}
                        <div className="info">
                            <p className="name">{review.name}</p>
                            <p className="date">{review.date}</p>
                        </div>
                        <p>{review.text}</p>
                    </div>
                    <hr />
                </div>
            ))}
        </section>
    )
}