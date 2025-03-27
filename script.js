const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Berlín", "Madrid", "París", "Lisboa"],
        answer: 2
    },
    {
        question: "¿Qué planeta es conocido como el planeta rojo?",
        options: ["Tierra", "Marte", "Júpiter", "Saturno"],
        answer: 1
    },
    {
        question: "¿Quién escribió 'Cien años de soledad'?",
        options: ["Gabriel García Márquez", "Pablo Neruda", "Jorge Luis Borges", "Julio Cortázar"],
        answer: 0
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        options: ["Atlántico", "Índico", "Ártico", "Pacífico"],
        answer: 3
    },
    {
        question: "La Tierra es el tercer planeta del sistema solar.",
        options: ["Verdadero", "Falso"],
        answer: 0 // correcto es "Verdadero"
    },
    {
        question: "El Sol es un planeta.",
        options: ["Verdadero", "Falso"],
        answer: 1 // correcto es "Falso"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hidden');
    scoreContainer.classList.add('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(index, button));
        optionsElement.appendChild(button);
    });
}

function selectOption(index, button) {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (index === correctAnswer) {
        score++;
        button.style.backgroundColor = 'green'; // Color para respuesta correcta
    } else {
        button.style.backgroundColor = 'red'; // Color para respuesta incorrecta
    }

    // Desactivar botones
    const buttons = optionsElement.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    // Avanzar a la siguiente pregunta después de 1 segundo
    setTimeout(() => {
        nextButton.classList.remove('hidden');
    }, 1000);
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hidden');
    } else {
        showScore();
    }
});

function showScore() {
    questionElement.classList.add('hidden');
    optionsElement.classList.add('hidden');
    scoreElement.innerText = score;
    scoreContainer.classList.remove('hidden');
}

document.getElementById('restart-button').addEventListener('click', startGame);

startGame();
