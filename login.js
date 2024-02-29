
function checkLogin (username,password, registeredUsers) {
    //check length truoc
    for (var i = 0; i < registeredUsers.length; i++) {
        if(username === registeredUsers[i].username && password === registeredUsers[i].password){
            alert("Login successful!");
        } else {
            alert("Invalid username or password. Please try again.");
        }
    }
}

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form submission
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    var arrayString  = localStorage.getItem('data');
    var registeredUsers = JSON.parse(arrayString);
    checkLogin (username,password,registeredUsers)
    // Validate username and password (demo)
});

