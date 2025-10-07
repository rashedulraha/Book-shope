import { useLoaderData } from "react-router";
import Container from "../../Components/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { getStoreBook } from "../../Util/AddToDb";
import ReadBookList from "./ReadBookList";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const booksData = useLoaderData();

  useEffect(() => {
    const getStoreLocalData = getStoreBook();

    const convertBookIdData = getStoreLocalData.map((id) => parseInt(id));

    const myReadList = booksData.filter((singleBook) =>
      convertBookIdData.includes(singleBook.bookId)
    );

    setReadList(myReadList);
    console.log(myReadList);
  }, [booksData]);

  const handleClickTOSort = (type) => {
    setSort(type);

    if (type === "page") {
      const sortByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );

      setReadList(sortByPage);
    }
    if (type === "Ratting") {
      const sortByRatting = [...readList].sort((a, b) => a.rating - b.rating);

      setReadList(sortByRatting);
    }
  };

  return (
    <>
      <div className="my-5">
        <Container>
          <div className="w-full   flex items-center justify-center my-5">
            <details className="dropdown">
              <summary className="btn m-1">
                Sort by : {sort ? sort : ""}
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li onClick={() => handleClickTOSort("page")}>
                  <a>page </a>
                </li>
                <li onClick={() => handleClickTOSort("Ratting")}>
                  <a>ratting</a>
                </li>
              </ul>
            </details>
          </div>
          <Tabs>
            <TabList>
              <Tab>Read book list </Tab>
              <Tab>My wish list</Tab>
            </TabList>

            <TabPanel>
              <div className="flex flex-col  gap-3 border border-gray-300 p-3 mt-5 rounded-md">
                {readList.map((singleBook) => (
                  <ReadBookList singleBook={singleBook} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </Container>
      </div>
    </>
  );
};

export default ReadList;
