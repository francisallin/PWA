const ShowNavbar = document.querySelector(".vertical-navbar");
function ShowMenu() {
    ShowNavbar.classList.toggle("vertical-navbar");
}
/*
reference: https://www.sitepoint.com/simple-javascript-quiz/
*/
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: "<br>1. Which of the following is symptom of dry eye?",
    answers: {
      a: "Burning sensation",
      b: "Sense of dryness",
      c: "Fluctuating visual acuity",
      d: "All of the above"
    },
    correctAnswer: "d"
  },
  {
    question: "<br>2. Which of the following is the characteristic of bacterial anterior blepharitis?",
    answers: {
      a: "Collarettes in lashes bases",
      b: "Greasy lashes",
      c: "Dry yellow scales on lashes",
      d: "Corneal haze"
    },
    correctAnswer: "c"
  },
  {
    question: "<br>3. Which of the following is associated with seborrhoeic anterior blepharitis?",
    answers: {
      a: "Ankylosing spondylytis",
      b: "Rosacea",
      c: "Lyme disease",
      d: "Hay fever"
    },
    correctAnswer: "b"
  },
  {
    question: "<br>4. As an optometrist in Hong Kong, which of the following can you suggest your patients to administer at home legally?",
    answers: {
      a: "Oxybuprocaine 0.5% gtt",
      b: "Atropine 0.01% gtt",
      c: "Cyclosporin A 0.05% gtt",
      d: "Olopatadine 0.2% gtt"
    },
    correctAnswer: "d"
  },
  {
    question: "<br>5. If your patient has cells and flares in the anterior chamber, how do they move usually?",
    answers: {
      a: "They sink to the inferior part of the anterior chamber, and float upwards when the eye moves",
      b: "They float upwards if they are close to the lens, and sinks if they are close to cornea",
      c: "They suspense in the anterior chamber with no specific pattern",
      d: "They move towards the nearest magnetic object due to their iron content"
    },
    correctAnswer: "b"
  },
  {
    question: "<br>6. For OSDI, which of the following score is considered as normal patient?",
    answers: {
      a: "Score 12 or below",
      b: "Score 22 or below",
      c: "Score 32 or below",
      d: "Score 42 or below"
    },
    correctAnswer: "a"
  },
  {
    question: "<br>7. What is a possible cause of this finding? <br><img src=\"https://www.reviewofoptometry.com/CMSImagesContent/2022/11/RO/063_ro1122_F4_Koetting.jpg\" alt=\"lashes with collerettes\" width=500> <br> <h5>source: www.reviewofoptometry.com/CMSImagesContent/2022/11/RO/063_ro1122_F4_Koetting.jpg</h5>",
    answers: {
      a: "Chalazion",
      b: "Demodex infestation",
      c: "Trachoma",
      d: "Viral conjunctivitis"
    },
    correctAnswer: "b"
  },
  {
    question: "<br>8. Upon the finding in the previous question, what is a potential treatment of the condition?",
    answers: {
      a: "Doxycycline 50mg po qid for 2 weeks",
      b: "Artificial tears qid or more frequent",
      c: "Tea tree oil 50% lid scrub weekly + tea tree 5% ung qd",
      d: "No treatment required. It goes away by itself."
    },
    correctAnswer: "c"
  },
  {
    question: "<br>9. What is/are the cause(s) of CLARE (Contact Lens-induced Acute Red Eye)? <br> i. Overwear of contact lens <br> ii. Poor contact lens fit <br> iii. Corneal abrasion",
    answers: {
      a: "i only",
      b: "ii only ",
      c: "i & ii only",
      d: "i & iii only"
    },
    correctAnswer: "c"
  },
  {
    question: "<br>10. What is a proper way to treat pepper spray-induced injury?",
    answers: {
      a: "Saline irrigation (nasal to temporal)",
      b: "Tobradex + acetaminophen qid fo 1 week",
      c: "Artificial tears and cold compress",
      d: "All of the above"
    },
    correctAnswer: "d"
  },
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


