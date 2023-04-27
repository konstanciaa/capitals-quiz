let username = document.getElementById("user");
let questionsQuiz = document.getElementById("question-container");
questionsQuiz.style.display = "none";

function introQuiz() {
    let usernameDiv = document.getElementById("username");
    // how to check if the user entered username
    if (username) {
        usernameDiv.style.display = "none";
        startQuiz();
    } else {
        alert("Please enter your username first");
    }
    
    
}

// show questions 
function startQuiz() {
    questionsQuiz.style.display = "block";

}