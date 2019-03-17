import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./header";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header name="test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Should render Header with name tester", () => {
  const component = shallow(<Header name="tester" />);
  expect(component).toMatchSnapshot();
});

// write test that test the values being passed in!!!!!!
