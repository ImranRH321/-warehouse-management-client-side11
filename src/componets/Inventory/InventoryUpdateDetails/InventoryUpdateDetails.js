import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InventoryUpdateDetails = () => {
  const { id } = useParams();
  const [services, setServices] = useState({});
  const [loading, setLoading]  = useState(true)

  /* single id then all data load and check for one data */
  useEffect(() => {
    const url = `https://carewarehouse.herokuapp.com/details/inventory/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setServices(data));
  }, [id]);
// console.log('services', services);
  const reSubmitForm = event => {
    event.preventDefault();
    const oldQuantity = services.quantity;
    const newQuantity = parseInt(event.target.stockInp.value);
    const updateQuantity = oldQuantity + newQuantity;
    // console.log(updateQuantity);
    const quantity = { updateQuantity };
    /* ---------- */
    const url = `https://carewarehouse.herokuapp.com/itemsQuantity/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quantity),
    })
      .then(response => response.json())
      .then(data => {
        console.log("quantity item", data);
         window.location.reload();
        
      });
    event.target.reset();


  };
  /* ------- */
  const delevardButton = () => {
    const oldQuantity = services.quantity;
    const updateQuantity = oldQuantity - 1;
    console.log(updateQuantity);
    const quantity = { updateQuantity };
    /* ---------- */
    const url = `https://carewarehouse.herokuapp.com/itemsQuantity/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quantity),
    })
      .then(response => response.json())
      .then(data => { 
        console.log("quantity item", data);
            window.location.reload();
      });
  };
  return (
    <div className="container my-3">
      <div className=" border rounded row">
        <div className="col-md-6 col-sm-12">
          <div className="img-baba w-100 p-2 ">
            <img
              className="w-100 rounded"
              src={services.img}
              alt="img not found"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="content-baba p-2 ">
            <h5>{services.name}</h5>
            <p>price: {services.price}</p>
            <p>{services.description}</p>
            <p>quantity: {services.quantity}</p>
          </div>
          <button
            onClick={() => delevardButton()}
            className="btn bg-primary text-white"
          >
            Delivered
          </button>
          <div class="input-group my-3 w-75">
            <div>
              <div className="d-flex">
                {/* quantity from  */}
                <form onSubmit={reSubmitForm}>
                  <div className="d-flex">
                    <input
                      type="text"
                      name="stockInp"
                      className="form-control border border-info d-flex"
                      placeholder="add quantity"
                    />
                    <button type="submit" className="btn bg-dark text-white">
                      Restock
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryUpdateDetails;
