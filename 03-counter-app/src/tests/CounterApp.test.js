import CounterApp from "../CounterApp";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

describe("Debe de mostrar <CounterApp /> correctamente (hacer match con el snapshot) y sus valores por defecto.", () => {
  test("Debe de mostrar <PrimeraApp/> corectamente", () => {
    const wrapper = shallow(<CounterApp />);

    expect(wrapper).toMatchSnapshot();
  });
  test("debe de mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);

    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("100");
  });
});
