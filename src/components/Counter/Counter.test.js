import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Counter from "./Counter";
import { mount } from "enzyme";

// describe("Counter with React test utils", () => {
//   const container = document.createElement("div");
//   document.body.appendChild(container);
//   act(() => {
//     ReactDOM.render(<Counter />, container);
//   });
//   const buttons = container.querySelectorAll("button");
//   const spans = container.querySelectorAll("span");
//   const [increaseButton, decreaseButton] = buttons;
//   const [label, count] = spans;

//   it("renders and has initial count", () => {
//     expect(label.textContent).toEqual("Count");
//     expect(count.textContent).toEqual("0");
//   });

//   it("increases the count", () => {
//     act(() => {
//       increaseButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//     });
//     expect(count.textContent).toEqual("1");
//   });

//   it("decreases the count", () => {
//     act(() => {
//       decreaseButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//     });
//     expect(count.textContent).toEqual("0");
//   });
// });

describe("Counter", () => {
  describe("increaseCount", () => {
    // Arrange
    let wrapper;
    let instance;

    //TODO: instance doesn't currently work in a function component.
    // https://github.com/airbnb/enzyme/issues/1232
    beforeEach(() => {
      wrapper = mount(<Counter />);
      instance = wrapper.instance();
    });

    xit("calling increaseCount updates counter", () => {
      // Arrange
      // instance.increaseCount();
      // const instance = wrapper.instance();
      // console.log("instance: ", instance.debug());
      const counterSpan = wrapper.find("span").at(1);
      wrapper.increaseCount;

      console.log("wrapper: ", wrapper.debug());
      // if you log span you will get ReactWrapper{}
      // console.log(span.debug());

      // Assert
      expect(counterSpan.text()).toBe("12132321");
    });
  });

  describe("counter", () => {
    // Arrange
    let wrapper;
    let instance;

    // TODO: What is beforeEach
    beforeEach(() => {
      wrapper = mount(<Counter />);
      instance = wrapper.instance();
    });

    it("what is state when the component loads", () => {
      // Act
      // TODO: what is at(1)
      const counterSpan = wrapper.find("span").at(1);
      // if you log span you will get ReactWrapper{}
      // console.log(span.debug());

      // Assert
      expect(counterSpan.text()).toBe("0");
    });

    it("what is state after + button is clicked", () => {
      // Arrange
      const counterSpan = wrapper.find("span").at(1);
      const addButton = wrapper.find("button").at(0);
      // Act
      addButton.simulate("click");

      // Assert
      expect(counterSpan.text()).toBe("1");
    });

    it("what is state after - button is clicked", () => {
      // Arrange
      const counterSpan = wrapper.find("span").at(1);
      const subtractButton = wrapper.find("button").at(1);
      // Act
      subtractButton.simulate("click");

      // Assert
      expect(counterSpan.text()).toBe("-1");
    });

    it("setState({})", () => {
      // Arrange
      const counterSpan = wrapper.find("span").at(1);
      // Act
      // TODO: you can't use setState on a function component....
      // TODO: RESEARCH!!!!
      // wrapper.setState({ Counter: 3 });

      // Assert
      // TODO: What is counterSpan.text()
      expect(counterSpan.text()).toBe("0");
    });
  });
});
