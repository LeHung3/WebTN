const userId = JSON.parse(localStorage.getItem("userLoggedIn")) || []
const users=JSON.parse(localStorage.getItem("user")) || []
const userData=users.find(function(user){
  if(user.userId==userId.userId){
    return user
  }
})

window.onload = function() {
  document.getElementById("userId").value = userData.userId;
  document.getElementById("userName").value = userData.username;
  document.getElementById("userEmail").value = userData.email;
  document.getElementById("userPassword").value = userData.password;
  document.getElementById("userRole").value = userData.role;
};
function deleteAccount(){
  for(let i = 0; i < users.length; i++) {
      if (users[i].userId == userId.userId) {
          users.splice(i, 1);
          break
      }
  }
  try {
      var jsonUsers = JSON.stringify(users);
      localStorage.setItem('user', jsonUsers);
      alert("Delete successfully!")
      window.location.href="../index.html"
  } catch (error) {
      alert(error.message)
  }
}

function saveChange(){
  users.find(function(user){
    if(userData.userId==user.userId){
      user.username=document.getElementById("userName").value
      user.password=document.getElementById("userPassword").value
      return
    }
  })
  localStorage.setItem("user",JSON.stringify(users))
  alert("Save successfully!")
  window.location.href="../Home/home.html"
}