# Countries & Capitals Quiz

[View the live project here.](https://konstanciaa.github.io/capitals-quiz/)

The Countries & Capitals Quiz is an interactive web application made for enterntainment. The quiz contains 15 questions. Users can check their knowledge of capitals of 15 countries of the world. Every question has three options. In the end of the quiz user can see how many chosen answers were correct.

The web application is designed to be responsible on a range of devices.

![A screenshot of the website on different devices](/docs/responsive-intro.png)

![A screenshot of the website on different devices](/docs/responsive-quiz.png)

## User Experience (UX)

### User stories

1. As a User, I want to understand the purpose of the web application.
2. As a User, I want to see clearly written instructions which explain what to do.
3. As a User, I want to quickly understand how to play.
4. As a User, I also want to easily navigate the web application.
5. As a User, I want to see my score points.
6. As a User, I want to be able to play the quiz again.

   
## User Experience Design (UXD)
+ **Strategy Plane**. A quiz for enterntainment which also provides users with the opportunity to check their knowledge of the capitals.
+ **Scope Plane**. The title of the quiz, instructions, input for username and the start button. There is "Next" button under the options. The "Next" button submits the answer and opens the next question. There are scores under the "Next" button. After the 15th question the user can see a panel with score points. There is also a "Play again" button which reloads the quiz.
+ **Structure Plane**. The introduction window contains simple clear instructions how to start and the rules how to play. After entering username and clicking "Start" button the user sees one question with three options at a time. The "Next" button submits the answer and opens the next question. Right under the button the user can see their score points along the way. After answering the 15th question the user can see a feedback panel with their username and score points. There is also a "Play again" button which reloads the quiz.
+ **Skeleton Plane**. 
![Introduction with instructions wireframe](/docs/intro-wireframe.png)
![Quiz questions wireframe](/docs/quiz-wireframe.png)
![Scores wireframe](/docs/scores-wireframe.png)

+ **Surface Plane**. 

Fonts: *Montserrat*

Background image: *a picture of the night Earth*

Colors: *taken from the background image*


## Features

### Header
+ The header is located at the top of the page. It gives a clear idea of what the web application is about - "Countries & Capitals Quiz".
+ The font and the colors make it easy to read.

![A screenshot of title](/docs/heading.png)

### Background Image
+ The background image is a photo of the Earth at night. It helps the user to switch to the right state of mind and to focus on the quiz topic.

![The background image](/assets/images/background-image.jpg)

### Instructions
+ This section gives detailed instructions and asks users to enter their username. 
+ Users are able to start the quiz only after entering username.

![A screenshot of introduction and instructions](/docs/instructions.png)

### Quiz Questions
+ This section appears instead of instructions after users enter their username and click "Start" button.
+ Here the user can read a question and choose the answer by taping one of the options below the question. 
+ After choosing an answer and clicking "Next" button the user can see the next question and their current score points under the button.

![A screenshot of the first question of the quiz](/docs/quiz-question.png)

### Results
+ This section shows user's username and their final score points.
+ There is also a "Play again" button which enables the user to take the quiz again.

![A screenshot of the scores](/docs/results.png)

## Future Features
+ Timer to limit time for the answer which also can help to reduce cheating
+ Save scores for returning users
+ Two levels of difficulty
+ Different feedback depending on score points result

## Testing

| **To test**                         | **Expected Result**                    |
|-------------------------------------|----------------------------------------|
|Open the site in different browsers. |The website works properly in different browsers: Chrome, Safari.
|Open it on a tablet and on a mobile phone. |It's responsive and looks good on a range of devices.
|Try to click "Start" without entering username. |The alert message appears at the top of the page. It says: "Please enter your username first".             
|Type your username. | The text of the input is clear and readable.
|Click the button "Start". |It starts the quiz and shows the first question.
|Choose an answer and click "Next". |It opens the next question and shows the score.
|Try to answer all 15 questions. |All questions work properly.
|Check your score points after answering the last question. |It shows my username and score correctly.
|Try to click "Play again". |The page reloads. I can see the instructions and start again.


## Bugs

#### Solved bugs
Score was always 0 no matter how many right answers were chosen.
+ the function which returns value of the selected input compared it to the answer's id, not to the value itself.
+ the code was changed so now it checks if the selected input is equal to the correct answer's value.

## Validator Testing

#### HTML
+ No errors were returned when passing through the official W3C validator.

[W3C Markup Validator - Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fkonstanciaa.github.io%2Fcapitals-quiz%2F)

#### CSS
+ No errors were returned when passing through the official (Jigsaw) validator.

[W3C CSS Validator - Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fkonstanciaa.github.io%2Fcapitals-quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

#### JavaScript
+ No significant issues were returned when passing through [Jshint](https://jshint.com/)

 *"introQuiz" is a function. It's called in HTML file when "Start" button is clicked*

![A screenshot of test result on Jshint](/docs/jshint.png)

### Accessibilty
+ I confirmed that the colors and fonts chosen are easy to read and accessible by running it through lighthouse in devtools.

![A screenshot of lighthouse test result](/docs/lighthouse.png)

#### Unfixed Bugs
+ No unfixed bugs

## Testing User Stories from User Experience (UX) Section

1. As a User, I want to understand the purpose of the web application.
+ *Upon entering the site, users are automatically greeted with a clear and easily readable title which gives and idea of what is it about.*
2. As a User, I want to see clearly written instructions which explain what to do.
+ *At the very first panel right below the title users can read clear and simple instructions about the actions required to start the quiz.*
3. As a User, I want to quickly understand how to play.
+ *Users can read short and simple instructions at the very first page.*
4. As a User, I also want to easily navigate the web application.
+ *There is always only one button on the page at a time. It either starts the quiiz or proceeds to the next question.*
5. As a User, I want to see my score points.
+ *Users can see their score along the way under the "Next" button. Also after answering all the questions users receive feedback along with the final score.*
6. As a User, I want to be able to play the quiz again.
+ *The final panel shows results of the quiz and the "Play again" button. By clicking this button users can start the quiz again.*

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:
+ In the GitHub repository, navigate to the Settings tab
+ Choose Pages on the left side menu
+ From the source section drop-down menu, select the Main Branch
+ Once the main branch has been selected, the page will automatically refresh
+ Click the provided link to now published website.

The live link can be found here - [Countries & Capitals Quiz](https://konstanciaa.github.io/capitals-quiz/)


## Contributing

Any contributions are greatly appreciated. If you have a suggestion that would make this website better, please fork the repo and create a pull request.

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/konstanciaa/capitals-quiz)
2. At the top of the Repository on the right site of the page just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Fork the Project
4. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
5. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
6. Push to the Branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

## Technologies Used

#### Languages Used
+ HTML5
+ CSS3
+ JavaScript

#### Programs Used
+ **Google Fonts** were used to import the 'Montserrat' font into the style.css file which is used in the project.
+ **Git** was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
+ **GitHub** is used to store the projects code after being pushed from Git.
+ **Balsamiq** was used to create wireframes.

## Credits

#### Code
+ The code for hiding introduction panel came from this [YouTube video tutorial](https://youtu.be/79WRPIknVHs).
+ The code for writing functions that run the quiz questions came from this [YouTube video tutorial](https://youtu.be/CqddbIrEM5I).

#### Content
+ All the website content was written by the developer.

#### Media
+ The background image was taken from [Pexels](https://www.pexels.com/)

#### Acknowledgements
+ My Mentor for continuous helpful feedback.
+ Tutor support at Code Institute for their support.