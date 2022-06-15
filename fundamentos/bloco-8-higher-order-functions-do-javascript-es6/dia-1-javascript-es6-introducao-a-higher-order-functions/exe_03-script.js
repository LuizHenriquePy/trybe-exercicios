const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const isValidAnswer = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  } else if (studentAnswers === 'N.A') {
    return 0;
  } else {
    return -1;
  }
};

const studentScore = (rightAnswers, studentAnswers, isValid) => {
  let score = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    score += isValid(rightAnswers[index], studentAnswers[index]);
  }
  return score;
};

console.log(studentScore(RIGHT_ANSWERS, STUDENT_ANSWERS, isValidAnswer));
