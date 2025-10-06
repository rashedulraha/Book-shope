import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">
        <div> {children}</div>
      </div>
    </>
  );
};

export default Container;
