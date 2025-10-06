import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div> {children}</div>
      </div>
    </>
  );
};

export default Container;
