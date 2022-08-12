import React from "react";

const Loading = () => {
  return (
    <div style={{ fontSize: "30px" }} className="p-5 w-50 text-center  mx-auto">
      <div
        style={{ marginTop: "160px" }}
        className="spinner-border text-primary "
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
