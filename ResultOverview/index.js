


// Mock data cho danh sách môn học
const courses = [
    { name: 'Math' },
    { name: 'History' },
    { name: 'Physics' },
    { name: 'Literature' },
    { name: 'Biology' },
    { name: 'Chemistry' }
    // Thêm các môn học khác vào đây
  ];
  
  // Function để tạo danh sách môn học
  function createCourseList() {
    const courseList = document.getElementById('course-list');
    courses.forEach(course => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `listStudent.html?courseName=${encodeURIComponent(course.name)}`;
        link.textContent = course.name;
        listItem.appendChild(link);
        courseList.appendChild(listItem);
    });
  }
  
  // Gọi hàm để tạo danh sách môn học khi trang được tải
  document.addEventListener('DOMContentLoaded', createCourseList);