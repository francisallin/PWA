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
    question: "<br>1. Which of the following is not a sign of hypertensive retinopathy?",
    answers: {
      a: "Cotton wool spots",
      b: "AV nicking",
      c: "Flame haemorrhage",
      d: "Lacquers crack"
    },
    correctAnswer: "d"
  },
  {
    question: "<br>2. Which of the following is a criteria in the 4-2-1 rule classification of severe non-proliverative diabetic retinopathy (DMR)?",
    answers: {
      a: "Diffuse intraretinal hemorrhages and microaneurysms in four quadrants",
      b: "Venous beading in two or more quadrants",
      c: "IRMA in one or more quadrants",
      d: "All of the above"
    },
    correctAnswer: "d"
  },
  {
    question: "<br>3. Which of the following is not a criteria in the classification of age-related macular degeneration (AMD)?",
    answers: {
      a: "Early: Presence of numerous small (<63 microns) or intermediate (63-125 microns) drusen",
      b: "Intermediate: Extensive drusen of small or intermediate size, or drusen of large size (≥125 microns) in all 4 quadrants of macula",
      c: "Advanced: Presence of geographic atrophy",
      d: "Advanced: Presence of choroidal neovascular membrane"
    },
    correctAnswer: "b"
  },
  {
    question: "<br>4. A patient with macular diseases says she saw distorted lines when she looked at her Amsler chart last week. What is the technical term of the phenomenon?",
    answers: {
      a: "metamorphism",
      b: "metamorphoptism",
      c: "metamorphopsia",
      d: "metamorphosis"
    },
    correctAnswer: "c"
  },
  {
    question: "<br>5. How big is one disc diameter approxiamtely?",
    answers: {
      a: "0.5 mm",
      b: "1.5 mm",
      c: "2.5 mm",
      d: "3.5 mm"
    },
    correctAnswer: "b"
  },
  {
    question: "<br>6. Which of the following has the highest risk of causing retinal detachment?",
    answers: {
      a: "Horseshoe retinal tear",
      b: "Cystic tractional tuft",
      c: "White without pressure",
      d: "Lattice degeneration"
    },
    correctAnswer: "a"
  },
  {
    question: "<br>7. For optometrists in HK, which of the following is an unacceptable follow up monitoring schedule?",
    answers: {
      a: "Early asymptomatic dry AMD: every 12-24 months",
      b: "Moderate non-proliferative DMR: every 6 months ",
      c: "Proliferative DMR (untreated): every 6-12 months",
      d: "Small mid-peripheral retinal hole: every 6-12 months"
    },
    correctAnswer: "c"
  },
  {
    question: "<br>8. If you can only diagnose with the following picture, what is the most probable diagnosis? <br> <img src=\"https://assets.bmctoday.net/retinatoday/images/articles/2018-04/0418_RT_CF2_Fig1.png\" alt=\"sectorial flame haemorrhage\" width=500> <h5>source: https://assets.bmctoday.net/retinatoday/images/articles/2018-04/0418_RT_CF2_Fig1.png",
    answers: {
      a: "Purtscher retinopathy",
      b: "Branch retinal vein occlusion",
      c: "Branch retinal artery occlusion",
      d: "Proliferative diabetic retinopathy"
    },
    correctAnswer: "b"
  },
  {
    question: "<br>9. What is the most probable diagnosis based on this OCT scan of macula? <br> <img src=\"https://www.aao.org/image.axd?id=72b665d2-ade4-41b5-936d-809831823678&t=635859497224800000\" alt=\"OCT image\" width=300> <h5>source: https://www.aao.org/image.axd?id=72b665d2-ade4-41b5-936d-809831823678&t=635859497224800000</h5>",
    answers: {
      a: "Central serous retinopathy",
      b: "Cystic macular edema",
      c: "Foveoschisis",
      d: "Choroidal neovascular membrane"
    },
    correctAnswer: "a"
  },
  {
    question: "<br>10. Which of the following is/are symptoms of papilloedema? <br> i. Headache upon waking <br> ii. Feeling of pressure near orbit <br> iii. Tinnitus",
    answers: {
      a: "i only",
      b: "i & ii only",
      c: "i & iii only",
      d: "i, ii & iii"
    },
    correctAnswer: "c"
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


