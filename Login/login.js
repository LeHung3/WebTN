var registeredUsers = JSON.parse(localStorage.getItem('user')) || [];
var userIdLoggedIn=""
function checkLogin (userId,password) {
    if(registeredUsers===null){
        return false
    }
    for (var i = 0; i < registeredUsers.length; i++) {
        if(userId === registeredUsers[i].userId && password === registeredUsers[i].password){
            userIdLoggedIn=registeredUsers[i].userId
            return true
        }
    }
    return false
}

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form submission
    var userId = document.getElementById("loginUserId").value;
    var password = document.getElementById("loginPassword").value;
    if(checkLogin(userId,password)){
        window.location.href = "../Home/home.html"
        localStorage.setItem("userLoggedIn",JSON.stringify({userId: userIdLoggedIn}))
    }
    else{
        alert("Invalid username or password. Please try again.")
    }
});
