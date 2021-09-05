//import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

describe("Pruebas en <PrimeraApp/>", () => {
  // test("Debe de mostrar el mensaje Hola, soy Gokú", () => {
  //   const saludo = "Hola, soy Gokú";
  //   //const wrapper = render(<PrimeraApp saludo={saludo} />);
  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //   expect(getByText(saludo)).toBeInTheDocument();
  // });
  test("Debe de mostrar <PrimeraApp/> corectamente", () => {
    const saludo = "Hola, soy Gokú";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });
  test("debe de mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola, soy Gokú";
    const subTitulo = "Soy un subtitulo";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subTitulo} />
    );
    const textoParrafo = wrapper.find("p").text();
    //console.log(textoParrafo);

    expect(textoParrafo).toBe(subTitulo);
  });
});
