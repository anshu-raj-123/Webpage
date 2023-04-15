import React from "react";
import foodTruck from "../food truck.jpg";
import insta from "../instagram.png";
import twitter from "../twitter.png";
import fb from "../facebook.png";

const Footer = () => {
  return (
    <>
      <div class="footer">
        <div class="footer-one">
          <img
            style={{ " height": "80px", width: "90px" }}
            src={foodTruck}
            alt="Loading"
          />
        </div>
        <div class="footer-sec">
          <h2 style={{ color: "rgb(4, 4, 112)" }}>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima hic
            accusamus recusandae.
          </p>
          <p>example2020@gmail.com</p>
          <p>(904)443-0343</p>
        </div>
        <div class="footer-third">
          <ul>
            <li style={{ color: "rgb(4, 4, 112)", "font-size": "20px" }}>
              More
            </li>
            <li>About Us</li>
            <li>Products</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div class="footer-four">
          <p style={{ color: "rgb(4, 4, 112)", "font-size": "20px" }}>
            Social Links
          </p>
          <span style={{ marginLeft: "7px" }}>
            <img src={insta} alt="" />
          </span>
          <span style={{ marginLeft: "7px" }}>
            <img src={twitter} alt="" />
          </span>
          <span style={{ marginLeft: "7px" }}>
            <img src={fb} alt="" />
          </span>
          <p>© 2022 Food Truck Example</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
