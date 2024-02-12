function onclickClosedEye1() {
    let closedEye1 = document.getElementById('closedEye1');
    let password = document.getElementById('password');
    password.removeAttribute('type');
    password.setAttribute('type', 'text');
    closedEye1.removeAttribute('class');
    closedEye1.setAttribute('class', 'fa-solid fa-eye');
}

function onNoClickClosedEye1() {
    let closedEye1 = document.getElementById('closedEye1');
    let password = document.getElementById('password');
    password.removeAttribute('type');
    password.setAttribute('type', 'password');
    closedEye1.removeAttribute('class');
    closedEye1.setAttribute('class', 'fa-solid fa-eye-slash');
}

function onclickClosedEye2() {
    let closedEye2 = document.getElementById('closedEye2');
    let confirmPassword = document.getElementById('confirm');
    confirmPassword.removeAttribute('type');
    confirmPassword.setAttribute('type', 'text');
    closedEye2.removeAttribute('class');
    closedEye2.setAttribute('class', 'fa-solid fa-eye');
}

function onNoClickClosedEye2() {
    let closedEye2 = document.getElementById('closedEye2');
    let confirmPassword = document.getElementById('confirm');
    confirmPassword.removeAttribute('type');
    confirmPassword.setAttribute('type', 'password');
    closedEye2.removeAttribute('class');
    closedEye2.setAttribute('class', 'fa-solid fa-eye-slash');
}

function passwordValidate() {
    event.preventDefault();
    var passwordInput = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm').value;

    if (passwordInput === '' || confirmPassword === '' || passwordInput !== confirmPassword) {
        document.getElementById('password').style.border = '2px solid red';
        document.getElementById('confirm').style.border = '2px solid red';
    } else {
        var uppercaseRegex = /[A-Z]/;
        var specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

        let hasUpperCase = uppercaseRegex.test(passwordInput);
        let hasValidLength = passwordInput.length >= 8;
        let hasValidSpecialChar = specialCharRegex.test(passwordInput);

        if (!hasValidLength) {
            document.getElementById('passwordSpan').innerHTML = 'Length should be more than 8';
            document.getElementById('password').style.border = '2px solid red';
        } else if (!hasUpperCase || !hasValidSpecialChar) {
            document.getElementById('passwordSpan').innerHTML = 'Password should like Mentioned Above';
            document.getElementById('password').style.border = '2px solid red';
        } else {
            // All validations passed, update password in local storage
            localStorage.setItem('password', passwordInput);
            document.getElementById('passwordSpan').innerHTML = 'Password updated';
            document.getElementById('password').style.border = '';
            document.getElementById('confirm').style.border = '';
        }
    }
}

