const exams = JSON.parse(localStorage.getItem("exam")) || []
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var examId = urlParams.get('examId');
var exam = exams.find(function(item) {
    if(item.examId == examId){
        return item
    }
});
var examDetailsContainer = document.getElementById('examDetails');
if (exam) {
    examDetailsContainer.innerHTML = `
        <form id="editExamForm">
            <div>
                <button type="button" onclick="deleteExam()" class="btn btn-danger custom-small-button">Xóa bài thi</button>
            </div>
            <div class="form-group">
                <label for="examId">Exam ID:</label>
                <input type="text" class="form-control" id="examId" value="${exam.examId}" readonly>
            </div>
            <div class="form-group">
                <label for="examName">Exam Name:</label>
                <input type="text" class="form-control" id="examName" value="${exam.examName}" required>
            </div>
            <div class="form-group">
                <label for="description">Description:</label>
                <textarea class="form-control" id="description" rows="3">${exam.description}</textarea>
            </div>
            <div class="form-group">
                <label for="examType">Exam Type:</label>
                <select class="form-control" id="examType" required>
                    <option value="Free-access" ${exam.examType === 'Free-access' ? 'selected' : ''}>Free-access</option>
                    <option value="Scheduled" ${exam.examType === 'Scheduled' ? 'selected' : ''}>Scheduled</option>
                </select>
            </div>
            <div class="form-group" id="timePickerContainer"></div>
            <div class="form-group">
                <label for="questionCount">Số câu hỏi:</label>
                <input type="number" class="form-control" id="questionCount" min="1" value="${exam.questions.length}">
            </div>
            <button type="button" class="btn btn-primary custom-small-button" onclick="addQuestions()" id="addQuestion">Thêm câu hỏi</button>
            <div class="form-group" id="questionContainer"></div>
            <hr>
            <button type="button" class="btn btn-success custom-small-button" onclick="submitExam()">Lưu thay đổi</button>
        </form>
    `;
    var examTypeSelect = document.getElementById('examType');
    if(examTypeSelect.value=="Scheduled"){
        timePickerContainer.innerHTML=`
                <label for="openTime">Open Time:</label>
                <input type="datetime-local" class="form-control" id="examTime" value="${exam.openTime}" required>
        `;
    }
    examTypeSelect.addEventListener('change',function(){
        var timePickerContainer = document.getElementById('timePickerContainer');
        if (examTypeSelect.value == 'Scheduled') {
            timePickerContainer.innerHTML = `
                <label for="examTime">Open time:</label>
                <input type="datetime-local" class="form-control" id="examTime" value="${exam.openTime}" required>
            `;
        } else {
            timePickerContainer.innerHTML = '';
        }
    })
    var questionCount = exam.questions.length;
    var questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = '';
    for (var i = 1; i <= questionCount; i++) {
        var questionDiv = document.createElement('div');
        questionDiv.classList.add('form-group');

        var question = document.createElement('div');
        question.className = 'question-div';
        question.innerHTML = `
        <div id="${exam.questions[i-1].questionId}">
            <hr>
            <div class="form-group">
                <label for="question${i}">Mã câu: ${exam.questions[i-1].questionId}</label>
                <input type="text" id="question${i}" name="question${i}" class="form-control" value="${exam.questions[i-1].question}" required>
            </div>
            <div class="form-group">
                <label for="answer${i}">Đáp án A:</label>
                <input type="text" id="answer${i}A" name="answer${i}A" class="form-control" value="${exam.questions[i-1].answers.A}" required>
            </div>
            <div class="form-group">
                <label for="answer${i}">Đáp án B:</label>
                <input type="text" id="answer${i}B" name="answer${i}B" class="form-control" value="${exam.questions[i-1].answers.B}" required>
            </div>
            <div class="form-group">
                <label for="answer${i}">Đáp án C:</label>
                <input type="text" id="answer${i}C" name="answer${i}C" class="form-control" value="${exam.questions[i-1].answers.C}" required>
            </div>
            <div class="form-group">
                <label for="answer${i}">Đáp án D:</label>
                <input type="text" id="answer${i}D" name="answer${i}D" class="form-control" value="${exam.questions[i-1].answers.D}" required>
            </div>
            <div class="form-group">
                <label for="correctAnswer${i}">Câu trả lời đúng:</label>
                <select id="correctAnswer${i}" name="correctAnswer${i}" class="form-control" required>
                    <option value="A" ${exam.questions[i-1].correctAnswer==='A'? 'selected':''}>A</option>
                    <option value="B" ${exam.questions[i-1].correctAnswer==='B'? 'selected':''}>B</option>
                    <option value="C" ${exam.questions[i-1].correctAnswer==='C'? 'selected':''}>C</option>
                    <option value="D" ${exam.questions[i-1].correctAnswer==='D'? 'selected':''}>D</option>
                </select>
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-danger custom-small-button" onclick="deleteQuestion(${exam.questions[i-1].questionId})">Xóa câu hỏi</button>
            </div>
        </div>
        `;
        questionDiv.appendChild(question)
        questionContainer.appendChild(questionDiv);
    }
} else {
    examDetailsContainer.innerHTML=""
    alert('Không tìm thấy kỳ thi.');
}

function deleteExam(){
    for(let i = 0; i < exams.length; i++) {
        if (exams[i].examId == examId) {
            exams.splice(i, 1);
            break
        }
    }
    try {
        var jsonExams = JSON.stringify(exams);
        localStorage.setItem('exam', jsonExams);
        alert("Delete successfully!")
        window.location.href="showExam.html"
    } catch (error) {
        alert(error.message)
    }
}

function deleteQuestion(questionId){
    for (let i = 0; i < exam.questions.length; i++) {
        if (exam.questions[i].questionId == questionId) {
            exam.questions.splice(i, 1);
            var questionElement = document.getElementById(`${questionId}`);
            if (questionElement) {
                questionElement.style.display = "none";
            }
            saveExam(exam)
            window.location.reload()
            break
        }
    }
}

function addQuestions() {
    var questionCountStart=exam.questions.length
    var questionCount = parseInt(document.getElementById('questionCount').value);
    var questionContainer = document.getElementById('questionContainer');
    for (var i = questionCountStart+1; i <= questionCount; i++) {
        var questionDiv = document.createElement('div');
        questionDiv.classList.add('form-group');
        var question = document.createElement('div');
        question.className = 'question-div';
        question.innerHTML += `
        <hr>
        <div class="form-group">
            <label for="questionId${i}">Mã câu:</label>
            <input type="text" id="questionId${i}" name="questionId${i}" class="form-control" required>
        </div>
        <div class="form-group">
        <label for="question${i}">Cau hoi ${i}:</label>
            <input type="text" id="question${i}" name="question${i}" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="answer${i}">Đáp án A:</label>
            <input type="text" id="answer${i}A" name="answer${i}A" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="answer${i}">Đáp án B:</label>
            <input type="text" id="answer${i}B" name="answer${i}B" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="answer${i}">Đáp án C:</label>
            <input type="text" id="answer${i}C" name="answer${i}C" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="answer${i}">Đáp án D:</label>
            <input type="text" id="answer${i}D" name="answer${i}D" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="correctAnswer${i}">Câu trả lời đúng:</label>
            <select id="correctAnswer${i}" name="correctAnswer${i}" class="form-control" required>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            </select>
        </div>
        `;
        questionDiv.appendChild(question)
        questionContainer.appendChild(questionDiv);
    }
}
function submitExam(){
    var examName = document.getElementById('examName').value;
    var description = document.getElementById('description').value;
    var examType = document.getElementById('examType').value;
    var openTime
    try {
        openTime = document.getElementById('examTime').value
    } catch (error) {
        openTime=null
    }
    var questionCount = parseInt(document.getElementById('questionCount').value);
    var questions = [];

    for (var i = 1; i <= questionCount; i++) {
        var quesId
        try {
            quesId=exam.questions[i-1].questionId
        } catch (error) {
            quesId=parseInt(document.getElementById(`questionId${i}`).value)
        }
        var question = {
            questionId: quesId,
            question: document.getElementById(`question${i}`).value,
            answers: {
                A: document.getElementById(`answer${i}A`).value,
                B: document.getElementById(`answer${i}B`).value,
                C: document.getElementById(`answer${i}C`).value,
                D: document.getElementById(`answer${i}D`).value
            },
            correctAnswer: document.getElementById(`correctAnswer${i}`).value
        };
        questions.push(question);
    }

    var addExam={
        examId:parseInt(examId),
        examName:examName,
        description:description,
        examType:examType,
        openTime: openTime,
        questions:questions
    };
    saveExam(addExam)
    examDetailsContainer.innerHTML=""
}
function saveExam(addExam){
    for (let i = 0; i < exams.length; i++) {
        if (exams[i].examId == examId) {
            exams.splice(i, 1);
            break
        }
    }
    exams.push(addExam)
    try {
        var jsonExams = JSON.stringify(exams);
        localStorage.setItem('exam', jsonExams);
        alert("Save change successfully!")
        window.location.href="showExam.html"
    } catch (error) {
        alert(error.message)
    }
}

document.getElementById('addQuestion').addEventListener('click', function() {
    document.getElementById('addQuestion').disabled=true
    document.getElementById('questionCount').disabled=true
});