var registeredUsers = JSON.parse(localStorage.getItem('user')) || [];
var userIdLoggedIn=""
function checkLogin (username,password) {
    if(registeredUsers===null){
        return false
    }
    for (var i = 0; i < registeredUsers.length; i++) {
        if(username === registeredUsers[i].username && password === registeredUsers[i].password){
            userIdLoggedIn=registeredUsers[i].userId
            return true
        }
    }
    return false
}

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form submission
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    if(checkLogin(username,password)){
        window.location.href = "../Home/home.html"
        localStorage.setItem("userLoggedIn",JSON.stringify({userId: userIdLoggedIn}))
    }
    else{
        alert("Invalid username or password. Please try again.")
    }
});
