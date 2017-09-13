$(document).ready(function() {

	//set timer function
	var index = 0;
	var countdownTimer = {
		time : 20,
		reset: function() {
			this.time = 20;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				// console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}

			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < myQuestions.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var callIt = function() {
	$(".question").text('');
	$("#button-a").text('');
	$("#button-b").text('');
	$("#button-c").text('');
	$("#button-d").text('');
	index++;
	countdownTimer.reset();
	if (index < myQuestions.length) {
		loadQuestion(index);
	} else {
		$(".answerchoice").hide();
		showScore();
	} 
}


	// set the counters
	var correct = 0;
	var wrong = 0;
	// var totalScore = correct - totalQuestions;
	// var totalQuestions = 10;

	var question1 = {
	    question : "Who is the best selling mystery writter of all time?",
	    possibleAnswers:[
	    "a: James Patterson",
	    "b: Steven King",
	    "c: Agatha Christie",
	    "d: Arthur Conan Doyle"],
	    pAValues : [false,false,true,false],
	    correctAnswer : "c: Agatha Christie",
	}

	var question2 = {
		question: "What was the first detective film?",
		possibleAnswers: [
		"a: The Hound of the Baskervilles",
		"b: Sherlock Holmes Baffled",
		"c: The Sign of Four",
		"d: None of the Above"],
		pAValues :[false,true,false,false],
		correctAnswer : "b: Sherlock Holmes Baffled, a short Mutoscope reel by Arthur Marvin",
	}

	var question3= {
		question: "Which of the following authors is not classified as a mystery writter?",
		possibleAnswers: [
		"a: P.D James",
		"b: Raymond Chandler",
		"c: Edgar Allan Poe",
		"d: J. D. Salinger"],
		pAValues : [false,false,false,true],
		correctAnswer : "d: J. D. Salinger",
	}

	 var question4 = {
	 	question: "What famous fictional dectective said, It is my business to know what other people don\'t know?",
		possibleAnswers:[
		"a: Sherlock Holmes",
		"b: Inspector Clousseau",
		"c: Inspector Gadget",
		"d: Philip Marlowe"],
		pAValues : [true,false,false,false],
		correctAnswer : "a: Sherlock Holmes",
	}

	var question5 = {
		question: "What famous mystery author said, One of the luckiest things that can happen to you in life is, I think, is to have a happy childhood",
		possibleAnswers:[
		"a: J.K Rowling",
		"b: P.D James",
		"c: Margaret Floss",
		"d: Agatha Christie"],
		pAValues : [false,false,false,true],
		correctAnswer : "d: Agatha Christie",
	}

	var question6 = {
		question: "What is the earliest known crime fiction?",
		possibleAnswers:[
		"a: Stories in the life of a Bow Street officer by: Thomas Skinner Sturr",
		"b: The Rector of Veilbye by: Steen Steensen Blicher",
		"c: The Murders in the Rue Morgue by: Edgar Allan Poe",
		"d: The Woman in White by: Wilkie Collins"],
		pAValues : [true,false,false,false],
		correctAnswer : "a: Stories in the life of a Bow Street officer by: Thomas Skinner Sturr",
	}

	var question7 = {
		question: "Which is NOT considered a subgenre of detective fiction?",
		possibleAnswers:[
		"a: cozy mystery",
		"b: locked room mystery",
		"c: whodunit",
		"d: mixed mystery"],
		pAValues : [false,false,false,true],
		correctAnswer : "d: mixed mystery",
	}

	var question8 = {
		question: "Who said, Give me a decent bottle of poison and I will construct the perfect crime?",
		possibleAnswers:[
		"a: P.D James",
		"b: Raymond Chandler",
		"c: Edgar Allan Poe",
		"d: Agatha Christie"],
		pAValues : [false,false,false,true],
		correctAnswer : "d: Agatha Christie",
	}

	var question9 = {
		question: "Which mystery writter wrote scripts in Hollywood, once working with Hitchcock?",
		possibleAnswers: [
		"a: James Patterson",
		"b: Raymond Chandler",
		"c: Peter Giddens",
		"d: Edgar Allan Poe"],
		pAValues : [false,true,false,false],
		correctAnswer : "b: Raymond Chandler",

	}

	var question10 = {
		question: "Who wrote The Pit and the Pendulum?",
		possibleAnswers: [
		"a: James Patterson",
		"b: Raymond Chandler",
		"c: Peter Giddens",
		"d: Edgar Allan Poe"],
		pAValues: [false,false,false,true],
		correctAnswer : "d: Edgar Allan Poe",
	}

	//set questions to a locally scoped array
	let myQuestions = [question1, question2, question3, question4, question5,
	question6, question7, question8, question9, question10];

	// var questionList = question1.question;

	//on click event listener that assigns the buttons
	function loadQuestion(questionSelection) {

		countdownTimer.reset();
			$(".question").text(myQuestions[questionSelection].question).show();
			$("#button-a").text(myQuestions[questionSelection].possibleAnswers[0]).show();
			$("#button-b").text(myQuestions[questionSelection].possibleAnswers[1]).show();
			$("#button-c").text(myQuestions[questionSelection].possibleAnswers[2]).show();
			$("#button-d").text(myQuestions[questionSelection].possibleAnswers[3]).show();
	}

	function setup() {
		index = 0;
		$('.startButton').on('click', function() {
			$(this).hide();
			countdownTimer.start();
		 	loadQuestion(index);
		});
	}

	function getAnswer() {

	//  nextQuestion();
		$('.answerchoice').on('click', function(){
		  console.log('alert', index);
			index++;
			console.log('click', index);
			$(".question").text('');
			$("#button-a").text('');
			$("#button-b").text('');
			$("#button-c").text('');
			$("#button-d").text('');
			loadQuestion();
		})
	}

	function answerCorrect() {
		correct++;
		alert("Correct!");
		console.log("correct");
	}

	function answerWrong() {
		wrong++;
		alert("Incorrect!");
		console.log("wrong");
	}

	function showScore() {
		$('.question').empty();
		$('.question').append("<h2><p>" + correct + " correct</p></h2>");
		$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
		countdownTimer.stop();
		$('.timer').empty();

	}


	setup();
	$('.answerChoices').on('click', function() {
		 console.log($(this));
		 if(this.id == 'button-a') {
		 	var userAnswer = 'a';
		 } else if(this.id == 'button-b') {
		 	userAnswer = 'b';
		 } else if (this.id == 'button-c') {
		 	userAnswer = 'c';
		 } else if (this.id == 'button-d') {
		 	userAnswer = 'd';
		 }
		 if ((userAnswer == 'a') && myQuestions[index].pAValues[0] == true) {
		 	answerCorrect();
		 	callIt();
		 } else if (userAnswer == 'a') {
		 	answerWrong();
		 	callIt();
		 }
		 if ((userAnswer == 'b') && myQuestions[index].pAValues[1] == true) {
		 	answerCorrect();
		 	callIt();
		 } else if (userAnswer == 'b') {
		 	answerWrong();
		 	callIt();
		 }
		if ((userAnswer == 'c') && myQuestions[index].pAValues[2] == true) {
		 	answerCorrect();
		 	callIt();
		 } else if (userAnswer == 'c') {
		 	answerWrong();
		 	callIt();
		 }
		if ((userAnswer == 'd') && myQuestions[index].pAValues[3] == true) {
		 	answerCorrect();
		 	callIt();
		 } else if (userAnswer == 'd') {
		 	answerWrong();
		 	callIt();
		 }


	});


//	$('#start').click(countdownTimer.start);
});