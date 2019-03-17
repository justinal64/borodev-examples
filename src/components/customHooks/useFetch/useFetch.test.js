// import React from "react";
// import ReactDOM from "react-dom";
// import { act } from "react-dom/test-utils";
import useFetch from "./useFetch";
// import { mount } from "enzyme";

// describe("useFetch", () => {
//   describe("getData", () => {
//     // Arrange
//     // let wrapper;
//     // let instance;

//     // beforeEach(() => {
//     //   wrapper = mount(<useFetch />);
//     //   instance = wrapper.instance();
//     // });

//     it("calling increaseCount updates counter", () => {
//       // Arrange
//       const test = useFetch();
//     });
//   });

//   // describe("counter", () => {
//   //   // Arrange
//   //   let wrapper;
//   //   let instance;

//   //   // TODO: What is beforeEach
//   //   beforeEach(() => {
//   //     wrapper = mount(<useFetch />);
//   //     instance = wrapper.instance();
//   //   });

//   //   it("what is state when the component loads", () => {
//   //     // Act
//   //     // TODO: what is at(1)
//   //     const counterSpan = wrapper.find("span").at(1);
//   //     // if you log span you will get ReactWrapper{}
//   //     // console.log(span.debug());

//   //     // Assert
//   //     expect(counterSpan.text()).toBe("0");
//   //   });

//   //   it("what is state after + button is clicked", () => {
//   //     // Arrange
//   //     const counterSpan = wrapper.find("span").at(1);
//   //     const addButton = wrapper.find("button").at(0);
//   //     // Act
//   //     addButton.simulate("click");

//   //     // Assert
//   //     expect(counterSpan.text()).toBe("1");
//   //   });

//   //   it("what is state after - button is clicked", () => {
//   //     // Arrange
//   //     const counterSpan = wrapper.find("span").at(1);
//   //     const subtractButton = wrapper.find("button").at(1);
//   //     // Act
//   //     subtractButton.simulate("click");

//   //     // Assert
//   //     expect(counterSpan.text()).toBe("-1");
//   //   });

//   //   it("setState({})", () => {
//   //     // Arrange
//   //     const counterSpan = wrapper.find("span").at(1);
//   //     // Act
//   //     // TODO: you can't use setState on a function component....
//   //     // TODO: RESEARCH!!!!
//   //     // wrapper.setState({ Counter: 3 });

//   //     // Assert
//   //     // TODO: What is span.text()
//   //     expect(counterSpan.text()).toBe("0");
//   // });
//   // });
// });

import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";
import { useFetchPres } from "./useFetchPres";

describe("<useFetch />", () => {
  xit("doesn't explode with a workaround", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<useFetchPres show closeFn={jest.fn()} t={key => key} />);
    const output = renderer.getRenderOutput();
    const wrapper = shallow(<div>{output}</div>); // Have to wrap it, otherwise you get: TypeError: ShallowWrapper can only wrap valid elements
    console.log("wrapper: ", wrapper.debug());
    expect(wrapper).toMatchSnapshot();
  });
});
