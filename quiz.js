var score = 0;
var quiz = [
    {
        question:"What\'s the most expensive film ever made?",
        answers:['Pirates of the Carabian', 'Tangled', 'Waterworld','Avatar'],
        correctAnswer:0
    },
    {
        question: "What\'s the worst film ever made?",
        answers: ['Pirates of the Carabian', 'Twightlight', 'Waterworld','Sharknado'],
        correctAnswer: 3
    },
    {
        question: "How many Toy Story films are there?",
        answers: ['One', 'Two', 'Three'],
        correctAnswer: 2
    }
];
var quizIndex = 0;
var totalQuestions = quiz.length;

loadQuestion(quizIndex);

function loadQuestion(quizIndex) {
    
    //Question
    var currentQuestion = quiz[quizIndex].question;
    var questionNode = document.createTextNode(currentQuestion);
    var questionHolder = document.getElementById("questionHolder");
    questionHolder.appendChild(questionNode);
    
    //Answers
    var totalAnswers = quiz[quizIndex].answers.length;
    for (var i=0; i<totalAnswers; i++ ) {
        var currentAnswer = quiz[quizIndex].answers[i];
        var answerNode = document.createTextNode(currentAnswer);
    
        var p = document.createElement('p');
        
        //Input    
        var radioInput = document.createElement('input');
        radioInput.type ="radio";
        radioInput.name = "answers";
        radioInput.id = i;
        radioInput.value = currentAnswer;
        p.appendChild(radioInput);
        
        //Label    
        var radioLabel = document.createElement('label');
        radioLabel.appendChild(answerNode);
        p.appendChild(radioLabel);
        
        var answerHolder = document.getElementById("answersHolder");
        answerHolder.appendChild(p);
    }
    
    //Next
    var next = document.getElementById("next");
    next.addEventListener('click', function() { update(); }, false);    
}


function update() {
    correctAnswer = quiz[quizIndex].correctAnswer;
    if (document.getElementById(correctAnswer).checked) {
        score++;
    }
    clearQuestion();
    if (quizIndex==totalQuestions) {
        //loadScore();
        alert('load score');
    }
    else {
        quizIndex++;
        loadQuestion(quizIndex);
    }
}

function clearQuestion(){
    document.getElementById("questionHolder").innerHTML = "";
    document.getElementById("answersHolder").innerHTML = "";
}

