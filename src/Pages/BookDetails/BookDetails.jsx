import { useLoaderData, useParams } from "react-router";
import Container from "../../Components/Container";
import { addToStorBd } from "../../Util/AddToDb";

const BookDetails = () => {
  const { id } = useParams();
  const convertNumberOfId = parseInt(id);

  const AllBooksData = useLoaderData();
  const singBookData = AllBooksData.find(
    (book) => book.bookId === convertNumberOfId
  );

  const { image, bookName, review } = singBookData || {};

  const handleClickMarkAsRead = (id) => {
    addToStorBd(id);
  };

  return (
    <div>
      <Container>
        <div className="card card-side max-w-5xl mx-auto shadow-sm my-5 p-5 ">
          <figure className="h-64 w-48 flex-1 ">
            <img
              className="w-full h-full object-contain"
              src={image}
              alt="Movie"
            />
          </figure>
          <div className="card-body flex-2">
            <h2 className="card-title">{bookName}</h2>
            <p>{review}</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleClickMarkAsRead(id)}
                className="btn btn-primary capitalize"
              >
                mark as read
              </button>
              <button className="btn btn-secondary capitalize">
                add to WishList
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookDetails;
