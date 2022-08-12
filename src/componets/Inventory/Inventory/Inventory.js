import React, { useEffect, useState } from "react";
import Inventories from "../Inventories/Inventories";

const Inventory = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://carewarehouse.herokuapp.com/inventory")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div className="row container g-4 container mx-2 my-3">
      <div className="text-center">
        <p className="text-center m-0 bolder text-muted">Check out our recent cars</p>
        <h1 className="text-center">FEATURE CAR</h1>
        <hr className="w-50 mx-auto text-primary" />
      </div>
      {services.slice(0, 6).map(inventory => (
        <Inventories key={inventory._id} inventory={inventory}></Inventories>
      ))}
    </div>
  );
};

export default Inventory;
