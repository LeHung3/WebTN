document.addEventListener('DOMContentLoaded', function () {
    const statisticsTable = document.getElementById('statisticsTable');
    const monthSelect = document.getElementById('monthSelect');
    const examSelect = document.getElementById('examSelect');
    const exportExcelBtn = document.getElementById('exportExcel');

    // Mock data
    const scoreData = [
            { studentId: 'B21DCCN001', student: 'John', score: 85, participation: 10, completionRate: 80, exam: 'Exam 1', month: '2024-04' },
            { studentId: 'B21DCCN002', student: 'Alice', score: 75, participation: 12, completionRate: 70, exam: 'Exam 2', month: '2024-07' },
            { studentId: 'B21DCCN003', student: 'Bob', score: 90, participation: 15, completionRate: 90, exam: 'Exam 3', month: '2024-01' },
            { studentId: 'B21DCCN004', student: 'Jane', score: 80, participation: 8, completionRate: 75, exam: 'Exam 1', month: '2024-11' },
            { studentId: 'B21DCCN005', student: 'Tom', score: 95, participation: 14, completionRate: 85, exam: 'Exam 4', month: '2024-05' },
            { studentId: 'B21DCCN006', student: 'Emily', score: 88, participation: 11, completionRate: 85, exam: 'Exam 6', month: '2024-06' },
            { studentId: 'B21DCCN007', student: 'David', score: 70, participation: 9, completionRate: 60, exam: 'Exam 5', month: '2024-02' },
            { studentId: 'B21DCCN008', student: 'Sarah', score: 82, participation: 13, completionRate: 70, exam: 'Exam 3', month: '2024-09' },
            { studentId: 'B21DCCN009', student: 'Michael', score: 91, participation: 16, completionRate: 95, exam: 'Exam 2', month: '2024-08' },
            { studentId: 'B21DCCN010', student: 'Emma', score: 78, participation: 11, completionRate: 75, exam: 'Exam 5', month: '2024-03' },
            { studentId: 'B21DCCN011', student: 'William', score: 83, participation: 14, completionRate: 80, exam: 'Exam 4', month: '2024-10' },
            { studentId: 'B21DCCN012', student: 'Olivia', score: 87, participation: 12, completionRate: 90, exam: 'Exam 5', month: '2024-04' },
            { studentId: 'B21DCCN013', student: 'Linh', score: 90, participation: 15, completionRate: 90, exam: 'Exam 7', month: '2024-01' },
            { studentId: 'B21DCCN014', student: 'Quan', score: 77, participation: 8, completionRate: 75, exam: 'Exam 2', month: '2024-02' },
            { studentId: 'B21DCCN015', student: 'Dung', score: 24, participation: 14, completionRate: 85, exam: 'Exam 4', month: '2024-03' },
            { studentId: 'B21DCCN016', student: 'Cuong', score: 55, participation: 11, completionRate: 85, exam: 'Exam 3', month: '2024-06' },
            { studentId: 'B21DCCN017', student: 'Thinh', score: 78, participation: 9, completionRate: 60, exam: 'Exam 1', month: '2024-02' },
            { studentId: 'B21DCCN018', student: 'Hieu', score: 66, participation: 13, completionRate: 70, exam: 'Exam 6', month: '2024-09' },
            { studentId: 'B21DCCN019', student: 'Minh', score: 98, participation: 16, completionRate: 95, exam: 'Exam 6', month: '2024-12' }
    ];

    // Function to display statistics
    function displayStatistics(data) {
        let filteredData = data;
        if (monthSelect.value !== '' && examSelect.value === 'all') {
            // Filter data by selected month
            console.log('🚀 ~ displayStatistics ~ monthSelect.value:', monthSelect.value)
            filteredData = scoreData.filter(item => item.month === monthSelect.value);
        }
        if (examSelect.value !== 'all' && monthSelect.value === '') {
            // Filter data by selected exam
            filteredData = scoreData.filter(item => item.exam === examSelect.value);
        }
        if (examSelect.value !== 'all' && monthSelect.value !== '') {
            console.log('🚀 ~ displayStatistics ~ monthSelect.value:', monthSelect.value)
            filteredData = scoreData.filter(item => item.month === monthSelect.value && item.exam === examSelect.value);
        }

        let tableHTML = `
            <table>
                <tr>
                    <th>StudentId</th>
                    <th>Student</th>
                    <th>Score</th>
                    <th>Participation</th>
                    <th>Completion Rate (%)</th>
                    <th>Exam</th>
                    <th>Month</th>
                </tr>
        `;
        filteredData.forEach(item => {
            tableHTML += `
                <tr>
                    <td>${item.studentId}</td>
                    <td>${item.student}</td>
                    <td>${item.score}</td>
                    <td>${item.participation}</td>
                    <td>${item.completionRate}</td>
                    <td>${item.exam}</td>
                    <td>${item.month}</td>
                </tr>
            `;
        });
        tableHTML += `</table>`;
        statisticsTable.innerHTML = tableHTML;
    }

    // Initial display
    displayStatistics(scoreData);

    // Event listener for month selection
    monthSelect.addEventListener('change', function () {
        displayStatistics(scoreData);
    });

    // Event listener for exam selection
    examSelect.addEventListener('change', function () {
        displayStatistics(scoreData);
    });

    // Event listener for export to Excel button
    exportExcelBtn.addEventListener('click', function () {
        exportToExcel(scoreData);
    });

    // Function to export data to Excel
    function exportToExcel(scoreData) {
        // Tạo một workbook
        var wb = XLSX.utils.book_new();
        // Tạo một worksheet từ dữ liệu
        var ws = XLSX.utils.json_to_sheet(scoreData);
        // Thêm worksheet vào workbook
        XLSX.utils.book_append_sheet(wb, ws, "Scores");
        // Tạo tệp Excel
        var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
        // Chuyển đổi tệp Excel sang dạng dữ liệu bin
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        // Tạo Blob từ dạng bin của tệp Excel
        var blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
        // Tạo URL cho Blob và tải tệp Excel
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "scores.xlsx";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
});

function returnHome(){
    window.location.href="../Dashboard/dashBoard.html"
}
