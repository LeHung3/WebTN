
//đếm số câu trả lời đúng
function countCorrectAnswer(){
  //lấy userId
  var userLogin = JSON.parse(localStorage.getItem("userLoggedIn"));
  var userId = userLogin.userId
  // //Lấy list user-exam
  var listUserExam = JSON.parse(localStorage.getItem("user-exam"));
  //lọc list user-exam theo userId
  var allExamByUserId = listUserExam.filter(function (object) {
    return object.userId === userId;
  });
  //tìm examId theo exam cuối thêm vào list
  var examId  = JSON.parse(localStorage.getItem("examOnline")).examId
  //gọi list các object exam
  var listObjectExam = JSON.parse(localStorage.getItem("exam"));
  //tìm exam object theo exam id
  var objectExam = listObjectExam.find(function(exam){
    return exam.examId === examId;
  })

  var Questions = objectExam.questions;
  var listObjectAnswers = allExamByUserId[allExamByUserId.length - 1].answers;
  var selectedAnswer  = listObjectAnswers.map(function(answer){
    return answer.yourAnswer;
  })
  var correctAnswer = objectExam.questions.map(function(exam) {
    return exam.correctAnswer;
  });

// Kiểm tra đáp án và đếm số câu trả lời đúng
  var correctCount = 0;
  for (var j = 0; j < Questions.length; j++) {
      if(correctAnswer[j] === selectedAnswer[j]){
        correctCount++;
      }

  }
  return correctCount;
}

// chi tiết đáp án
function showCorrectAnswers() {

  //lấy userId
  var userLogin = JSON.parse(localStorage.getItem("userLoggedIn"));
  var userId = userLogin.userId
  //Lấy list user-exam
  var listUserExam = JSON.parse(localStorage.getItem("user-exam"));
  //lọc list user-exam theo userId
  var allExamByUserId = listUserExam.filter(function (object) {
    return object.userId === userId;
  });
  //tìm examId theo exam cuối thêm vào list
  var examId  = JSON.parse(localStorage.getItem("examOnline")).examId
  //gọi list các object exam
  var listObjectExam = JSON.parse(localStorage.getItem("exam"));
  //tìm exam object theo exam id
  var objectExam = listObjectExam.find(function(exam){
    return exam.examId === examId;
  })

var Questions = objectExam.questions;
var listObjectAnswers = allExamByUserId[allExamByUserId.length - 1].answers;
var selectedAnswer  = listObjectAnswers.map(function(answer){
return answer.yourAnswer;
})
var correctAnswer = objectExam.questions.map(function(exam) {
return exam.correctAnswer;
});


  var questionContainer = document.getElementById("questionResult");

  Questions.forEach(function(questionObj, index) {
    questionContainer.appendChild(document.createElement("hr"));
    var questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.classList.add("question-column");


    var questionText = document.createElement("p");
    questionText.classList.add("text-question");
    questionText.textContent = "Câu hỏi " + (index+1) + " : "+ questionObj.question;
    questionElement.appendChild(questionText);

    var answers = questionObj.answers; 
    var choicesDiv = document.createElement("div");
    choicesDiv.classList.add("answer");
    choicesDiv.classList.add("answer-column");
    Object.keys(answers).forEach(function (key, choiceIndex) {
      var choice = answers[key];
    
      var choiceDiv = document.createElement("div");
  
      var choiceLabel = document.createElement("p");
      choiceLabel.textContent = key +"." + choice; // Sử dụng value từ answers như là nội dung của label
      // choiceLabel.htmlFor = choiceInput.id;
      choiceDiv.appendChild(choiceLabel);
    
      choicesDiv.appendChild(choiceDiv);
    });
    questionElement.appendChild(choicesDiv);
    var answerElement = document.createElement("div");
    answerElement.classList.add("answer");
    answerElement.classList.add("answer-column");

    var correctAnswerText = document.createElement("p");
    correctAnswerText.textContent = "Đáp án đúng: " + correctAnswer[index];
    answerElement.appendChild(correctAnswerText);

    var userAnswerText = document.createElement("p");
    userAnswerText.textContent = "Câu trả lời của bạn: " + selectedAnswer[index];
    answerElement.appendChild(userAnswerText);

    questionElement.appendChild(answerElement);

    questionContainer.appendChild(questionElement);
  });
  questionContainer.appendChild(document.createElement("hr"));
}


// ấn vào button để mở chi tiết đáp án
function switchToShowAnswer(){
var ShowAnswer = document.getElementById("switch-form");
  ShowAnswer.style.display = "none";
  var ShowCorrectAnswer = document.getElementById("showAnswerContainer");
  ShowCorrectAnswer.style.display = "block";
  var ShowHome = document.getElementById("switch-to-home");
  ShowHome.style.display = "block";
  showCorrectAnswers();

}
//chuyển hướng về home
function switchToHome(){
  window.location.href="../Home/home.html";
  localStorage.setItem("examOnline",JSON.stringify({}))
}
var userLogin = JSON.parse(localStorage.getItem("userLoggedIn"));
var userId = userLogin.userId
var examQuestion  = JSON.parse(localStorage.getItem("examOnline")).questions
var  countScore = countCorrectAnswer()
var  score = document.getElementById("studentId");
  score.innerText = "Mã sinh viên : " + userId;
  // score.innerText = "Mã sinh viên :";

var  score = document.getElementById("score");
  score.innerText = "Số câu hoàn thành : " + countScore + "/" +examQuestion.length; 