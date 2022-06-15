
const registerEmployee = (fullName) => {
  const name = fullName.split(' ');
  return {fullName: fullName, Email: `${name[0]}_${name[1]}@trybe.com`}
};


const newEmployees = (register) => {
  const employees = {
    id1: register('Pedro Guerra'),
    id2: register('Luiza Drumond'),
    id3: register('Carla Paiva'),
  }
  console.log(employees);
};

newEmployees(registerEmployee);