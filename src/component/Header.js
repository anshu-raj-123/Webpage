import React from "react";
import food from "../food truck.jpg";
import vector from "../Vector 1.png";
import group from "../Group 289.png";

const Header = () => {
  return (
    <>
      <section class="header">
        <div class="header-first">
          <img src={food} alt="food" />
          <div class="header-left">
            <h2>
              Discover the <span style={{ color: "lightcoral" }}>Best</span>{" "}
              Food and Drinks
            </h2>
            <p>
              Naturally made Healthcare Products for the better care& support of
              your body
            </p>
            <button>Explore Now!</button>
          </div>
        </div>
        <div class="header-sec">
          <img src={group} alt="loading" class="header-img" />
          <button>Get in Touch</button>
          <img src={vector} alt="bg-loading" class="overlay" />
        </div>
      </section>
    </>
  );
};

export default Header;
