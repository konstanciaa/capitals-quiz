const questionsData = [
    {
        text: "What is the capital of Türkiye?",
        answers: ["Istanbul", "Ankara", "Antalya"],
        correct: "Ankara"
    },
    {
        text: "What is the capital of Argentina?",
        answers: ["Montevideo", "Santiago", "Buenos Aires"],
        correct: "Buenos Aires"
    },
    {
        text: "What is the capital of Ecuador?",
        answers: ["Quito", "Lima", "Santiago"],
        correct: "Quito"
    },
    {
        text: "What is the capital of Armenia?",
        answers: ["Batumi", "Tbilisi", "Yerevan"],
        correct: "Yerevan"
    },
    {
        text: "What is the capital of Nepal?",
        answers: ["Kathmandu", "Phnom Penh", "Kolkata"],
        correct: "Kathmandu"
    },
    {
        text: "What is the capital of Croatia?",
        answers: ["Bratislava", "Zagreb", "Belgrade"],
        correct: "Zagreb"
    },
    {
        text: "What is the capital of Nigeria?",
        answers: ["Lagos", "Kinshasa", "Abuja"],
        correct: "Abuja"
    },
    {
        text: "What is the capital of Vietnam?",
        answers: ["Phnom Penh", "Kathmandu", "Hanoi"],
        correct: "Hanoi"
    },
    {
        text: "What is the capital of Norway?",
        answers: ["Oslo", "Stockholm", "Helsinki"],
        correct: "Oslo"
    },
    {
        text: "What is the capital of Uruguay?",
        answers: ["Santiago", "Buenos Aires", "Montevideo"],
        correct: "Montevideo"
    },
    {
        text: "What is the capital of Peru?",
        answers: ["Quito", "Lima", "Machu Picchu"],
        correct: "Lima"
    },
    {
        text: "What is the capital of Paraguay?",
        answers: ["Montevideo", "Asuncion", "Santiago"],
        correct: "Asuncion"
    },
    {
        text: "What is the capital of Moldova?",
        answers: ["Chisinau", "Sofia", "Bucharest"],
        correct: "Chisinau"
    },
    {
        text: "What is the capital of Spain?",
        answers: ["Barcelona", "Valencia", "Madrid"],
        correct: "Madrid"
    },
    {
        text: "What is the capital of Ukraine?",
        answers: ["Lviv", "Kyiv", "Odesa"],
        correct: "Kyiv"
    }
];

const quiz = document.getElementById("container");
const answer = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");

let currentQuiz = 0;
let score = 0;

let username = document.getElementById("user");
let questionsQuiz = document.getElementById("question-container");
questionsQuiz.style.display = "none";
let feedback = document.getElementById("feedback");
feedback.style.display = "none";

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuestionsData = questionsData[currentQuiz];

    question.innerText = currentQuestionsData.text;
    a_text.innerText = currentQuestionsData.answers[0];
    b_text.innerText = currentQuestionsData.answers[1];
    c_text.innerText = currentQuestionsData.answers[2];

}

function deselectAnswers() {
    answer.forEach(answer => answer.checked = false);
}

function introQuiz() {
    let usernameDiv = document.getElementById("username");
    // check if the user entered username
    if (username.value) {
        usernameDiv.style.display = "none";
        startQuiz();
    } else {
        alert("Please enter your username first");
    }
    
    
}

// show questions 
function startQuiz() {
    questionsQuiz.style.display = "block";
    // for loop with questions, if all are done - function feedback

}

// function feedbackQuiz {
//     feedback.style.display = "block";
// }