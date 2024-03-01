
document.addEventListener('DOMContentLoaded', function () {
  const studentList = document.getElementById('studentList');
  const studentDetails = document.getElementById('studentDetails');
  const urlParams = new URLSearchParams(window.location.search);
  const examName = urlParams.get('courseName');

  // Tạo phần tử HTML để hiển thị tên bài thi môn
  const examInfo = document.getElementById('examInfo');
  if (examName) {
      examInfo.textContent = `Bài thi môn: ${examName}`;
  }
  // Mock data
  const students = [
      { id: '001', name: 'John', birthday: '1990-05-15', email: 'john@example.com', exams: [{ name: 'Math', score: 85 }, { name: 'Biology', score: 78 }] },
      { id: '002', name: 'Alice', birthday: '1990-05-15', email: 'john@example.com', exams: [{ name: 'History', score: 90 }, { name: 'Physics', score: 82 }] },
      { id: '003', name: 'Emma', birthday: '1990-05-15', email: 'john@example.com', exams: [{ name: 'Math', score: 42 }, { name: 'Literature', score: 42 }] },
      { id: '004', name: 'Michael', birthday: '1990-05-15', email: 'john@example.com', exams: [{ name: 'Math', score: 75 }, { name: 'Physics', score: 80 }] },
      { id: '005', name: 'Sophia', birthday: '1990-05-15', email: 'john@example.com', exams: [{ name: 'Literature', score: 75 }, { name: 'Physics', score: 80 }] },
      { id: '006', name: 'James', birthday: '1990-05-15', email: 'john@example.com', exams: [{ name: 'Chemistry', score: 45 }, { name: 'Physics', score: 24 }] },
      { id: '007', name: 'Olivia', birthday: '1990-05-15', email: 'john@example.com', exams: [{ name: 'Math', score: 12 }, { name: 'Biology', score: 55 }] },
      { id: '008', name: 'Emily', birthday: '1990-05-15', email: 'john@example.com', birthday: '1990-05-15', email: 'john@example.com', exams: [{ name: 'History', score: 43 }, { name: 'Chemistry', score: 66 }] },
      { id: '009', name: 'Alexander', birthday: '1990-05-15', email: 'john@example.com', exams: [{ name: 'Math', score: 56 }, { name: 'Biology', score: 80 }] },
      { id: '010', name: 'Daniel', birthday: '1990-05-15', email: 'john@example.com', exams: [{ name: 'Chemistry', score: 59 }, { name: 'Physics', score: 78 }] },
      { id: '011', name: 'Mia', birthday: '1990-05-15', email: 'john@example.com', exams: [{ name: 'History', score: 75 }, { name: 'Literature', score: 86 }] },
  ];

  // Function to populate student list
  function populateStudentList() {
      students.forEach(student => {
          const studentItem = document.createElement('div');
          studentItem.classList.add('student-item');
          studentItem.innerHTML = `
              <div class="student-info">
                  <h3>${student.name}</h3>
                  <p><strong>Mã sinh viên:</strong>  B21DCCN${student.id}</p>
                  <p><strong>Email:</strong> ${student.email}</p>
                  <p><strong>Ngày sinh:</strong> ${student.birthday}</p>
              </div>
          `;
          studentItem.addEventListener('click', function () {
              showStudentDetails(student);
          });
          studentList.appendChild(studentItem);
      });
  }

  // Function to show student details
  function showStudentDetails(student) {
      studentDetails.innerHTML = `
          <h2>${student.name}</h2>
          <ul>
              ${student.exams.map(exam => `<li>${exam.name}: ${exam.score}</li>`).join('')}
          </ul>
      `;
      studentDetails.style.display = 'flex';
      const examNames = student.exams.map(exam => exam.name);
      // Redirect to exam page with student id and exam name as query parameters
      window.location.href = `exam.html?studentName=${student.name}&examName=${examNames[0]}`;
  }
  // Populate student list on page load
  populateStudentList();
});