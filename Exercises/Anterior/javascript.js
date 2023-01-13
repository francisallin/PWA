/*
Copied from
https://www.sitepoint.com/simple-javascript-quiz/
*/
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: "What is the characteristic of bacterial anterior blepharitis?",
    answers: {
      a: "Collarettes in lashes bases",
      b: "Greasy lashes",
      c: "Dry yellow scales on lashes"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is associated with seborrhoeic anterior blepharitis?",
    answers: {
      a: "Ankylosing spondylytis",
      b: "Rosacea",
      c: "Lyme disease"
    },
    correctAnswer: "b"
  },
  {
    question: "As an optometrist in Hong Kong, which of the following can you prescribe for patients to administer at home legally?",
    answers: {
      a: "Oxybuprocaine 0.5% gtt",
      b: "Atropine 0.01% gtt",
      c: "Cyclosporin A 0.05% gtt",
      d: "Olopatadine 0.2% gtt"
    },
    correctAnswer: "d"
  }
];

function buildQuiz(){
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
            <br>
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);


