import React from 'react';

const Famous = ({ cityDetails }) => {
  return (
    <div>
      <h2>{cityDetails.prefectureName} - {cityDetails.name}</h2>
      <h3>Description:</h3>
      <p>{cityDetails.description}</p>
      <h3>Additional Info:</h3>
      <p>{cityDetails.additionalInfo}</p>
    </div>
  );
};

export default Famous;
