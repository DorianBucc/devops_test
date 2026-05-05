const { testFunction } = require('../index.js');

test("hello_world", () => {
  expect(true).toBe(true);
});

test("functionTest", () => {
  expect(testFunction("E")).toBe("EE");
});