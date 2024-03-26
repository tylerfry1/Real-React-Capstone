import React from "react";
import "./contact.css";

const contact = () => {
  return (
    <div>
      <section className="contact container" id="contact">
        <div className="contact-data">
          <h2 className="heading">
            {" "}
            Get started with 
            <span className="gradient-text">LeChair</span>
          </h2>
          <p>
            Shop Today and Discover our highly competitive pricing
          </p>
          <a href="#" className="btn">
            Get started
          </a>
        </div>
      </section>
    </div>
  );
};

export default contact;