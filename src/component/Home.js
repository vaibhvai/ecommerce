import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div className="hero">
      <div class="card text-bg-dark text-white border-0">
        <img
          src="https://assets.entrepreneur.com/content/3x2/2000/20150814172407-online-shopping.jpeg?format=pjeg&auto=webp"
          height="550px"
          class="card-img"
          alt="Background"
        />
        <div class="card-img-overlay d-flex flex-coloumn justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder " color="black">
              NEW SEASON ARRIVALS
            </h5>
            <p class="card-text">Check Out All Trends</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
