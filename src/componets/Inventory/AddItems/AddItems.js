import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";

const AddItems = () => {
  const [user, loading] = useAuthState(auth);
  console.log(user, "add item");

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    const url = `https://carewarehouse.herokuapp.com/addItems`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        alert("add new items for tnx ....!");
        console.log("Success:", result);
      });
  };

  return (
    <div className="w-50 mx-auto bg-muted p-5">
      <h2> Add Items ..........!!!</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="d-block w-75 my-3 bd-highlight  form-control "
          placeholder="your name"
          type="text"
          {...register("name")}
        />
        <input
          className="d-block w-75 my-3 bd-highlight form-control "
          placeholder="your Email"
          type="email"
          value={user?.email}
          {...register("email")}
          required
        />
        <input
          className="d-block w-75 my-3 bd-highlight form-control"
          placeholder="img-url"
          type="text"
          {...register("img")}
          required
        />
        <input
          className="d-block w-75 my-3 bd-highlight form-control"
          placeholder="description"
          type="text"
          {...register("description")}
          required
        />
        <input
          className="d-block w-75 my-3 bd-highlight form-control"
          placeholder="price"
          type="number"
          {...register("price")}
          required
        />
        <input
          className="d-block w-75 my-3 bd-highlight form-control"
          placeholder="quantity"
          type="number"
          {...register("quantity")}
          required
        />

        <input
          className="d-block w-75 my-3 bd-highlight form-control"
          placeholder="supplier name"
          type="text"
          {...register("supplier")}
          required
        />
        <div className="d-flex justify-content-between w-75">
          <input className="btn-primary btn" type="submit" value="AddProduct" />

          <button
            onClick={() => {
              reset();
            }}
            className="btn-danger btn"
            type="button"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItems;
