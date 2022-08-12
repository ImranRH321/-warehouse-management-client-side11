import React from "react";
import Blogs from "../../Blogs/Blogs";
import Inventory from "../../Inventory/Inventory/Inventory";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import BbanerCar from "../BbannerCar/BbanerCar";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
      <BbanerCar></BbanerCar>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
