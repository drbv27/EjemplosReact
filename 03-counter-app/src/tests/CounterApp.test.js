import CounterApp from "../CounterApp";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

describe("Debe de mostrar <CounterApp /> correctamente (hacer match con el snapshot) y sus valores por defecto.", () => {
  let wrapper;
  wrapper = shallow(<CounterApp />); //this is a bad parctice, but do it for maintain the intellisense

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe de mostrar <PrimeraApp/> corectamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);

    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("100");
  });

  test("Debe de incrementar con el botón de +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("1");
  });
  test("Debe de decrementar con el botón de -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("-1");
  });
  test("Debe de colocar el valor por defecto de los props", () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("105");
  });
});
