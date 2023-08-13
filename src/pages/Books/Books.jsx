import React, {Suspense} from "react";
import {
  Link,
  useLoaderData,
  useSearchParams,
  defer,
  Await,
} from "react-router-dom";
import { getBooks } from "../../api";

export function loader() {
  return defer({ books: getBooks() });
}
function Books() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataPromised = useLoaderData();
  const typeFilter = searchParams.get("type");

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }
  function renderBookElements(books) {
    const displayedBooks = typeFilter
      ? books.filter((book) => book.type === typeFilter)
      : books;
    const bookElements = displayedBooks.map((book) => (
      <div key={book.id} className="van-tile">
        <Link
          to={book.id}
          state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter,
          }}
        >
          <img src={book.imageUrl} />
          <div className="van-info">
            <h3>{book.name}</h3>
            <p>
              ${book.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${book.type} selected`}>{book.type}</i>
        </Link>
      </div>
    ));
    return (
      <>
        <div className="van-list-filter-buttons">
          <button
            onClick={() => handleFilterChange("type", "simple")}
            className={`van-type simple ${
              typeFilter === "simple" ? "selected" : ""
            }`}
          >
            Simple
          </button>
          <button
            onClick={() => handleFilterChange("type", "luxury")}
            className={`van-type luxury ${
              typeFilter === "luxury" ? "selected" : ""
            }`}
          >
            Luxury
          </button>
          <button
            onClick={() => handleFilterChange("type", "rugged")}
            className={`van-type rugged ${
              typeFilter === "rugged" ? "selected" : ""
            }`}
          >
            Rugged
          </button>
          {typeFilter ? (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="van-type clear-filters"
            >
              Clear
            </button>
          ) : null}
        </div>
        <div className="van-list">{bookElements}</div>
      </>
    );
  }

  return (
    <div className="van-list-container">
      <h1>Explore our books options</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={dataPromised.books}>
        {renderBookElements}
      </Await>
      </Suspense>
    </div>
  );
}
export default Books;
