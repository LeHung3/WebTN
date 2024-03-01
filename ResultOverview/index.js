document.addEventListener('DOMContentLoaded', function () {
    const studentList = document.getElementById('studentList');
    const studentDetails = document.getElementById('studentDetails');

    // Mock data
    const students = [
        { id: 1, name: 'John', exams: [{ name: 'Math', score: 85 }, { name: 'Biology', score: 78 }] },
        { id: 2, name: 'Alice', exams: [{ name: 'History', score: 90 }, { name: 'Physics', score: 82 }] },
        { id: 3, name: 'Emma', exams: [{ name: 'Math', score: 42 }, { name: 'Literature', score: 42 }] },
        { id: 3, name: 'Michael', exams: [{ name: 'Math', score: 75 }, { name: 'Physics', score: 80 }] },
        { id: 3, name: 'Sophia', exams: [{ name: 'Literature', score: 75 }, { name: 'Physics', score: 80 }] },
        { id: 3, name: 'James', exams: [{ name: 'Chemistry', score: 45 }, { name: 'Physics', score: 24 }] },
        { id: 3, name: 'Olivia', exams: [{ name: 'Math', score: 12 }, { name: 'Biology', score: 55 }] },
        { id: 3, name: 'Emily', exams: [{ name: 'History', score: 43 }, { name: 'Chemistry', score: 66 }] },
        { id: 3, name: 'Alexander', exams: [{ name: 'Math', score: 56 }, { name: 'Biology', score: 80 }] },
        { id: 3, name: 'Daniel', exams: [{ name: 'Chemistry', score: 59 }, { name: 'Physics', score: 78 }] },
        { id: 3, name: 'Mia', exams: [{ name: 'History', score: 75 }, { name: 'Literature', score: 86 }] },
    ];

    // Function to populate student list
    function populateStudentList() {
        students.forEach(student => {
            const studentItem = document.createElement('div');
            studentItem.classList.add('student-item');
            studentItem.textContent = student.name;
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
        studentDetails.style.display = 'block';
        const examNames = student.exams.map(exam => exam.name);
        // Redirect to exam page with student id and exam name as query parameters
        window.location.href = `exam.html?studentId=${student.id}&examName=${examNames[0]}`;
    }

    // Populate student list on page load
    populateStudentList();
});