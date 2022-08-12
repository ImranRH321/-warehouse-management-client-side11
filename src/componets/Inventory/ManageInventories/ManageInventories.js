import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageInventories = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://carewarehouse.herokuapp.com/inventory")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  /* delete button */
  const handleDelete = id => {
    console.log(id);
    const yes = window.confirm("Are your sure Delete ???");
    if (yes) {
      const url = `https://carewarehouse.herokuapp.com/manageItems/inventory/${id}`;
      console.log("maneg", url);
      fetch(url, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            const deletedItem = services.filter(car => car._id !== id);
            setServices(deletedItem);
          }
        });
    }
  };

  return (
    <div>
      <h1 className="text-center fst-1 p-5">FEATURE CAR</h1>
      <div className="row">
        {services.map(inventory => (
          <div className="col-md-4">
            <div className=" border rounded">
              <div className="img-baba w-100 p-2">
                <img
                  className="w-100 rounded"
                  src={inventory.img}
                  alt="img not found"
                />
              </div>
              <div className="content-baba p-2">
                <h5>{inventory.name}</h5>
                <p>price: {inventory.price}</p>
                <p>{inventory.description}</p>
                <p>quantity: {inventory.quantity}</p>
                <p>supplier: {inventory.supplier}</p>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => handleDelete(inventory._id)}
                    className="btn btn-danger"
                  >
                    Deleted Item
                  </button>
                  <Link to="/add/items" className="btn btn-primary">
                    Add New Items
                  </Link>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
