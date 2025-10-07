import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const {
    author,
    image,
    bookName,
    review,
    category,
    rating,
    tags,
    yearOfPublishing,
    totalPages,
  } = singleBook;
  // console.log(singleBook);

  return (
    <>
      <Link to={`/bookDetails/${singleBook.bookId}`}>
        <div className="card border border-gray-200 p-3">
          <figure className=" w-2/3 mx-auto  h-48 overflow-hidden  bg-gray-200 p-3">
            <img
              className="w-full h-full object-contain"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">{category}</div>
            </h2>

            <div className="flex items-center w-full h-fit justify-between">
              <div className="flex gap-3 font-bold">
                {tags.map((singTag, index) => (
                  <button key={index}>{singTag}</button>
                ))}
              </div>

              <div>
                Publishing: <span>{yearOfPublishing}</span> Pages:
                <span>{totalPages}</span>
              </div>
            </div>
            <p>{review}</p>
            <div className="card-actions justify-end">
              <div className=" badge-outline">
                {" "}
                Author : <span className="font-bold ">{author}</span>
              </div>
              <div className=" badge-outline flex items-center gap-2">
                <FaRegStarHalfStroke />
                <span className="font-bold  "> {rating}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Book;
