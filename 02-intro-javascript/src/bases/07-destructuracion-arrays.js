const personajes = ["Goku", "Vegeta", "Trunks"];
/* console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]); */

const [, personaje2] = personajes;
console.log(personaje2);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Homework
//1.la primera posicion se llamara nombre
//2.se llamra setNombre
const usaState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre, setNombre] = usaState("Goku");
console.log(nombre);
setNombre();
