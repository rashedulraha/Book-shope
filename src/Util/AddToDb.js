import { ToastContainer, toast } from "react-toastify";

const getStoreBook = () => {
  const storeBook = localStorage.getItem("readList");

  if (storeBook) {
    const storeBooksData = JSON.parse(storeBook);
    return storeBooksData;
  } else {
    return [];
  }
};

const addToStorBd = (id) => {
  const bookData = getStoreBook();

  if (bookData.includes(id)) {
    toast("This id is already exit");

    <ToastContainer />;
  } else {
    bookData.push(id);
    const data = JSON.stringify(bookData);
    localStorage.setItem("readList", data);
  }
};

export { addToStorBd, getStoreBook };
