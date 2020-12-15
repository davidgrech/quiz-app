const quizData = [
    {
        question: 'What is the capital of Indonesia?',
        a: 'Jakarta',
        b: 'Medan',
        c: 'Yogyakarta',
        d: 'Denpasar',
        correct: 'a'
    }, {
        question: 'What is the population of Indonesia?',
        a: '100K - 150K',
        b: '151K - 200K',
        c: '201K - 250K',
        d: '251K - 300K',
        correct: 'd'
    }, {
        question: 'How many volcanoes are there in Indonesia?',
        a: '0 - 50',
        b: '51 - 100',
        c: '101 - 150',
        d: '151 - 200',
        correct: 'd'
    }, {
        question: 'How many islands are there in Indonesia?',
        a: '1 - 5K',
        b: '6K - 10K',
        c: '11K - 15K',
        d: '16K - 20K',
        correct: 'd'
    }
];

const questionEL = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {

    const currentQuizData = quizData[currentQuiz];

    questionEL.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}

submitBtn.addEventListener("click", () => {
    currentQuiz++;

    loadQuiz();
});