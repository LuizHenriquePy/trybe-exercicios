const sum = (...numbers) => numbers.reduce((cont, number) => cont + number, 0);

console.log(sum(1,-2));