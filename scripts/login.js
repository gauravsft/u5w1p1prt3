document.querySelector('form').addEventListener('submit', loginFn);

var registeredUsers = JSON.parse(localStorage.getItem('UsersData'));
function loginFn() {
    event.preventDefault();
    var enteredEmail = document.querySelector('#email').value;
    var enteredPassword = document.querySelector('#password').value;

    registeredUsers.forEach(userData => {
        if (userData.email === enteredEmail && userData.password === enteredPassword) {

            alert("LOGIN SUCCESS");
            window.location.href = 'index.html';
        }
        else{
            alert("invalid Credentials");
        }
    });
    

}