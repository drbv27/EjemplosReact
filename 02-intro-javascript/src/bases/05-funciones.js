//Funciones en JS
const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

console.log(saludar("Diego"));

const saludar2 = (nombre) => `Hola, ${nombre}`;

console.log(saludar2("Ricardo"));

const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

const user = getUser();
console.log(user);

//Homework
//1.tRANSFORMAR EN FUNCION FLECHA
//2.Tiene que retornar un objeto implicito
//3.probar
function getUsuarioActivo(nombre) {
  return {
    uid: "ABC567",
    username: nombre,
  };
}
const usuarioActivo = getUsuarioActivo("Diego");
console.log(usuarioActivo);

const getUsuarioActivo2 = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});
console.log(getUsuarioActivo2("Sofia"));
