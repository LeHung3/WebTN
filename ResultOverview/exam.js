document.addEventListener('DOMContentLoaded', function() {
  const questionList = document.getElementById('questionList');
  const selectedStudentElement = document.getElementById('selectedStudent'); // Selected student element
  const selectedStudentElement1 = document.getElementById('selectedExam'); // Selected student element

    // Get selected student name from query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const selectedStudentName = urlParams.get('studentName');
    const selectedExamName = urlParams.get('examName');
    if (selectedStudentName) {
        selectedStudentElement.textContent = `Student: ${selectedStudentName}`; // Display selected student name
    }
    if (selectedExamName) {
      selectedStudentElement1.textContent = `Exam: ${selectedExamName}`; // Display selected student name
  }
  let totalCorrectAnswers = 0;

  // Mock data - Generate random answers for each question
  const questions = [];
  for (let i = 1; i <= 20; i++) {
      const correctAnswer = Math.floor(Math.random() * 4) + 1; // Random correct answer (1-4)
      const answers = [];
      for (let j = 1; j <= 4; j++) {
          answers.push({ text: "Đáp án "+String.fromCharCode(64 + j) + ": ", correct: j === correctAnswer });
      }
      questions.push({ question: `Question ${i}`, answers: answers, correctAnswer: String.fromCharCode(64 + correctAnswer) });
  }

  // Function to populate question list
  function populateQuestionList() {
      questions.forEach(question => {
          const questionItem = document.createElement('div');
          questionItem.classList.add('question-item');
          questionItem.innerHTML = `
              <h3>${question.question}</h3>
              <ul>
                  ${question.answers.map(answer => `<li>${answer.text} ${answer.correct ? '(Đúng)' : ''}</li>`).join('')}
              </ul>
              <p>Câu trả lời của bạn: ${randomAnswer()}</p>
          `;
          questionList.appendChild(questionItem);
      });
  }

  // Function to generate random answer
  function randomAnswer() {
      const letters = ['A', 'B', 'C', 'D'];
      const randomLetter = letters[Math.floor(Math.random() * letters.length)];
      if (randomLetter === questions[totalCorrectAnswers].correctAnswer) {
          totalCorrectAnswers++;
      }
      return `${randomLetter}`;
  }

  // Populate question list on page load
  populateQuestionList();

  // Calculate and display score
  const score = (totalCorrectAnswers / 20) * 10;
  const scoreElement = document.createElement('p');
  scoreElement.textContent = `Điểm của bạn: ${score*2}/20`;
  questionList.insertBefore(scoreElement, questionList.firstChild);
});