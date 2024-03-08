var exams=JSON.parse(localStorage.getItem("exam")) || []
var questions = [];
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
        <hr>
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
    var questionsLocal=[]
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
        questionsLocal.push(question);
    }
    questions=questionsLocal
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
        window.location.href="showExam.html"
    } catch (error) {
        alert(error.message)
    }
});  


document.getElementById('fileInput').addEventListener('change', handleFileInputChange);
function handleFileInputChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        // Chuyển đổi sheet đầu tiên sang định dạng CSV
        const firstSheetName = workbook.SheetNames[0];
        const csvData = XLSX.utils.sheet_to_csv(workbook.Sheets[firstSheetName]);
        questionsCSVToJSON(csvData);
    };
    reader.readAsArrayBuffer(file);
}
function questionsCSVToJSON(csvData) {
    // Tách dữ liệu CSV thành các dòng
    const lines = csvData.split('\n');
    var questionsLocal=[]
    // Duyệt qua từng dòng của dữ liệu CSV

    lines.forEach((line, index) => {
        // Tách dữ liệu trong dòng thành các cột
        const columns = line.split(',')
        if(index>0){
            var ques={
                questionId: 0,
                question:"",
                correctAnswer:"",
                answers:{
                    A:"",
                    B:"",
                    C:"",
                    D:""
                }
            }
            
            columns.forEach((columnData, columnIndex) => {
                if(columnIndex==0){
                    ques.questionId=parseInt(columnData)
                }else if(columnIndex==1){
                    ques.question=columnData
                }else if(columnIndex==2){
                    ques.answers.A=columnData
                }else if(columnIndex==3){
                    ques.answers.B=columnData
                }else if(columnIndex==4){
                    ques.answers.C=columnData
                }else if(columnIndex==5){
                    ques.answers.D=columnData
                }else if(columnIndex==6){
                    ques.correctAnswer=columnData
                }
            });
            questionsLocal.push(ques)
        }
    });
    questionsLocal.pop()
    questions=questionsLocal
}

document.getElementById('fileInput').addEventListener('click', function() {
    var addQuestion = document.getElementById('addQuestion');
    addQuestion.disabled = true;
    document.getElementById('questionCount').disabled=true
});

document.getElementById('addQuestion').addEventListener('click', function() {
    var fileInput = document.getElementById('fileInput');
    fileInput.disabled = true;
    document.getElementById('addQuestion').disabled=true
    document.getElementById('questionCount').disabled=true
});

