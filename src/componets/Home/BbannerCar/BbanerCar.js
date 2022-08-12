import React from "react";

const BbanerCar = () => {
  const car =
    "http://themes.potenzaglobalsolutions.com/html/cardealer/images/blog/01.jpg";
  const car1 = 'http://themes.potenzaglobalsolutions.com/html/cardealer/images/testimonial/02.jpg'  
  return (
    <div>
      <div className="row container mx-2">
        <div className="col-md-6 col-sm-12">
          <h5 className="fst-bolder mt-4">
            PORSCHE 911 IS TEXT OF THE PRINTIN A GALLEY OF TYPE AND BLED IT TO
            MAKE A TYPE SPECIMEN BOOK.
          </h5>
          <p>
            NOVEMBER 29, 2021 |{" "}
            <span className=" text-white px-3">POST BY JOHN DOE</span>
          </p>
          <p className="text-muted">
            Sed do eiusmod tempor lorem ipsum dolor sit amet, consectetur
            adipisicing elit, incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam.
          </p>

          <p className="text-muted">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa
          </p>
          <button className="btn btn-dark">ReadMore</button>
        </div>
        
        <div className="col-md-6 col-sm-12">
          <div className="w-100 mt-4">
            <img className="w-100" src={car} alt="" />
          </div>
        </div>
      </div>
      {/* >..... */}
      <div className="row container">
        <div className="col-md-6 col-sm-12">
          <div className="w-100 mt-4 m-3">
            <img height={'320px'} className="w-100" src={car1} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
           <div className="px-5">
           <h1 className="display-1 mt-4">
          BOXSTER
          </h1>
          <p className="text-muted">
          Get the Porsche You always Wanted
          </p> 
          <h3 className="text-danger">$450</h3>
          <p className="text-muted">
          per month
          </p>
          <p className="text-muted">
          per month
          </p>
          <p className="text-muted">
          LIMITED TIME OFFER!
          </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BbanerCar;
