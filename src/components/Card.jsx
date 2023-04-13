import React from "react";
import './Card.css'

const Card = () => {
  return (
    <div className="card" data-aos="flip-up" data-aos-delay="150">
      <div className="content">
        <div className="img">
          {/* <img src="../assets/service-2.png" alt="service-icon" /> */}
        </div>
        <h3>Facilities</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quis
          illo necessitatibus aperiam voluptate quam quibusdam sint fugit nam.
        </p>
      </div>
    </div>
  );
};

export default Card;
