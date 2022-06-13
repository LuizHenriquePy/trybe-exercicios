const sum = require('./sum.js');

describe('Testa função sum', () => {
  it('sum(4,5) retorna 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  it('sum(0,0) retorna 0', () => {
    expect(sum(0,0)).toBe(0);
  });
  it('sum(4,"5") retorna erro', () => {
    expect(() => sum(4,"5")).toThrow(Error);
  });
  it('sum(4,"5") retorna erro com mensagem "parameters must be numbers"', () => {
    expect(() => sum(4,"5")).toThrow('parameters must be numbers');
  });
});