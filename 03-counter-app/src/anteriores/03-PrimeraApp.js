import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo }) => {
  return (
    <>
      <h1>{saludo}</h1>
      {/* <pre>{JSON.stringify(persona, null, 3)}</pre> */}
      <p>Mi primera aplicacion</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
  // otra: PropTypes.number.isRequired,
};
export default PrimeraApp;
