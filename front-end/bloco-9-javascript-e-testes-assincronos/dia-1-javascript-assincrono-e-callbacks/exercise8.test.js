const getPokemonDetails = require('./exercise8');

describe('Testa função getPokemonDetails', () => {
  it('getPokemonDetails("Bulbasaur", callback) retorna mensagem sobre o Bulbasaur', (done) => {
    getPokemonDetails(element => element.name ==='Bulbasaur', (res, message) => {
      try {
        expect(message).toEqual('Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
  it('getPokemonDetails("Charmander", callback) retorna mensagem sobre o Charmander', (done) => {
    getPokemonDetails(element => element.name ==='Charmander', (res, message) => {
      try {
        expect(message).toEqual('Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
  it('getPokemonDetails("Squirtle", callback) retorna mensagem sobre o Squirtle', (done) => {
    getPokemonDetails(element => element.name ==='Squirtle', (res, message) => {
      try {
        expect(message).toEqual('Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
})