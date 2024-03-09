const userId = JSON.parse(localStorage.getItem("userLoggedIn")) || []
const users=JSON.parse(localStorage.getItem("user")) || []
const userData=users.find(function(user){
  if(user.userId==userId.userId){
    return user
  }
})

window.onload = function() {
  document.getElementById("userId").value = userData.userId;
  document.getElementById("userName").value = userData.username;
  document.getElementById("userEmail").value = userData.email;
  document.getElementById("userPassword").value = userData.password;
  document.getElementById("userRole").value = userData.role;
};
function deleteAccount(){
  for(let i = 0; i < users.length; i++) {
      if (users[i].userId == userId.userId) {
          users.splice(i, 1);
          break
      }
  }
  try {
      var jsonUsers = JSON.stringify(users);
      localStorage.setItem('user', jsonUsers);
      alert("Delete successfully!")
      window.location.href="../index.html"
  } catch (error) {
      alert(error.message)
  }
}

function saveChange(){
  users.find(function(user){
    if(userData.userId==user.userId){
      user.username=document.getElementById("userName").value
      user.password=document.getElementById("userPassword").value
      return
    }
  })
  localStorage.setItem("user",JSON.stringify(users))
  alert("Save successfully!")
  window.location.href="../Home/home.html"
}

document.addEventListener("DOMContentLoaded", function(){
  var examsData = []
  const userExams=JSON.parse(localStorage.getItem("user-exam")) || []
  const exams=JSON.parse(localStorage.getItem("exam")) || []
  userExams.forEach(userExam=>{
    if(userExam.userId==userId.userId){
      var selectedAnswers=userExam.answers
      var exam=exams.find(exam=>exam.examId==userExam.examId)
      var name=exam.examName
      var description=exam.description
      var correctAnswers=0
      var totalQuestions=exam.questions.length
      console.log(exam.examName)
      console.log(selectedAnswers)
      console.log(exam.questions)
      for(var i=0;i<totalQuestions;i++){
        if(selectedAnswers[i].yourAnswer==exam.questions[i].correctAnswer){
          correctAnswers++
        }
      }
      var examData={
        name:name,
        description:description,
        correctAnswers:correctAnswers,
        totalQuestions:totalQuestions
      }
      examsData.push(examData)
    }
  })
  const examsListElement = document.getElementById('examsList');
  examsData.forEach(exam => {
    const examElement = document.createElement('div');
    examElement.classList.add('exam');
    examElement.innerHTML = `
      <h2>${exam.name}</h2>
      <p>Description: ${exam.description}</p>
      <p>Correct Answers: ${exam.correctAnswers}/${exam.totalQuestions}</p>
    `;
    examsListElement.appendChild(examElement);
  });
})
