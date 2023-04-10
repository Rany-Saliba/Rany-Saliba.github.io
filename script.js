const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
	{
		question: "Who is the club that won the champions league in 2020 ?",
		answers: {
			a: "Liverpool",
			b: "Bayern",
			c: "Real Madrid",
			d: "AC Milan"
		},
		correctAnswer: "b"
	},
	{
		question: "Who painted the Mona Lisa?",
		answers: {
			a: "Michelangelo",
			b: "Leonardo Da Vinci",
			c: "Vincent Van Gogh",
			d: "Raphael"
		},
		correctAnswer: "b"
	},
	{
		question: "Who discovered gravity?",
		answers: {
			a: "Sir Isaac Newton",
			b: "Thomas Edison",
			c: "Archimedes",
			d: "Euclid"
		},
		correctAnswer: "a"
	},
	{
		question: "Which team won the NBA championship in 2020?",
		answers: {
			a: "Golden State Warriors",
			b: "Miami Heat",
			c: "Los Angeles Lakers",
			d: "Los Angeles Clippers"
		},
		correctAnswer: "c"
	},
	{
		question: "What is the name of the highest mountain in the world?",
		answers: {
			a: "K2",
			b: "Mount Everest",
			c: "Lhotse",
			d: "Makalu"
		},
		correctAnswer: "b"
	}
];

function buildQuiz() {
	const output = [];

	myQuestions.forEach((currentQuestion, questionNumber) => {
		const answers = [];

		for (const letter in currentQuestion.answers) {
			answers.push(
				`<label>
					<input type="radio" name="question${questionNumber}" value="${letter}">
					${letter} :
					${currentQuestion.answers[letter]}
				</label>`
			);
		}

		output.push(
			`<div class="question">
				<h3>${currentQuestion.question}</h3>
				<div class="answers">${answers.join('')}</div>
			</div>`
		);
	});

	quizContainer.innerHTML = output.join('');
}

function showResults() {
	const answerContainers = quizContainer.querySelectorAll('.answers');
	let numCorrect = 0;

	myQuestions.forEach((currentQuestion, questionNumber) => {
		const answerContainer = answerContainers[questionNumber];
		const selector = `input[name=question${questionNumber}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;

		if (userAnswer === currentQuestion.correctAnswer) {
			numCorrect++;
			answerContainers[questionNumber].style.color = 'lightgreen';
		} else {
			answerContainers[questionNumber].style.color = 'red';
		}
	});

	const score = `You got ${numCorrect} out of ${myQuestions.length} correct!`;
	const correctAnswers = `The correct answers are: <br><br> 1. b <br> 2. b <br> 3. a <br> 4. c <br> 5. b`;

	resultsContainer.innerHTML = score + '<br><br>' + correctAnswers;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
