document.addEventListener('DOMContentLoaded', function () {
    const statisticsTable = document.getElementById('statisticsTable');
    const monthSelect = document.getElementById('monthSelect');
    const examSelect = document.getElementById('examSelect');
    const exportExcelBtn = document.getElementById('exportExcel');

    // Mock data
    const scoreData = [
        { student: 'John', score: 85, participation: 10, completionRate: 80, exam: 'Exam 1', month: '2024-04' },
        { student: 'Alice', score: 75, participation: 12, completionRate: 70, exam: 'Exam 2', month: '2024-07' },
        { student: 'Bob', score: 90, participation: 15, completionRate: 90, exam: 'Exam 3', month: '2024-01' },
        { student: 'Jane', score: 80, participation: 8, completionRate: 75, exam: 'Exam 1', month: '2024-11' },
        { student: 'Tom', score: 95, participation: 14, completionRate: 85, exam: 'Exam 4', month: '2024-05' },
        { student: 'Emily', score: 88, participation: 11, completionRate: 85, exam: 'Exam 6', month: '2024-06' },
        { student: 'David', score: 70, participation: 9, completionRate: 60, exam: 'Exam 5', month: '2024-02' },
        { student: 'Sarah', score: 82, participation: 13, completionRate: 70, exam: 'Exam 3', month: '2024-09' },
        { student: 'Michael', score: 91, participation: 16, completionRate: 95, exam: 'Exam 2', month: '2024-08' },
        { student: 'Emma', score: 78, participation: 11, completionRate: 75, exam: 'Exam 5', month: '2024-03' },
        { student: 'William', score: 83, participation: 14, completionRate: 80, exam: 'Exam 4', month: '2024-10' },
        { student: 'Olivia', score: 87, participation: 12, completionRate: 90, exam: 'Exam 5', month: '2024-04' },
        { student: 'Linh', score: 90, participation: 15, completionRate: 90, exam: 'Exam 7', month: '2024-01' },
        { student: 'Quan', score: 77, participation: 8, completionRate: 75, exam: 'Exam 2', month: '2024-02' },
        { student: 'Dung', score: 24, participation: 14, completionRate: 85, exam: 'Exam 4', month: '2024-03' },
        { student: 'Cuong', score: 55, participation: 11, completionRate: 85, exam: 'Exam 3', month: '2024-06' },
        { student: 'Thinh', score: 78, participation: 9, completionRate: 60, exam: 'Exam 1', month: '2024-02' },
        { student: 'Hieu', score: 66, participation: 13, completionRate: 70, exam: 'Exam 6', month: '2024-09' },
        { student: 'Minh', score: 98, participation: 16, completionRate: 95, exam: 'Exam 6', month: '2024-12' },

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
    function exportToExcel(data) {
        alert("Success!")
    }
});
