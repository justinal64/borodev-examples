import * as Helpers from "./helper"; // talk about why I imported it this way
import {
  ArrayOfStrings,
  FourZeroFourlUrl,
  NumToAdd,
  NumToDiv,
  NumToMul,
  NumToSub
} from "../__mock__/mockdata";
describe("Testing Calculator's logic", () => {
  describe("Add()", () => {
    it("With positive numbers", () => {
      expect(Helpers.Add(1, 2)).toBe(3);
    });

    it("With negative numbers", () => {
      expect(Helpers.Add(-1, -2)).toBe(-3);
    });

    it("With strings", () => {
      expect(Helpers.Add("1", "2")).toBe(3);
    });

    // Neither value is a numeric value
    it("With boolean", () => {
      expect(Helpers.Add(false, true)).toBe(0);
    });

    it("With decimal", () => {
      expect(Helpers.Add(2.2, 3.2)).toBe(5.4);
    });

    it("With empty strings", () => {
      expect(Helpers.Add("", "")).toBe(0);
    });
  });

  describe("Subtract()", () => {
    it("With positive numbers", () => {
      expect(Helpers.Subtract(1, 2)).toBe(-1);
    });

    it("With negative numbers", () => {
      expect(Helpers.Subtract(-1, -2)).toBe(1);
    });

    // Talk about this
    it("With strings", () => {
      expect(Helpers.Subtract("1", "2")).toBe(-1);
    });

    // Because false = 0 and True = 1
    it("With boolean", () => {
      expect(Helpers.Subtract(false, true)).toBe(-1);
    });

    it("With decimal", () => {
      expect(Helpers.Subtract(2.2, 3.2)).toBe(-1);
    });

    // Talk about this
    it("With empty strings", () => {
      expect(Helpers.Subtract("", "")).toBe(0);
    });
  });

  describe("Multiply()", () => {
    it("With positive numbers", () => {
      expect(Helpers.Multiply(1, 2)).toBe(2);
    });

    it("With negative numbers", () => {
      expect(Helpers.Multiply(-1, -2)).toBe(2);
    });

    // Talk about this
    it("With strings", () => {
      expect(Helpers.Multiply("1", "2")).toBe(2);
    });

    // Because false = 0 and True = 1
    it("With boolean", () => {
      expect(Helpers.Multiply(false, true)).toBe(0);
    });

    it("With decimal", () => {
      expect(Helpers.Multiply(2.2, 3.3)).toBe(7.26);
    });

    // Talk about this
    it("With empty strings", () => {
      expect(Helpers.Multiply("", "")).toBe(0);
    });
  });

  describe("Divide()", () => {
    it("With positive numbers", () => {
      expect(Helpers.Divide(1, 2)).toBe(0.5);
    });

    it("With negative numbers", () => {
      expect(Helpers.Divide(-1, -2)).toBe(0.5);
    });

    // Talk about this
    it("With strings", () => {
      expect(Helpers.Divide("1", "2")).toBe(0.5);
    });

    // Because false = 0 and True = 1
    it("With boolean", () => {
      expect(Helpers.Divide(false, true)).toBe(0);
    });

    it("With decimal", () => {
      expect(Helpers.Divide(2.2, 3.2)).toBe(0.6875);
    });

    // Talk about this
    it("With empty strings", () => {
      expect(Helpers.Divide("", "")).toBeNaN();
    });
  });

  describe("IsNumber()", () => {
    it("With positive numbers", () => {
      expect(Helpers.IsNumber(1, 2)).toBe(true);
    });

    it("With negative numbers", () => {
      expect(Helpers.IsNumber(-1, -2)).toBe(true);
    });

    // Talk about this
    it("With strings", () => {
      expect(Helpers.IsNumber("1", "2")).toBe(true);
    });

    // Because false = 0 and True = 1
    it("With boolean", () => {
      expect(Helpers.IsNumber(false, true)).toBe(true);
    });

    it("With decimal", () => {
      expect(Helpers.IsNumber(2.2, 3.2)).toBe(true);
    });

    // Talk about this
    it("With empty strings", () => {
      expect(Helpers.IsNumber("", "")).toBe(true);
    });
  });

  describe("GetData()", () => {
    let spyOnGetData = jest.fn();

    //TODO: Talk about these after I explain what is going on below
    beforeEach(() => {
      spyOnGetData = jest.spyOn(Helpers, "GetData");
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("launch_year is 2019", async () => {
      // TODO: These do the exact same thing
      // return Helpers.GetData().then(data => {
      //   expect(data["launch_year"]).toBe("2019");
      // });

      const result = await Helpers.GetData();
      expect(result["launch_year"]).toBe("2019");
    });

    it("spyOn works on async functions", async () => {
      // spyOnGetData is spying on Helpers.GetData()
      await Helpers.GetData();
      expect(spyOnGetData).toBeCalledTimes(1);
    });

    // This is a cool trick to intentionally fail the test
    it("GetData() throws an error", async () => {
      const expectedResult = "I think the url is wrong...";
      const result = await Helpers.GetData(FourZeroFourlUrl);
      expect(result).toBe(expectedResult);
    });

    // TODO: The data coming back from my api changes, what do I do?
    it("spyOn returns mock data", async () => {
      spyOnGetData.mockResolvedValue(21);
      let result = await Helpers.GetData();
      //   // TODO: talk about why this check is here.... hint. look at afterEach;
      expect(spyOnGetData).toBeCalledTimes(1);
      expect(result).toBe(21);
    });
  });

  describe("Concat()", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("Concat('a','b')", () => {
      let result = Helpers.Concat("a", "b");
      expect(result).toBe("ab");
    });

    it("using data in mock data file", () => {
      let result = Helpers.Concat(ArrayOfStrings[0], ArrayOfStrings[1]);
      expect(result).toBe("Thisis");
    });
  });

  describe("NeverDoThis()", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("Testing 1 value in an array", () => {
      let result = Helpers.NeverDoThis(NumToAdd, NumToSub, NumToDiv, NumToMul);
      expect(result[0]).toBe(3);
    });

    it("Compare all items in array", () => {
      let result = Helpers.NeverDoThis(NumToAdd, NumToSub, NumToDiv, NumToMul);
      // TODO: explain why this doesn't work.
      // expect(result).toBe([3, -1, 0.875, 30]);
      expect(result).toEqual([3, -1, 0.875, 30]);
    });
  });

  describe("RandomApiKey()", () => {
    let spyOnRandomApiKey = jest.fn();

    //TODO: Talk about these after I explain what is going on below
    beforeEach(() => {
      spyOnRandomApiKey = jest.spyOn(Helpers, "RandomApiKey");
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("Number within a certain range", () => {
      let result = Helpers.RandomApiKey(100);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(100);
    });

    it("Mocking the return value", () => {
      spyOnRandomApiKey.mockReturnValue(21);
      let result = Helpers.RandomApiKey(100);
      expect(result).toBe(21);
    });
  });
});
