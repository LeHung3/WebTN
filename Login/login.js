var registeredUsers = JSON.parse(localStorage.getItem('data'));
function checkLogin (username,password) {
    for (var i = 0; i < registeredUsers.length; i++) {
        if(username === registeredUsers[i].username && password === registeredUsers[i].password){
            return true
        }
    }
    return false
}

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form submission
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    checkLogin(username,password) ? window.location.href = "../Home/home.html":alert("Invalid username or password. Please try again.")
});
