import * as TSXHelpers from "./helpers";
describe("Add()", () => {
  it("With positive numbers", () => {
    expect(TSXHelpers.Add(1, 2)).toBe(3);
  });

  it("With negative numbers", () => {
    expect(TSXHelpers.Add(-1, -2)).toBe(-3);
  });

  it("With decimal", () => {
    expect(TSXHelpers.Add(2.2, 3.2)).toBe(5.4);
  });
});
