const exams = [
    { name: 'Luyện tập', status: 'free-access' },
    { name: 'Giữa kỳ', status: 'scheduled', time: '2024-03-01T12:00:00' },
    // Thêm bài thi khác nếu cần
  ];
  
  function renderExams() {
    const examList = document.getElementById('examList');
  
    exams.forEach(exam => {
      const examItem = document.createElement('div');
      examItem.classList.add('exam-item');
      examItem.dataset.status = exam.status;
  
      const heading = document.createElement('h2');
      heading.textContent = exam.name;
  
      const statusParagraph = document.createElement('p');
      if (exam.status === 'scheduled') {
        statusParagraph.textContent = `Trạng thái: Đã lên lịch (${exam.time})`;
      } else {
        statusParagraph.textContent = 'Trạng thái: Có thể truy cập tự do';
      }
  
      const startButton = document.createElement('a');
      startButton.href = '#';
      startButton.classList.add('start-exam-btn');
      startButton.textContent = 'Bắt đầu làm';
      startButton.onclick = () => startExam(exam);
  
      examItem.appendChild(heading);
      examItem.appendChild(statusParagraph);
      examItem.appendChild(startButton);
  
      examList.appendChild(examItem);
    });
  }
  
  function filterExams() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const examItems = document.querySelectorAll('.exam-item');
  
    examItems.forEach(item => {
      const examName = item.querySelector('h2').innerText.toLowerCase();
      if (examName.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  function startExam(exam) {
    if (exam.status === 'scheduled') {
      const currentTime = new Date();
      const scheduledTime = new Date(exam.time);
  
      if (currentTime < scheduledTime) {
        alert(`Bài thi "${exam.name}" chưa mở làm. Vui lòng quay lại vào thời gian đã lên lịch.`);
        return;
      }
    }
  
    alert(`Bắt đầu làm kỳ thi: ${exam.name}`);
    // Redirect to the exam page or handle other logic
  }
  
  // Gọi hàm renderExams để hiển thị danh sách bài thi khi trang được tải
  window.onload = renderExams;