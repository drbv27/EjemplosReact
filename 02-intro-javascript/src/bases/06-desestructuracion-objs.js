//Desestructuracion o asignacion desestructurante
const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};
const { nombre, edad, clave } = persona;

/* console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave); */
console.log(nombre);
console.log(edad);
console.log(clave);

const Contextual = ({ clave, nombre, edad, rango = "Vengador" }) => {
  /* console.log(nombre, edad, rango); */
  return {
    nombreClave: clave,
    anios: edad,
  };
};

const avenger = Contextual(persona);
console.log(avenger);
