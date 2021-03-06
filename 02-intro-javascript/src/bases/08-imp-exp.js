/* import { heroes } from "./data/heroes"; */
/* import { heroes } from "./data/heroes"; */
// import heroes, { owners } from "./data/heroes";
// import { heroes, owners } from "./data/heroes";
import heroes, { owners } from "../data/heroes";

console.log(owners);

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById(2));

const getHeroesByOwner = (owner) =>
  heroes.filter((heroes) => heroes.owner === owner);

console.log(getHeroesByOwner("DC"));

export { getHeroeById };
