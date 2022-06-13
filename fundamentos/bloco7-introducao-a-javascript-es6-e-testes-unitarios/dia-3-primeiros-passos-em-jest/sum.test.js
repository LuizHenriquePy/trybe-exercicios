const sum = require('./sum.js');

describe("Testa função sum", () => {
  it("sum(4,5) retorna 9", () => {
    expect(sum(4,5)).toBe(9);
  });
});