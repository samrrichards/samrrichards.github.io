//This function sets up the page to let you make a multiple choice key and checks to 
//make sure that you've entered acceptable numbers into the form. 

function multipleChoice() {
	$('#keyspace').remove(); 
	$('.instructions').remove(); 
	$('button').remove(); 
	$('#appendable').append('<p id="keyspace"></p>');
	$('#content').append('<p>How many questions are on the multiple choice test?'); 
	$('#content').append('<input id="questions" type="number">'); 
	$('#content').append('<p>How many choices will there be for each question?</p>'); 
	$('#content').append('<input id="choices" type="number"><p></p>'); 
	$('#content').append('<button type="submit">Generate Test Key!</button>'); 
	var form = document.querySelector("form");
 	form.addEventListener("submit", function(event) {
 		var questions = form.elements.questions.value; 
 		var choices = form.elements.choices.value; 
 		if (questions < 1 || questions > 50) {
 			alert("The number of questions must be between 1 and 50.");
 		} else if (choices < 3 || choices > 7) {
 			alert("The number of choices must be between 3 and 7.");
 		} else {
 			var testKey = makeMCKey(questions, choices);
 			$('#keyspace').append('Here\'s the answer key for your multiple choice test:<br><br>'); 
  			$('#keyspace').append(testKey); 
  			pageReset(); 
 		}
   		event.preventDefault();
  });
}

//This function sets up the page to let you make a vocabulary test key and checks to 
//make sure that you've entered an appropriate number of questions.

function vocabularyTest() {
	$('#keyspace').remove(); 
	$('.instructions').remove(); 
	$('button').remove(); 
	$('#appendable').append('<p id="keyspace"></p>');
	$('#content').append('<p>How many words are on the vocabulary test?</p>'); 
	$('#content').append('<input id="limit" type="number"><p></p>'); 
	$('#content').append('<button type="submit">Generate Test Key!</button>');
	var form = document.querySelector("form");
 	form.addEventListener("submit", function(event) {
 		var limit = form.elements.limit.value; 
 		if (limit < 5 || limit > 50) {
 			alert("The number of questions must be between 5 and 50."); 
 		} else {
 			var testKey = makeVocabKey(limit);
 			$('#keyspace').append('Here\'s the answer key for your vocabulary test:<br><br>'); 
  			$('#keyspace').append(testKey); 
  			pageReset(); 
 		}
   	event.preventDefault();
  });
}

//This function resets the page to let you make more test keys. 

function pageReset() {
	$('#content p, input, button').remove(); 
	$('#appendable').append('<p class="instructions">Click "Multple Choice" or "Vocabulary Test" to make another answer key!</p>');
	$('#appendable').append('<button onClick="multipleChoice();";>Multiple Choice</button>'); 
	$('#appendable').append('<button onClick="vocabularyTest();";>Vocabulary Test</button>'); 
}



//This function generates a randomized multiple choice test key. 

function makeMCKey(questions, choices) {
	var choiceLetters = ["A", "B", "C", "D", "E", "F", "G"];
	var choiceString = ""; 
	for (var i = 1; i <= questions; i++) 
		choiceString += String(i) + ". " + choiceLetters[Math.floor(Math.random() * choices)] + "<br>";
	return choiceString; 
}

//This function generates a reandomized vocabulary test key. 

function makeVocabKey(limit) {
	var letterList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
	"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U","V", "W", "X", "Y", "Z", 
	"AA", "BB", "CC", "DD", "EE", "FF", "GG", "HH", "II", "JJ", "KK", "LL", 
	"MM", "NN", "OO", "QQ", "RR", "SS", "TT", "UU", "VV", "WW", "XX"]; 
	var shuffledList = _.shuffle(letterList.slice(0, limit)); 
	var keyString = ""; 
	shuffledList.forEach(function(letter){
		keyString += String(shuffledList.indexOf(letter) + 1) + ". " + letter + "<br>";
	});
	return keyString; 	
}
