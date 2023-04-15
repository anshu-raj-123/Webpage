import React from "react";
import "../App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../images1.jpg"
import image2 from "../images2.jpg"
import image3 from "../images3.jpg"
import image4 from "../images4.jpg"
import image5 from "../images5.jpg"

const Carusel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="card" style={{height:"300px"}} >
        <Carousel responsive={responsive}>
          <div className="card" style={{"width": "18rem" , "height":"300px"}}>
            <img src={image1} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{"width": "18rem"}}>
            <img src={image2} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{"width": "18rem"}}>
            <img src={image3} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{"width": "18rem"}}>
            <img src={image4} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{"width": "18rem"}}>
            <img src={image5} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{"width": "18rem"}}>
            <img src={image3} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          
        </Carousel>
      </div>
    </>
  );
};

export default Carusel;
