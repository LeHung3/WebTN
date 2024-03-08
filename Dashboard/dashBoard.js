function toggleForm(formId) {
    var formContainer = document.getElementById(formId);
    if (formContainer.style.display == "none") {
        formContainer.style.display = "block";
    } else {
        formContainer.style.display = "none";
    }
}
function showExam() {
    var examDashboard = document.getElementById("examDashBoard");
    var ListObjectExam = JSON.parse(localStorage.getItem("exam"));
    ListObjectExam.forEach(function (examOject, index) {
        var examInfo = document.createElement('div');
        examInfo.classList.add('exam-info');

        var info = document.createElement('div');
        info.classList.add("info");

        var infoLabel = document.createElement('p');
        infoLabel.textContent = "Tên bài thi: " + examOject["examName"];

        info.appendChild(infoLabel);

        var infoLabel = document.createElement('p');
        infoLabel.textContent = "Mô tả: " + examOject["description"];

        info.appendChild(infoLabel);

        examInfo.appendChild(info);

        examInfo.addEventListener('click', function () {
            window.location.href = 'editExam.html?examId=' + examOject["examId"];
        });
        examDashboard.appendChild(examInfo);
    });
    examDashboard.style.display = 'block';
}