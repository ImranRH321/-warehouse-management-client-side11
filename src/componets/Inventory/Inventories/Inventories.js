import React from "react";
import { Link } from "react-router-dom";

const Inventories = ({ inventory }) => {
  const { name,  img, price, _id, description, quantity } = inventory;

  return (
    <div className="col-md-4">
      <div className=" border rounded">
        <div className="img-baba w-100 p-2">
          <img className="w-100 rounded" src={img} alt="img not found" />
        </div>
        <div className="content-baba p-2">
          <h5>{name}</h5>
          <p>price: {price}</p>
          <p>{description}</p>
          <p>quantity: {quantity}</p>
          <Link className="btn btn-dark" to={`/inventory/${_id}`}>
            Update
          </Link>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Inventories;
