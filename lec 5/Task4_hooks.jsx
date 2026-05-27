import React, { useState } from 'react';

const Task4_hooks = () => {
  // Initial state for the car details
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    color: "Red",
    year: "1964"
  });

  // Function to update the details
  const updateCar = () => {
    setCar({
      brand: "Tesla",
      model: "Model S",
      color: "Midnight Silver",
      year: "2023"
    });
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Car Details</h1>
      <p>
        My {car.brand}. It is a {car.color} {car.model} from {car.year}.
      </p>
      
      <button onClick={updateCar} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Convert Details
      </button>
    </div>
  );
};

export default Task4_hooks;
