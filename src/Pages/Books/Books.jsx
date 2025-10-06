import Container from "../../Components/Container";
import Book from "../Book/Book";

const Books = ({ data }) => {
  return (
    <>
      <div className="bg-white text-zinc-900 ">
        <h1 className="text-center font-bold text-lg md:text-2xl p-3 ">
          All Books
        </h1>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mt-5  md:mt-7 ">
            {data.map((singleBook) => (
              <Book key={singleBook.bookId} singleBook={singleBook}></Book>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Books;
