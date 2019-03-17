import React from "react";
import ReactDOM from "react-dom";
import { Calculator } from "./calculator";
import { mount, shallow, render } from "enzyme";
import { act } from "react-dom/test-utils";

// Ensures that the component renders
// shallow/exists are part of enzyme
// .toBe is from jest

// Tomorrow look into https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme

describe("Calculator with React test utils", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<Calculator />, container);
  });

  const inputs = container.querySelectorAll("input");
  const buttons = container.querySelectorAll("button");
  const result = container.querySelector("div.result p span");

  const [input0, input1] = inputs;
  const [add] = buttons;

  it("Calculator Component", () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Should render complete html", () => {
    expect(
      render(<Calculator />)
        .find(".result")
        .text()
    ).toBe("0");
  });

  it("change input values", () => {
    input0.value = 1;
    input1.value = 1;

    expect(input0.value).toEqual("1");
    expect(input1.value).toEqual("1");
  });
});

describe("Counter with React test utils", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  act(() => {
    ReactDOM.render(<Calculator />, container);
  });
  const wrapper = shallow(<Calculator />);

  const add = container.querySelector("button");
  const result = document.querySelector(".result");
  const inputs = document.querySelectorAll("input");
  const [input0, input1] = inputs;
  const mockFn = jest.fn();
  it("renders and has initial count", () => {
    // expect(label.textContent).toEqual("Count");
    expect(result.textContent).toEqual("0");
  });

  xit("increases the count", () => {
    const passwordInput = wrapper.find("input").at(1);
    passwordInput.instance().value = "y";
    passwordInput.simulate("change");

    expect(passwordInput.value).toBe("y");
    // component.find('form').first().simulate('submit');
  });
});
