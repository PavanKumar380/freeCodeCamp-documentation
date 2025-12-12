function getAverage (arr) {
  let avg = 0;
  for (let ar of arr) {
    avg += ar;
  }
  return avg/arr.length;
}

function getGrade (score) {
  if (score < 60) {
    return "F";
  } else if (score < 70) {
    return "D";
  } else if (score < 80) {
    return "C";
  } else if (score < 90) {
    return "B";
  } else if (score < 100) {
    return "A";
  }
  return "A+";
}

const hasPassingGrade = score => getGrade(score) !== "F";

const studentMsg = (arr, score) => `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You ${hasPassingGrade(score) ? "passed" : "failed"} the course.`;