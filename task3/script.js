const quizData = [
    {
        question: "Which language is used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["<!-- -->", "//", "#", "**"],
        answer: "//"
    },
    {
        question: "Which CSS property is used to change text color?",
        options: ["font-color", "text-color", "color", "background-color"],
        answer: "color"
    },
    {
        question: "Which method is used to select an element by ID in JavaScript?",
        options: [
            "getElementById()",
            "getElementsByClass()",
            "querySelectorAll()",
            "getElement()"
        ],
        answer: "getElementById()"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>"
    }
];


let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    nextBtn.style.display = "none";
    optionsEl.innerHTML = "";

    const current = quizData[currentQuestion];
    questionEl.innerText = current.question;

    current.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => selectAnswer(btn, current.answer);
        optionsEl.appendChild(btn);
    });
}

function selectAnswer(button, correctAnswer) {
    const buttons = optionsEl.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === correctAnswer) {
            btn.classList.add("correct");
        }
    });

    if (button.innerText !== correctAnswer) {
        button.classList.add("wrong");
    } else {
        score++;
    }

    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").innerHTML = `
        <h2>Quiz Completed 🎉</h2>
        <p>Your Score: <strong>${score} / ${quizData.length}</strong></p>
        <button onclick="location.reload()">Restart Quiz</button>
    `;
}

loadQuestion();
