const myFizzBuzz = require('./myFizzBuzz.js');

describe('Testa função myFizzBuzz', () => {
  it('myFizzBuzz(15) retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });
  it('myFizzBuzz(9) retorna fizz', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  });
  it('myFizzBuzz(25) retorna buzz', () => {
    expect(myFizzBuzz(25)).toEqual('buzz');
  });
  it('myFizzBuzz(4) retorna 4', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });
  it('myFizzBuzz("banana") retorna false', () => {
    expect(myFizzBuzz('banana')).toBeFalsy();
  });
});