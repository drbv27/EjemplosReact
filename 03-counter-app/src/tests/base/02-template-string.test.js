import "@testing-library/jest-dom";

import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("getSaludo debe de retornar hola y un nombre", () => {
    const nombre = "Diego";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });
  test("Debe retornar Hola Goku si no hay nombre", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Goku");
  });
});
