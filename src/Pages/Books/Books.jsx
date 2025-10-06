import Container from "../../Components/Container";

const Books = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className="bg-white text-zinc-900 ">
        <h1 className="text-center font-bold text-lg md:text-2xl p-3 ">
          All Books
        </h1>
        <Container></Container>
      </div>
    </>
  );
};

export default Books;
