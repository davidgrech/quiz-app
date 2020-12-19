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
    }, {
        question: 'Which great ape is native to Indonesia?',
        a: 'Gorilla',
        b: 'Chimpanzee',
        c: 'Orangutan',
        d: 'Bonobo',
        correct: 'c'
    }, {
        question: 'What is the most active volcano in Indonesia?',
        a: 'Mount Merbabu',
        b: 'Mount Merapi',
        c: 'Mount Bromo',
        d: 'Mount Ijen',
        correct: 'b'
    }
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEL = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEL.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    //check to see the answer

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = 
                `<h2>You answered ${score}/${quizData.length} questions correctly.</h2>

                <button onclick="location.reload()">Reload</button>`;
        }
    }

});