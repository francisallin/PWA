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
      question: "<br>1. Which of the following is a risk factor for primary open-angle glaucoma?",
      answers: {
        a: "Age over 60",
        b: "Family history of glaucoma",
        c: "African or Hispanic ancestry",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "<br>2. What is the potential cause of optic nerve damage in glaucoma?",
      answers: {
        a: "Elevated intraocular pressure",
        b: "Inflammation of the optic nerve",
        c: "Vascular occlusion",
        d: "Retinal detachment"
      },
      correctAnswer: "a"
    },
    {
      question: "<br>3. Which type of glaucoma is characterized by sudden and severe eye pain, blurred vision, and a mid-dilated unreactive pupil?",
      answers: {
        a: "Primary open-angle glaucoma",
        b: "Normal-tension glaucoma",
        c: "Acute angle-closure glaucoma",
        d: "Secondary glaucoma"
      },
      correctAnswer: "c"
    },
    {
      question: "<br>4. Which of the following is a common method for measuring intraocular pressure?",
      answers: {
        a: "Visual field testing",
        b: "OCT scan",
        c: "Gonioscopy",
        d: "Tonometry"
      },
      correctAnswer: "d"
    },
    {
      question: "<br>5. What is the goal of glaucoma treatment?",
      answers: {
        a: "To cure the disease",
        b: "To control intraocular pressure",
        c: "To improve visual acuity",
        d: "To eliminate symptoms"
      },
      correctAnswer: "b"
    },
    {
        question: "<br>6. What is order of the structures in the angle when conducting gonioscopy? (From most posterior to most anterior)",
        answers: {
          a: "Ciliary body, scleral spur, pigmented trabecular meshwork, non-pigmented trabecular meshwork, Schwalbe's line",
          b: "Ciliary body, pigmented trabecular meshwork, scleral spur, non-pigmented trabecular meshwork, Schwalbe's line",
          c: "Ciliary body, non-pigmented trabecular meshwork, pigmented trabecular meshwork, scleral spur, Schwalbe's line",
          d: "Ciliary body, pigmented trabecular meshwork, non-pigmented trabecular meshwork, scleral spur, Schwalbe's line"
        },
        correctAnswer: "a"
    },
    {
        question: "<br>7. Which of the following about visual field testing result of glaucoma patient is wrong?",
        answers: {
          a: "False positives means patient is “trigger happy” while false negatives means patient does not respond to the stimulus",
          b: "Pattern deviation is used to identify localized defects",
          c: "Mean deviation reflects the overall reduction in sensitivity, for example, in cataract patients",
          d: "Pattern standard deviation is useful to track progression in early and late stage disease"
        },
        correctAnswer: "d"
    },
    {
        question: "<br>8. What is 24-2C test for?",
        answers: {
          a: "\'C\' stands for \'combine\'. OCT and visual field testing results are combined to run a customized test for patient",
          b: "\'C\' stands for \'central\'. It includes 10 central testing points which are more vulnerable to early glaucomateous defects",
          c: "\'C\' stands for \'cataract\'. It is a test with altered overall sensitivity for cataract patients",
          d: "There is no such test"
        },
        correctAnswer: "b"
    },
    {
        question: "<br>9. What is the typical dosing frequency for prostaglandin analogues used in glaucoma treatment?",
        answers: {
          a: "Once a day",
          b: "Twice a day",
          c: "Three times a day",
          d: "Once a week"
        },
        correctAnswer: "a"
      },
      {
        question: "<br>10. Which of the following is a common side effect of beta-blocker eye drops used in glaucoma treatment?",
        answers: {
          a: "Blurred vision",
          b: "Increased blood pressure",
          c: "Decreased heart rate",
          d: "Dry mouth"
        },
        correctAnswer: "c"
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


