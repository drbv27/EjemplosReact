import React from "react";

const PrimeraApp = ({ saludo }) => {
  if (!saludo) {
    throw new Error("El saludo es necesario.");
  }
  return (
    <>
      <h1>{saludo}</h1>
      {/* <pre>{JSON.stringify(persona, null, 3)}</pre> */}
      <p>Mi primera aplicacion</p>
    </>
  );
};

export default PrimeraApp;
