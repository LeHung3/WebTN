const exams=JSON.parse(localStorage.getItem("exam")) || []

function toggleTimePicker() {
    var examType = document.getElementById('examType').value;
    var timePickerContainer = document.getElementById('timePickerContainer');

    if (examType === 'Scheduled') {
        timePickerContainer.innerHTML = `
            <label for="examTime">Thời gian mở bài thi:</label>
            <input type="datetime-local" class="form-control" id="examTime" required>
        `;
    } else {
        timePickerContainer.innerHTML = '';
    }
}

function addQuestions() {
    var questionCount = parseInt(document.getElementById('questionCount').value);
    var questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = '';

    for (var i = 1; i <= questionCount; i++) {
        var questionDiv = document.createElement('div');
        questionDiv.classList.add('form-group');

        var question = document.createElement('div');
        question.className = 'question-div';
        question.innerHTML = `
        <div class="form-group">
            <label for="question${i}">Câu hỏi ${i}:</label>
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

document.getElementById('examForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var examId
    if(exams.length==0){
        examId=1
    }else{
        examId=parseInt(exams[exams.length-1].examId+1)
    }
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
        var question = {
            questionId: i,
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
        examId:examId,
        examName:examName,
        description:description,
        examType:examType,
        openTime: openTime,
        questions:questions
        
    };
    
    exams.push(addExam)
    try {
        var jsonExams = JSON.stringify(exams);
        localStorage.setItem('exam', jsonExams);
        window.location.reload()
        alert("Save successfully!")
        
    } catch (error) {
        alert(error.message)
    }
});  