var registeredUsers = JSON.parse(localStorage.getItem('data'));
function checkLogin(username, password) {
    if (registeredUsers === null || registeredUsers.length === 0) alert("Do not have an account? Please register")
    for (var i = 0; i < registeredUsers.length; i++) {
        if (username === registeredUsers[i].username && password === registeredUsers[i].password) {
            return true
        }
    }
    return false
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    getData()
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    checkLogin(username, password) ? window.location.href = "../Home/home.html" : alert("Invalid username or password. Please try again.")
});
