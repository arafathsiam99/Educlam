import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h3 className="custom-text">INFORMATION</h3>
          <ol type="number">
            <li>About us</li>
            <li>Our Stories</li>
            <li>My Courses</li>
            <li>Our History</li>
            <li>Specialist Info</li>
          </ol>
        </div>
        <div className="col-md-4">
          <h3 className="custom-text">STUDENT HELP</h3>
          <ol type="number">
            <li>My Info</li>
            <li>My Questions</li>
            <li>F.A.Q</li>
            <li>Search Courses</li>
            <li>Latest Information</li>
          </ol>
        </div>
        <div className="col-md-4">
          <h3 className="custom-text">CONTACT</h3>
          <p>
            PO Box UN152468, 1 Street North, New <br /> Towm, California, USA
          </p>
          <p>Phone : 5 (012) 4565 789</p>
          <p>Fax : 5 (012) 4565 789</p>
          <p>Email : Info@info.com</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <h2 className="custom-banner">Educlam</h2>
        </div>
        <div className="col-md-4">
          <p>© All Rights Reserved. Powered By Educlam</p>
        </div>
        <div className="col-md-4">
          <img
            className="img-fluid mx-2"
            src="https://i.ibb.co/Rv7YN4G/americancard.png"
            alt=""
          />
          <img
            className="img-fluid mx-2"
            src=" https://i.ibb.co/DLgQVTs/card.png"
            alt=""
          />
          <img
            className="img-fluid mx-2"
            src=" https://i.ibb.co/0MmQmqH/descoverycard.png"
            alt=""
          />
          <img
            className="img-fluid mx-2"
            src="https://i.ibb.co/8M40XjW/mastercard.png"
            alt=""
          />
          <img
            className="img-fluid mx-2"
            src="https://i.ibb.co/MnVZxcy/visacard.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
