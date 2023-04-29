let username = document.getElementById("user");
let questionsQuiz = document.getElementById("question-container");
questionsQuiz.style.display = "none";
let feedback = document.getElementById("feedback");
feedback.style.display = "none";


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