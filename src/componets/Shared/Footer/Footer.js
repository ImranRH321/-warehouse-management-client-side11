import React from "react";
import "./Footer.css";

const Footer = () => {
  const footer1 =
    "https://pro-theme.com/html/motorland/assets/media/general/logo.png";

  return (
    <div className="container-fluid bgColor p-5">
      <div className="row">
        <div className="div col-md-3 col-sm-3 items">
          <h3> Recent Cars</h3>
          <div className="d-flex justify-content-center align-items-center my-3">
            <img
              className="w-25"
              src="https://storage.googleapis.com/theme-vessel-items/checking-sites/carhouse-2-html/HTML/main/img/car/small-car-3.jpg"
              alt=""
            />
            <p className="ms-2">Bentley Continental</p>
            <p>
              <small>$745,00 | Sep 06, 2022</small>
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center my-3">
            <img
              className="w-25"
              src="https://storage.googleapis.com/theme-vessel-items/checking-sites/carhouse-2-html/HTML/main/img/car/small-car-1.jpg"
              alt=""
            />
            <p className="ms-2">Bentley Continental GT</p>
            <p>
              <small>$745,00 | Sep 06, 2022</small>
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center my-3">
            <img
              className="w-25"
              src="https://storage.googleapis.com/theme-vessel-items/checking-sites/carhouse-2-html/HTML/main/img/car/small-car-2.jpg"
              alt=""
            />
            <p className="ms-2">Bentley Continental GT</p>
            <small>$745,00 | Aug 26, 2021 </small>
          </div>
        </div>
        <div className="div col-md-3 col-sm-3 items">
          <div className="row">
            <div className="d-sm-flex d-md-flex">
              <div className="col-md-6 ">
                <h5>TOP BRANDS</h5>
                <hr />
                <p>Alfa Romeo</p>
                <p>Ferrari</p>
                <p>BMW Series</p>
                <p>Mercedes</p>
                <p>Aston Martin</p>
              </div>
              <div className="col-md-6">
                <h4>
                  Toyota
                  <hr />
                </h4>
                <p>Opel</p>
                <p>Mclaren</p>
                <p>Peogeot</p>
                <p>Mercedes</p>
                <p>Renault</p>
              </div>
            </div>
          </div>
        </div>
        <div className="div col-md-3 col-sm-3 items">
          <div>
            <img src={footer1} alt="" />
          </div>
          <p>
            <small className="text-muted">
              Duis aute irure reprehend voluptate velit ese acium fugiat nula
              pariatur exceptus ipsum dolor sit amet consectetur adipisic elita
              sed eiusmod tempor.
            </small>
          </p>
          <div>
            <p>
              <i className="fa-brands fa-facebook mx-2 px-1"></i>
              <i className="fa-brands fa-youtube mx-2 px-1"></i>
              <i className="fa-brands fa-linkedin mx-2 px-1"></i>
              <i className="fa-brands fa-twitter mx-2 px-1"></i>
            </p>
          </div>
        </div>
        <div className="div col-md-3 col-sm-3 items">
          <h5>ADDRESS INFORMATION</h5>
          <p>Call us (042) 789 35490</p>
          <p>support@motorland.com</p>
          <p>Fairview Ave, El Monte, CA, 91732</p>
          <p>Mon - Fri : 0900am to 0600pm</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
