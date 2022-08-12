import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./componets/Home/Home/Home";
import Login from "./componets/Login/Login/Login";
import Register from "./componets/Login/Register/Register";
import Header from "./componets/Shared/Header/Header";
import NotFound from "./componets/Shared/NotFound/NotFound";
import Inventory from "./componets/Inventory/Inventory/Inventory";
import Footer from "./componets/Shared/Footer/Footer";
import InventoryUpdateDetails from "./componets/Inventory/InventoryUpdateDetails/InventoryUpdateDetails";
import RequireAuth from "./componets/Shared/RequireAuth/RequireAuth";
import ManageInventories from "./componets/Inventory/ManageInventories/ManageInventories";
import AddItems from "./componets/Inventory/AddItems/AddItems";
import Blogs from "./componets/Blogs/Blogs";
import MyItems from "./componets/Inventory/MyItems/MyItems";
import BbanerCar from "./componets/Home/BbannerCar/BbanerCar";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/bBaner" element={<BbanerCar />}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <InventoryUpdateDetails />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/manageInventories"
          element={
            <RequireAuth>
              <ManageInventories />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/add/items"
          element={
            <RequireAuth>
              <AddItems />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="myitems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        ></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
