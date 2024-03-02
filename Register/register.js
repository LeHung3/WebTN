var registeredUsers=JSON.parse(localStorage.getItem("user")) || [];
function createAdmin(){
    if(registeredUsers.length===0){
        registeredUsers.push({
            userId:"B21DCCN611",
            username:"admin",
            email:"nnmhqn2003@gmail.com",
            password:"1",
            role:"admin"
        })
        localStorage.setItem("user",JSON.stringify(registeredUsers))
    }
}
async function registerUser (userId,username, email, password) {
    var newUser = {
        userId: userId,
        username: username,
        email: email,
        password: password,
        role:"user"
    };
    await registeredUsers.push(newUser);
}
function validateRegistration (userId,username, email) {
    if(registeredUsers===null){
        return true
    }
    for (var i = 0; i < registeredUsers.length; i++) {
        if(registeredUsers[i].userId===userId){
            return false
        }
        if (registeredUsers[i].username === username) {
            return false; // Username đã tồn tại
        }
        if (registeredUsers[i].email === email) {
            return false; // Email đã được sử dụng
        }
    }
    return true; // Thông tin đăng ký hợp lệ
}
document.getElementById("registerForm").addEventListener("submit", function(event){
    event.preventDefault()
    var userId=document.getElementById("registerUserId").value
    var username = document.getElementById("registerUsername").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if(password !== confirmPassword){
      alert("Passwords do not match. Please try again.");
      return;
    }
    else if(!validateRegistration(userId,username,password)){
        alert("Account already exists.");
      return;
    }
    else{
        try {
            registerUser(userId,username,email,password)
            var jsonRegisteredUsers = JSON.stringify(registeredUsers);
            localStorage.setItem('user', jsonRegisteredUsers);
            alert("Registration successful!");
            document.getElementById("registerUserId").value=""
            document.getElementById("registerUsername").value="";
            document.getElementById("registerEmail").value="";
            document.getElementById("registerPassword").value="";
            document.getElementById("confirmPassword").value="";
        } catch (error) {
            alert(error.message)
        }
    }
});