function toggleForm(formId) {
    var formContainer = document.getElementById(formId);
    if (formContainer.style.display == "none") {
        formContainer.style.display = "block";
    } else {
        formContainer.style.display = "none";
    }
}
function returnHome(){
    window.location.href="../Home/home.html"
}

// function showUser(){
//     document.getElementById("dashBoard").style.display="none"
//     window.location.reload()
//     document.getElementById("showUser").style.display="block"
//     document.getElementById("addUser").style.display="none"
//     document.getElementById("showExam").style.display="none"
//     document.getElementById("addExam").style.display="none"
//     document.getElementById("statisticPage").style.display="none"
//     document.getElementById("resultOverview").style.display="none"
// }

// function addUser(){
//     document.getElementById("dashBoard").style.display="none"
//     window.location.reload()
//     document.getElementById("showUser").style.display="none"
//     document.getElementById("addUser").style.display="block"
//     document.getElementById("showExam").style.display="none"
//     document.getElementById("addExam").style.display="none"
//     document.getElementById("statisticPage").style.display="none"
//     document.getElementById("resultOverview").style.display="none"
// }

// function showExam(){
//     document.getElementById("dashBoard").style.display="none"
//     window.location.reload()
//     document.getElementById("showUser").style.display="none"
//     document.getElementById("addUser").style.display="none"
//     document.getElementById("showExam").style.display="block"
//     document.getElementById("addExam").style.display="none"
//     document.getElementById("statisticPage").style.display="none"
//     document.getElementById("resultOverview").style.display="none"
// }

// function addExam(){
//     document.getElementById("dashBoard").style.display="none"
//     window.location.reload()
//     document.getElementById("showUser").style.display="none"
//     document.getElementById("addUser").style.display="none"
//     document.getElementById("showExam").style.display="none"
//     document.getElementById("addExam").style.display="block"
//     document.getElementById("statisticPage").style.display="none"
//     document.getElementById("resultOverview").style.display="none"
// }

// function statisticPage(){
//     document.getElementById("dashBoard").style.display="none"
//     window.location.reload()
//     document.getElementById("showUser").style.display="none"
//     document.getElementById("addUser").style.display="none"
//     document.getElementById("showExam").style.display="none"
//     document.getElementById("addExam").style.display="none"
//     document.getElementById("statisticPage").style.display="block"
//     document.getElementById("resultOverview").style.display="none"
// }

// function resultOverview(){
//     document.getElementById("dashBoard").style.display="none"
//     window.location.reload()
//     document.getElementById("showUser").style.display="none"
//     document.getElementById("addUser").style.display="none"
//     document.getElementById("showExam").style.display="none"
//     document.getElementById("addExam").style.display="none"
//     document.getElementById("statisticPage").style.display="none"
//     document.getElementById("resultOverview").style.display="block"
// }