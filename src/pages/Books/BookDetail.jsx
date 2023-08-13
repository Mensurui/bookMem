import { Link, useLocation, useLoaderData } from 'react-router-dom';
import { getBook } from '../../api';

export function loader({ params }){
   return getBook(params.id)
}

export default function BookDetail(){
    const location = useLocation()
    const book = useLoaderData()


    const search = location.state?.search || ""
    const type = location.state?.type || "all"
    return (
        <div className="van-detail-container">
        <Link
            to={`..${search}`}
            relative="path"
            className="back-button"
        >&larr; <span>Back to {type} books</span></Link>
                <div className="van-detail">
                    <img src={book.imageUrl} alt='' />
                    <i className={`van-type ${book.type} selected`}>{book.type}</i>
                    <h2>{book.name}</h2>
                    <p className="van-price"><span>${book.price}</span>/day</p>
                    <p>{book.description}</p>
                    <button className="link-button">Rent this book</button>
                </div>
        </div>
    )
}