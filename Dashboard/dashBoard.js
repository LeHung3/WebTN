function toggleForm(formId) {
    var formContainer = document.getElementById(formId);
    if (formContainer.style.display == "none") {
        formContainer.style.display = "block";
    } else {
        formContainer.style.display = "none";
    }
}
function returnHome(){
    window.location.href="dashBoard.html"
}