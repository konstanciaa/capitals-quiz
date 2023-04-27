let username = document.getElementById("user");

function introQuiz() {
    let usernameDiv = document.getElementById("username");
    if (username) {
        usernameDiv.style.display = "none";
        startQuiz();
    } else {
        alert("Please enter your username first");
    }
    
    
}

function startQuiz() {

}