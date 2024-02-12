function validate(){
    event.preventDefault();
    var loginCollection=document.getElementsByClassName('fields');
    var login=Array.from(loginCollection);
    var every=login.every((element)=>{
        return element.value==='';
    })
   
    console.log(every);
    if(every){
        login.forEach(element=>{
            element.classList.add('error');
        })
    }
    else{
        login.forEach(element=>{
            if(element.value!=='')
                element.classList.remove('error')
            else
                element.classList.add('error')
        })
    }

    every=login.every((element)=>{
        return element.value!=='';
    })
    if(every){
        emailValidate();
        passwordValidate();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var localData = JSON.parse(localStorage.getItem('formData'));
        if(email===localData.email && password===localData.password){
           window.open("Welcome.html")
        }
        else{
           
        }

    }
}

function emailValidate() {
    var email = document.getElementById('email').value;
    var localData = JSON.parse(localStorage.getItem('formData'));

    if (email !== localData.email) {
        document.getElementById('email').style.border = '1px solid red';
        document.getElementById('email').style.boxShadow = '0px 0px 5px red';
        document.getElementById('emailSpan').innerHTML = 'Enter correct username or email';
    } else {
        document.getElementById('email').style.border = '';
        document.getElementById('email').style.boxShadow = '';
        document.getElementById('emailSpan').innerHTML = '';
    }
}

function passwordValidate() {
    var password = document.getElementById('password').value;
    var localData = JSON.parse(localStorage.getItem('formData'));

    if (password !== localData.password) {
        document.getElementById('password').style.border = '1px solid red';
        document.getElementById('password').style.boxShadow = '0px 0px 5px red';
        // document.getElementById('passwordspan').innerHTML = 'Enter correct password';
    } else {
        document.getElementById('password').style.border = '';
        document.getElementById('password').style.boxShadow = '';
        document.getElementById('passwordspan').innerHTML = '';
    }
}

function onclickClosedEye1(){
    let closedEye1=document.getElementById('closedEye1')
    let password=document.getElementById('password')
    // password.removeAttribute('type')
    password.setAttribute('type','text')
    closedEye1.removeAttribute('class')
    closedEye1.setAttribute('class','fa-solid fa-eye')
    }

function onNoClickClosedEye1()
{
    let closedEye1=document.getElementById('closedEye1')
    let password=document.getElementById('password')
    password.removeAttribute('type')
    password.setAttribute('type','password')
    closedEye1.removeAttribute('class')
    closedEye1.setAttribute('class','fa-solid fa-eye-slash')
}