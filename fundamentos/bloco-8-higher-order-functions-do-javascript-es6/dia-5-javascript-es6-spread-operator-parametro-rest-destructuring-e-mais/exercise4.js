const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// Imprime no console apenas australianos nascidos antes de 2000.

const filterPeople = (people) => people.map(
  ({ name, bornIn, nationality }) => {
    if (nationality === 'Australian' && bornIn < 2000) return console.log(name, bornIn, nationality);
  }
);

filterPeople(people);