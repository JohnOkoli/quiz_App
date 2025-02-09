const quizData = [
    {
        question: "What is the capital of Nigeria?",
        choices: ["Berlin", "Madrid", "Abuja", "Rome"],
        correctAnswer: 2
    },
    {
        question: "Who is the president of Nigeria?",
        choices: ["Yaladua", "Obi", "Tappi", "Balabule"],
        correctAnswer: 3
    },
    {
        question: "What is the best programming language?",
        choices: ["javascript", "python", "c#", "react"],
        correctAnswer: 0
    },
    {
        question: "What is the time Mondays SOTU?",
        choices: ["9pm", "9am", "12am", "6pm"],
        correctAnswer: 1
    },
    {
        question: "Which planet hhas a life?",
        choices: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: 0
    },
    {
        question: "What is the short form for World Health Organization?",
        choices: ["HoP", "AIDs", "Trumph", "WHO"],
        correctAnswer: 3
    },
    {
        question: "What the root of 16?",
        choices: ["1", "55", "4", "100"],
        correctAnswer: 2
    },
    {
        question: "Who wrote the play Romeo and Juliet?",
        choices: ["William Shakespeare", "Charles Dickens","Mark Twain", "Jane Austen"],
        correctAnswer: 0
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["incent van Gogh","Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: 2
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        choices: ["Chain", "Japan", "Europe", "Nigera"],
        correctAnswer: 1
    }

  ]
  
  let currentQuestion = 0
  let score = 0
  
  const questionEl = document.getElementById("question")
  const choicesEl = document.getElementById("choices")
  const submitBtn = document.getElementById("submit")
  const quizEl = document.getElementById("quiz")
  const resultsEl = document.getElementById("results")
  const progressEl = document.getElementById("progress")
  const scoreEl = document.getElementById("score")
  const restartBtn = document.getElementById("restart")
  
  function loadQuestion() {
    const question = quizData[currentQuestion]
    questionEl.textContent = question.question
  
    choicesEl.innerHTML = ""
    for (let i = 0; i < question.choices.length; i++) {
      const choice = question.choices[i]
      const button = document.createElement("button")
      button.textContent = choice
      button.addEventListener("click", () => selectChoice(i))
      choicesEl.appendChild(button)
    }
  
    updateProgress()
  }
  
  function selectChoice(choiceIndex) {
    const buttons = choicesEl.getElementsByTagName("button")
    for (const button of buttons) {
      button.classList.remove("selected")
    }
    buttons[choiceIndex].classList.add("selected")
  }
  
  function updateProgress() {
    progressEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`
  }
  
  function submitAnswer() {
    const selectedButton = choicesEl.querySelector(".selected")
    if (!selectedButton) {
      alert("Please select an answer!")
      return
    }
  
    const selectedAnswer = Array.from(choicesEl.children).indexOf(selectedButton)
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      score++
    }
  
    currentQuestion++
  
    if (currentQuestion < quizData.length) {
      loadQuestion()
    } else {
      showResults()
    }
  }
  
  function showResults() {
    quizEl.style.display = "none"
    submitBtn.style.display = "none"
    resultsEl.style.display = "block"
    scoreEl.textContent = `You scored ${score} out of ${quizData.length}!`
  }
  
  function restartQuiz() {
    currentQuestion = 0
    score = 0
    quizEl.style.display = "block"
    submitBtn.style.display = "block"
    resultsEl.style.display = "none"
    loadQuestion()
  }
  
  submitBtn.addEventListener("click", submitAnswer)
  restartBtn.addEventListener("click", restartQuiz)
  
  loadQuestion()  