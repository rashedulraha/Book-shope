import React from "react";

const ReadBookList = ({ singleBook }) => {
  const { image, bookName, review, totalPages, rating } = singleBook;
  return (
    <>
      <div className="card bg-primary text-primary-content w-full">
        <div className="card-body">
          <div className="flex flex-col md:flex-row  items-center justify-between">
            <div className="flex-1 w-48 h-48">
              <img
                className=" w-full h-full object-contain "
                src={image}
                alt=""
              />
            </div>
            <div className="flex-2">
              <h2 className="card-title"> {bookName}</h2>
              <p>{review}</p>
              <div className="flex items-center  gap-10 mt-5">
                {" "}
                <h3 className="text-red-500"> Total page : {totalPages}</h3>
                <span> Ratting : {rating}</span>
              </div>
              <div className="card-actions justify-end">
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadBookList;
