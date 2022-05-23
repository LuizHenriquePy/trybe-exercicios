function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();


// Add days
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function addDays () {
  const daysList = document.getElementById('days');
  for (let item of dezDaysList) {
    let day = document.createElement('li');
    let listC = day.classList;
    listC.add('day');
    day.innerText = item;

    if (item === 24 || item === 25 || item === 31) {
      listC.add('holiday');
    } else if (item === 4 || item === 11 || item === 18 || item === 25) {
      listC.add('friday')
    };

    daysList.appendChild(day);

  };
};

addDays();


// Add button "Feriados"
function addHolidayButton (text) {
  const element = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  button.textContent = text;
  button.addEventListener('click', changeColorOfHolidays);
  element.appendChild(button);
};

function changeColorOfHolidays (event) {
  const holidays = document.querySelectorAll('.holiday');
  let color = '';

  if (holidays[0].style.background.indexOf('green', 0) !== -1) {
    color = 'rgb(238,238,238)';
  } else {
    color = 'green';
  };

  for (let item of holidays) {
    item.style.background = color;
  };
};

addHolidayButton('Feriados');


// Add friday button
function addFridayButton (text) {
  const element = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = 'btn-friday';
  button.textContent = text;
  element.appendChild(button);
};

addFridayButton('Sexta-feira');