const q1 = {
  category: "HTML basics",
  question: "What does HTML stand for?",
  choices: ["HyperText Markup Language",
  "HyperLink Markup Language",
  "HyperText Markup Link"],
  answer: "HyperText Markup Language"
};

const q2 = {
  category: "CSS basics",
  question: "What does CSS stand for?",
  choices: ["Creative Style Sheets", "Cascading Style Sheets", "Cascading Sheet Selection"],
  answer: "Cascading Style Sheets"
};

const q3 = {
  category: "JavaScript basics",
  question: "How do you call the function which allows you to display data on the console?",
  choices: ["log.console()", "console.out()", "console.log()"],
  answer: "console.log()"
};

const q4 = {
  category: "HTML and CSS",
  question: "Which tag is used to link a stylesheet to your HTML document?",
  choices: ["<link>", "<rel>", "<stylesheet>"],
  answer: "<link>"
};

const q5 = {
  category: "HTML and CSS",
  question: "What do you use to ensure a CSS attribute value overrides all other styles?",
  choices: ["!override", "!critical", "!important"],
  answer: "!important"
};

const questions = [q1, q2, q3, q4, q5];

const getRandomQuestion = quiz => quiz[Math.round(Math.random() * quiz.length)];

const getRandomComputerChoice = choices => choices[Math.round(Math.random() * choices.length)];

function getResults (question, choice) {
  const ans = question["answer"];
  if (choice === ans) {
    return "The computer's choice is correct!";
  }
  return `The computer's choice is wrong. The correct answer is: ${ans}`;
}