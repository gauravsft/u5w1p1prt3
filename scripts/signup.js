

document.querySelector('form').addEventListener('submit', singUpFn);

var usersData;
if (localStorage.getItem('UsersData') === null) {
    usersData = [];
} else {
    usersData = JSON.parse(localStorage.getItem('UsersData'));
}
function singUpFn() {
    event.preventDefault();
    var userObj = {
        name: document.querySelector('#name').value,
        number: document.querySelector('#contact').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value,
    }
    usersData.push(userObj);
    localStorage.setItem('UsersData', JSON.stringify(usersData));
    alert('SignUp Successfully')

    // window.location.href =  'index.html';
}