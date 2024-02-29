
async function registerUser(username, email, password) {
    var registeredUsers = JSON.parse(localStorage.getItem("data")) || [];
    var newUser = {
        username: username,
        email: email,
        password: password
    };
    console.log('🚀 ~ registerUser ~ newUser:', newUser)
    await registeredUsers.push(newUser);
    var jsonRegisteredUsers = JSON.stringify(registeredUsers);
    console.log('🚀 ~ registerUser ~ jsonRegisteredUsers:', jsonRegisteredUsers)
    localStorage.setItem('data', jsonRegisteredUsers);
}
function validateRegistration(username, email) {
    var registeredUsers = JSON.parse(localStorage.getItem("data")) || [];
    if (registeredUsers===null || registeredUsers.length===0) return true
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
document.getElementById("registerForm").addEventListener("submit", async function (event) {
    event.preventDefault()
    var registeredUsers = JSON.parse(localStorage.getItem("data")) || [];
    var username = document.getElementById("registerUsername").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (!username || !email || !password || !confirmPassword) alert("Please fill in completely")
    else if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }
    else if (!validateRegistration(username, password)) {
        alert("Account already exists.");
        return;
    }
    else {
        alert("Registration successful!");
        await registerUser(username, email, password)
    }
});
