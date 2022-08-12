import React from "react";

const NotFound = () => {
  const error =
    "https://img.freepik.com/free-vector/404-error-isometric-landing-banner-website-maintenance-page-found-concept-with-traffic-cones-sign-construction_107791-3733.jpg?size=626&ext=jpg&ga=GA1.2.328685985.1649179852";

  const errStyle = {
    width: "100%",
    height: "50%",
  };
  return (
    <div>
      <h2>page not found lodding...............</h2>
      <div style={errStyle}>
        <img style={errStyle} className="" src={error} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
