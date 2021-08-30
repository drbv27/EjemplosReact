import React from "react";

//Functional Components

const PrimeraApp = ({ saludo = "Hola Mundo" }) => {
  //const saludo = "Hola Mundo";
  //const numero = 123;
  //const arreglo = [1, 2, 3, 4, 5];
  // const persona = {
  //   nombre: "Diego",
  //   edad: 43,
  //   ocupacion: "desarrollador",
  // };
  //console.log(props);
  return (
    <>
      {/* <h1>{arreglo}</h1> */}
      {/* <pre>{JSON.stringify(persona, null, 3)}</pre> */}
      <h1>{saludo}</h1>
      <p>Mi primera aplicacion</p>
    </>
  );
};

export default PrimeraApp;
