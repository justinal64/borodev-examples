// Let's write a test that updates state
it("state.counter = 2", () => {
  // Arrange
  const wrapper = mount(<Button onClick={() => {}} />);
  const instance = wrapper.instance();
  // Act
  // either way will set the value of counter
  // instance.state.counter = 2;
  wrapper.setState({ counter: 2 });
  // Assert
  expect(instance.state.counter).toEqual(2);
});

// Let's create a snapshot
it("label = test 123", () => {
  // Arrange
  const component = renderer.create(
    <Button onClick={() => {}} label="test 123" />
  );
  // Act/Assert
  expect(component.toJSON()).toMatchSnapshot();
});
