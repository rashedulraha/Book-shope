const Book = ({ singleBook }) => {
  const { author, image, bookName, review, category, rating } = singleBook;
  console.log(singleBook);

  return (
    <>
      <div className="card border border-gray-200 p-3">
        <figure className=" w-full  h-48 overflow-hidden  bg-gray-300 p-3">
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
          <p>{review}</p>
          <div className="card-actions justify-end">
            <div className=" badge-outline">
              {" "}
              Author : <span className="font-bold ">{author}</span>
            </div>
            <div className=" badge-outline">
              Rating: <span className="font-bold ">{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
