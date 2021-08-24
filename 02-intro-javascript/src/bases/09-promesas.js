import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     //console.log(heroe);
//     //Tarea
//     resolve(heroe); //podria llamarse de cualquier manera por ejemplo p1
//     //reject("No se pudo encontrar el heroe");
//     /* console.log("2 segundos despues"); */
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("heroe", heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe); //podria llamarse de cualquier manera por ejemplo p1
      } else {
        reject("No se pudo encontrar el heroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(3)
  // .then((heroe) => console.log("Heroe", heroe))
  // .catch((err) => console.warn(err));
  .then(console.log)
  .catch(console.warn);
