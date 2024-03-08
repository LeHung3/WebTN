function generateListUser(){
    var userDashboard = document.getElementById("UserDashBoard");    
    var ListObjectUser = JSON.parse(localStorage.getItem("user"));
    ListObjectUser.forEach(function(userOject,index) {       
        var userInfo = document.createElement('div');
        userInfo.classList.add('user-info');
        if(userOject["userId"]==JSON.parse(localStorage.getItem("userLoggedIn")).userId){
            userInfo.classList.add("accountOwner")
        }else{
            userInfo.classList.add("otherAccount")
        }

        var info = document.createElement('div');
        info.classList.add("info");

        var infoLabel = document.createElement('p');
        infoLabel.textContent = 'ID: ' + userOject["userId"];
        info.appendChild(infoLabel);

        var infoLabel = document.createElement('p');
        infoLabel.textContent ='Name: ' + userOject["username"];
        info.appendChild(infoLabel);
        userInfo.appendChild(info); 

        userInfo.addEventListener('click', function() {
            window.location.href = 'editUser.html?userId='+userOject["userId"];
        });
        userDashboard.appendChild(userInfo);  
    });
}

generateListUser()