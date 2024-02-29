var registeredUsers=JSON.parse(localStorage.getItem("data"));
function registerUser (username, email, password) {
    var newUser = {
        username: username,
        email: email,
        password: password
    };
    registeredUsers.push(newUser);
}
function validateRegistration (username, email) {
    // Kiểm tra xem username hoặc email đã được sử dụng chưa
    for (var i = 0; i < registeredUsers.length; i++) {
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
    var username = document.getElementById("registerUsername").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if(password !== confirmPassword){
      alert("Passwords do not match. Please try again.");
      return;
    }
    else if(!validateRegistration(username,password)){
        alert("Account already exists.");
      return;
    }
    else{
        alert("Registration successful!");
        registerUser(username,email,password)
        var jsonRegisteredUsers = JSON.stringify(registeredUsers);
        localStorage.setItem('data', jsonRegisteredUsers);
    }
});