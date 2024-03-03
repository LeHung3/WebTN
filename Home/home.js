const exams = JSON.parse(localStorage.getItem("exam")) || []
localStorage.setItem("examOnline",JSON.stringify({}))
function getItemExam(exam){
  const examInfo = document.createElement("div");
  examInfo.classList.add("exam-info");
  examInfo.classList.add("exam-list")
  
  examInfo.innerHTML = `<p><strong>Tên bài thi:</strong> ${exam.examName}</p>
                        <p><strong>Trạng thái:</strong> ${exam.examType}</p>`;
  if (exam.openTime) {
      examInfo.innerHTML += `<p><strong>Thời gian:</strong> ${exam.openTime}</p>`;
  }
  const startButton = document.createElement("button");
  startButton.textContent = "Bắt đầu làm";
  startButton.classList.add("start-button");
  startButton.addEventListener("click", () => {
    startExam(exam)
  });
  examInfo.appendChild(startButton)
  return examInfo
}

document.addEventListener("DOMContentLoaded", function() {
  const examListElement = document.getElementById("examList");
  exams.forEach(exam => {
      examListElement.appendChild(getItemExam(exam));
  });
});

function filterExams() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = ''; // Xóa kết quả tìm kiếm trước đó
  const matchingExams =exams.filter(exam => (exam.examName.toLowerCase().includes(searchInput) || exam.examType.toLowerCase().includes(searchInput)));
  if (matchingExams.length > 0 && searchInput!="") {
      matchingExams.forEach(exam => {
        searchResults.appendChild(getItemExam(exam));
      });
  } else {
      const noResultsMessage = document.createElement('p');
      noResultsMessage.textContent = 'Không tìm thấy kì thi phù hợp';
      searchResults.appendChild(noResultsMessage);
  }
}
  
function startExam(exam) {
  if(exam.examType==="Scheduled"){
    const currentTime = new Date();
    const scheduledTime = new Date(exam.openTime);
    if (currentTime < scheduledTime) {
      alert(`Bài thi "${exam.examName}" chưa mở làm. Vui lòng quay lại vào thời gian đã lên lịch.`);
    }else{
      alert(`Bắt đầu làm kỳ thi`);
      localStorage.setItem("examOnline",JSON.stringify(exam))
      window.location.href="../TestPage/testPage.html"
      
    }
  }else{
    alert(`Bắt đầu làm kỳ thi`);
    localStorage.setItem("examOnline",JSON.stringify(exam))
    window.location.href="../TestPage/testPage.html"
  }
  return
}

function logOut(){
  window.location.href="../index.html"
  localStorage.setItem("userLoggedIn",JSON.stringify({}))
  localStorage.setItem("examOnline",JSON.stringify({}))
}

function adminPage(){
  window.location.href="../Dashboard/dashBoard.html"
}