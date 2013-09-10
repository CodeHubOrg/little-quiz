var score = 0;
var quiz = [
    {
        question:"What\'s the most expensive film ever made?",
        answers:['Pirates of the Caribbean', 'Tangled', 'Waterworld','Avatar'],
        correctAnswer:0
    },
    {
        question: "What\'s the worst film ever made?",
        answers: ['Twilight', 'Pirates of the Caribbean', 'Waterworld','Sharknado'],
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

poseQuestion(quizIndex);

function poseQuestion(quizIndex) {
		if (quizIndex==totalQuestions) {
        //loadScore();
        alert('load score');
				return;
    }

	  drawQuestion();
		drawAnswers();
		listenForAnswer();
}


function update() {
    correctAnswer = quiz[quizIndex].correctAnswer;
    if (document.getElementById(correctAnswer).checked) {
        score++;
    }
    clearQuestion();
		quizIndex++;
   	poseQuestion(quizIndex);
}

function clearQuestion(){
    document.getElementById("questionHolder").innerHTML = "";
    document.getElementById("answersHolder").innerHTML = "";
		document.getElementById("nextHolder").innerHTML = "";
}

function drawQuestion() {
    var currentQuestion = quiz[quizIndex].question;
    var questionNode = document.createTextNode(currentQuestion);
    var questionHolder = document.getElementById("questionHolder");
    questionHolder.appendChild(questionNode);
}

function drawAnswers() {
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
}


function listenForAnswer() {
		var a = document.createElement('a');
		var nextNode = document.createTextNode("NEXT");
		a.appendChild(nextNode);
		a.id = "next";
		var nextHolder = document.getElementById("nextHolder");
		nextHolder.appendChild(a);

    var nextListener = document.getElementById("next");	
    nextListener.addEventListener('click', function() { update(); }, false);
}	
