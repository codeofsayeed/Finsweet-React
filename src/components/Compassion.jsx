import React from "react";

const Compassion = () => {
  return (
    <section id="compassion">
      <div className="container">
        <div className="title">
          <h4>SUB-HEADLINE</h4>
          <h2>love and compassion</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <button type="button" className="btn btn-primary">
            {" "}
            LEARN MORE{" "}
          </button>
        </div>
        <div className="items">
          <img src="./images/a-bearded-man-praying-5206040.jpg" alt="" />
          <img
            className="picturee"
            src="./images/man-and-woman-reading-book-while-sitting-on-pews-8468470.png"
            alt=""
          />
          <img src="./images/people-sitting-on-brown-pews-8674151.png" alt="" />
        </div>
        <div className="title">
          <h4>our mission & vision</h4>
          <h2>celebrate WITH US</h2>
          <div className="ptag">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="reading">
            <a href="">Read more</a>
            <img src="./images/Shape.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compassion;
