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
  console.log(bookData, id);

  if (bookData.includes(id)) {
    alert("This id is already exit");
  } else {
    bookData.push(id);
    const data = JSON.stringify(bookData);
    localStorage.setItem("readList", data);
  }
};

export { addToStorBd, getStoreBook };
