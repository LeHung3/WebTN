
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var userId = urlParams.get('userId');
var users = JSON.parse(localStorage.getItem("user"))||[];
var user = users.find(function (u) {
    return u.userId === userId;
});

function deleteUser(){
    for(let i = 0; i < users.length; i++) {
        if (users[i].userId == userId) {
            users.splice(i, 1);
            break
        }
    }
    try {
        var jsonUsers = JSON.stringify(users);
        localStorage.setItem('user', jsonUsers);
        alert("Delete successfully!")
        window.location.href="../User/showUser.html"
    } catch (error) {
        alert(error.message)
    }
}

if(user){
    var userDetailsElement = document.getElementById("userDetails");
    userDetailsElement.innerHTML = `
        
        <div class="form-group">
            <label for="username">UserId:</label>
            <input type="text" class="form-control" id="userId" value="${userId}" required readonly>
        </div>
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" class="form-control" id="username" value="${user.username}" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" class="form-control" id="email" value="${user.email}" required>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="text" class="form-control" id="password" value="${user.password}" required>
        </div>
        
        <div class="form-group">
            <label for="role">Role:</label>
            <select id="role" name="role" class="form-control" required>
                <option value="user" ${user.role==='user'? 'selected':''}>user</option>
                <option value="admin" ${user.role==='admin'? 'selected':''}>admin</option>
            </select>
        </div>
        <div>
            <button onclick="deleteUser()" class="btn btn-danger custom-small-button">Delete</button>
        </div>
        <hr>
        <button type="button" class="btn btn-primary btn-sm" onclick="saveChanges()">Save Changes</button>
    `;
}else{
    alert("Error!")
}

function saveChanges() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var role = document.getElementById("role").value;
    var username = document.getElementById("username").value;
  
    // Kiểm tra xem userId có tồn tại trong localStorage không
    if (users) {
        if (user) {
            // Cập nhật thông tin người dùng trong mảng users
            user.email = email;
            user.password = password;
            user.role = role;
            user.username = username;
  
            // Lưu lại mảng users vào localStorage
            localStorage.setItem("user", JSON.stringify(users));
            
            var userDetailsElement = document.getElementById("userDetails");
            userDetailsElement.innerHTML = "<p>Changes saved successfully.</p>";
        } else {
            // Hiển thị thông báo nếu không tìm thấy userId trong localStorage
            var userDetailsElement = document.getElementById("userDetails");
            userDetailsElement.innerHTML = "<p>User not found.</p>";
        }
    } else {
        var userDetailsElement = document.getElementById("userDetails");
        userDetailsElement.innerHTML = "<p>No user data found.</p>";
    }
}
