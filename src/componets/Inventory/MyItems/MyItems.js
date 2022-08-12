import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;

  console.log(user);
  const [newEmailUser, setNewEmailUser] = useState([]);

  useEffect(() => {
    const url = `https://carewarehouse.herokuapp.com/myItems?email=${email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setNewEmailUser(data);
      });
  }, [email]);

 
  /* ----------delete button ----------*/
  const handleDeleteItems = id => {
    const yes = window.confirm("Are your sure Delete ???");
    if (yes) {
      console.log(id);
      const url = `https://carewarehouse.herokuapp.com/myItems/${id}`;
      console.log("maneg", url);
      fetch(url, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          console.log('delete items', data);
          if (data.deletedCount > 0) {
            const deletedItem = newEmailUser.filter(car => car._id !== id);
            setNewEmailUser(deletedItem);
          }
        });
    }
  };

  return (
    <div className="container mt-5">
      {newEmailUser.map((items, ind) => (
        <table class="table">
          <tbody>
            <tr className="bg-dark text-white rounded">
              <th scope="row">{ind}</th>
              <td className="bg-dark text-white rounded">Email: <span className="mx-1">{items.email}</span></td>
              <td className="bg-dark text-white rounded">Quantity:{items.quantity}</td>
              <td className="bg-dark text-white rounded">Price: {items.price}</td>
              <td>
                <button onClick={()=> handleDeleteItems(items._id)}  className="text-white bg-danger border-0 rounded p-2">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default MyItems;
