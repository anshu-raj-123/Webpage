import React from "react";
import img from "../girl (lp).png";

const Content1 = () => {
  return (
    <>
      <div class="sec">
        <div class="sec-image">
          <img src={img} alt="looading..." />
        </div>
        <div class="sec-sec">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            numquam incidunt ad eligendi. Veniam molestias sapiente laudantium
            ex nostrum facere similique. Similique quo quae rem velit fuga
            molestias asperiores cupiditate?
          </p>
          <button>Read More</button>
        </div>
      </div>
    </>
  );
};

export default Content1;
