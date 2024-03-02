var initialTimeLeft = 100; // Thời gian thi ban đầu
var timerInterval = null;

//nộp bài và chuyển hướng sang trang kết quả
function submitQuiz(event) {
    if(event){
      event.preventDefault();
    }
    
    clearInterval(timerInterval);
    var timer = document.getElementById("countdown");
    timer.innerHTML = "00:00";
    
    generateAnswer();

    window.location.href="../ResultTest/resultTest.html";
    return false;
  }
// đếm giờ, hết giờ sẽ tự động nộp bài
  function countdown() {
    var timer = document.getElementById("countdown");
    var timeLeft = initialTimeLeft; // Thời gian thi (tính bằng giây)
  
      timerInterval = setInterval(function () {
      var minutes = Math.floor(timeLeft / 60);
      var seconds = timeLeft % 60;
  
      timer.innerHTML = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
  
      timeLeft--;
  
      if (timeLeft < 0) {
        clearInterval(timerInterval);
        submitQuiz();
      }
    }, 1000);
  }  

  

// tạo câu hỏi 
  function createQuestion() {
    var userLogin = JSON.parse(localStorage.getItem("userLoggedIn"));
    var userId = userLogin.userId

    // var listUserExam = JSON.parse(localStorage.getItem("user-exam"));
    // var allExamByUserId = listUserExam.filter(function (object) {
    //   return object.userId === userId;
    // });

    // var searchExamId  = allExamByUserId[listUserExam.length -1].examId;
    var examId=JSON.parse(localStorage.getItem("examOnline")).examId
    var listObjectExam = JSON.parse(localStorage.getItem("exam"));
    var objectExam = listObjectExam.find(function(exam){
      return exam.examId === examId;
    })

    //tí sửa lại thành objectExam
    var questions = objectExam.questions

    var questionContainer = document.getElementById("questionContainer");
  
    questions.forEach(function (questionObj, index) {
      var questionElement = document.createElement("div");
      questionElement.classList.add("question");
  
      var questionText = document.createElement("p");
      questionText.textContent = questionObj.question;
      questionElement.appendChild(questionText);
  
        var choicesDiv = document.createElement("div");
  
        var listAnswerObject = questionObj.answers;
        console.log(listAnswerObject)
        Object.keys(listAnswerObject).forEach(function (key, choiceIndex) {
          var choice = listAnswerObject[key];
        
          var choiceDiv = document.createElement("div");
        
          var choiceInput = document.createElement("input");
          choiceInput.type = "radio";
          choiceInput.name = "question" + (index + 1);
          choiceInput.id = "question" + (index + 1) + "Choice" + (choiceIndex + 1);
          choiceInput.value = key; // Sử dụng key làm giá trị để biết được người dùng chọn đáp án nào
          choiceDiv.appendChild(choiceInput);
        
          var choiceLabel = document.createElement("label");
          choiceLabel.textContent = choice; // Sử dụng value từ answers như là nội dung của label
          choiceLabel.htmlFor = choiceInput.id;
          choiceDiv.appendChild(choiceLabel);
        
          choicesDiv.appendChild(choiceDiv);
        });
  
        questionElement.appendChild(choicesDiv);
    
  
      questionContainer.appendChild(questionElement);
    });
  }

  // đưa hết câu trả lời vào list và lưu vào localStorage
  function generateAnswer(){

    // đoạn này tìm userId,ExamId
    var userLogin = JSON.parse(localStorage.getItem("userLoggedIn"));
    var userId = userLogin.userId

    // var listUserExam = JSON.parse(localStorage.getItem("user-exam"));
    // var allExamByUserId = listUserExam.filter(function (object) {
    //   return object.userId === userId;
    // });

    var examId=JSON.parse(localStorage.getItem("examOnline")).examId


    var listObjectExam = JSON.parse(localStorage.getItem("exam"));
    var objectExam = listObjectExam.find(function(exam){
      return exam.examId === examId;
    })

    var questionId = objectExam.questions.map(function(question) {
      return question.questionId;
    });
    var answers = [];
    var questionElements = document.getElementsByClassName("question");

    for (var i = 0; i < questionElements.length; i++) {
        var questionElement = questionElements[i];
            var selectedAnswer = questionElement.querySelector("input:checked");
            if (selectedAnswer) {
                var answer = {
                  questionId:questionId[i],
                  yourAnswer:selectedAnswer.value
                }
                answers.push(answer);
            }else{
              var answer = {
                questionId:questionId[i],
                yourAnswer:""
              }
                answers.push(answer);
            }
        
    }
    var UserExamList = JSON.parse(localStorage.getItem("user-exam")) || [];
    var UserExam = {
        userId : userId,
        examId : examId,
        answers: answers
    }
    UserExamList.push(UserExam);
    var jsonUserAnswerList = JSON.stringify(UserExamList);
    localStorage.setItem("user-exam",jsonUserAnswerList);
  }

countdown();
createQuestion();