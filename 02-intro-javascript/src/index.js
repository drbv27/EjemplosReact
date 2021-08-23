/* import { heroes } from "./data/heroes"; */
/* import { heroes } from "./data/heroes"; */

import { heroes } from "./data/heroes";

/* const getHeroeById = (id) => {
  return heroes.find((heroe) => {
    if (heroe.id === id) {
      return true;
    } else {
      return false;
    }
  });
}; */
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById(2));

const getHeroesByOwner = (owner) =>
  heroes.filter((heroes) => heroes.owner === owner);

console.log(getHeroesByOwner("DC"));
