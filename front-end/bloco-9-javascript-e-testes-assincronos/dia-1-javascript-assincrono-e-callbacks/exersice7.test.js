const uppercase = require('./exercise7');

describe('Testa função uppercase',() => {
  it('uppercase("aBc", callback) retorna "ABC"', (done) => {
    uppercase('aBc', result => {
      try {
        expect(result).toEqual('ABC');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
})