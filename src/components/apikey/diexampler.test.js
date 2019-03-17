import React from "react";
import ReactDOM from "react-dom";
import { ApiKey } from "./diexample";
import { act } from "react-dom/test-utils";
// Ensures that the component renders
// shallow/exists are part of enzyme
// .toBe is from jest

// Tomorrow look into https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme

describe("Example of Dependency Injection", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<ApiKey />, container);
  });

  describe("Calculator with React test utils", () => {
    xit("change input values", () => {
      // expect(input0.value).toEqual("1");
      // expect(input1.value).toEqual("1");
    });
  });
});
