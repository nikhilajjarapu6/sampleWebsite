// // homePage.js

function validate() {
    event.preventDefault();
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    // const gender=document.getElementsByName('gender').value
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
    console.log(selectedGender.value);
    console.log(mobileNumber);
   
    //checking everyfield is null or not
    const collection=document.getElementsByClassName("fileds");
    const pureCollection=Array.from(collection);
    var everyValue=pureCollection.every(element=>{
            return element.value==="";
    })
   
    if (everyValue === true) {
        pureCollection.forEach(element => {
            element.classList.add('error');   
        });  
    }
    else if(everyValue!==true) {
        pureCollection.forEach(element => {
            if(element.value==='')
                element.classList.add('error');
            else
              element.classList.remove('error');
        });
    }
    everyValue=pureCollection.every(element=>{
        return element.value!=="";
    })
    if (everyValue) {
        let emailValid = emailValidate();
        let passwordValid = validatePassword();
        let mobileValid = validateMobile();
        let formDataValid = formData();
        
        if (emailValid && passwordValid && mobileValid && formDataValid) {
            window.open("login.html");
        }
        else{
            alert("kekdhwekhdw")
        }
        
    }
}

    // document.getElementById('email').addEventListener('input', emailValidate);
    function emailValidate(){
        var emailInput=document.getElementById('email').value;
        if(!emailInput.endsWith('@gmail.com')&& !emailInput.endsWith('@email.com')){
            document.getElementById('email').style.border='2px solid rgb(255, 29, 0.5)';
            document.getElementById('errorSpan-email').innerHTML='email should ended with @gamil.com';
            return false;
        }
        else{
            document.getElementById('errorSpan-email').innerHTML=''; 
            document.getElementById('email').style.border='2px solid rgb(51,255,0.5)';
            setTimeout(()=>{
                document.getElementById('email').style.border='';
            },2000)
            return true;
        }
    }
    // document.getElementById('password').addEventListener('input', validatePassword);
    function validatePassword() {
        var passwordInput = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
    
        if (passwordInput !== '' && confirmPassword !== '' && passwordInput !== confirmPassword) {
            document.getElementById('errorSpan-confirmPassword').innerHTML = 'Passwords should match';
            // document.getElementById('password').style.border = '2px solid red';
            document.getElementById('confirmPassword').style.border = '2px solid red';
            return false;
        } else if (passwordInput === confirmPassword) {
            document.getElementById('errorSpan-confirmPassword').innerHTML = '';
            document.getElementById('password').style.border = '2px solid rgb(51, 255, 0.5)';
            document.getElementById('confirmPassword').style.border = '2px solid rgb(51, 255, 0.5)';
            setTimeout(() => {
                document.getElementById('password').style.border = '';
                document.getElementById('confirmPassword').style.border = '';
            }, 3000);
            return true;
        }
        var uppercaseRegex = /[A-Z]/;
        var specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

        let hasUpperCase=uppercaseRegex.test(passwordInput);
        let hasValidLength=passwordInput.length>=8;
        let hasValidSpecialChar=specialCharRegex.test(passwordInput);

        if(!hasValidLength){
            document.getElementById('errorSpan-password').innerHTML='length should be more than 8';
            document.getElementById('password').style.border='2px solid red';
            return false;
        }
        else if(!hasUpperCase){
            document.getElementById('errorSpan-password').innerHTML='password should combination of uppercase and special charecters';
            document.getElementById('password').style.border='2px solid red';
            return false;
        }
        else if(!hasValidSpecialChar){
            document.getElementById('errorSpan-password').innerHTML='password should contain one special';
            document.getElementById('password').style.border='2px solid red';
            return false;
        }
        else {
            document.getElementById('errorSpan-password').innerHTML='';
            document.getElementById('password').style.border = '2px solid rgb(51, 255, 0.5)';
            setTimeout(() => {
                document.getElementById('password').style.border  = '';
            }, 3000);
            return true;
        }
    }

    function validateMobile(){
        var number=document.getElementById('mobileNumber').value
        if(number.length<=9){
            document.getElementById('errorSpan-mobileNumber').innerHTML='incorrect number';
            document.getElementById('mobileNumber').style.border='2px solid red'
            return false;
        }
        else{
            document.getElementById('errorSpan-mobileNumber').innerHTML='';
            document.getElementById('mobileNumber').style.border=''
            return true;
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

function onclickClosedEye2()
{
    let closedEye2=document.getElementById('closedEye2')
    let confirmPassword=document.getElementById('confirmPassword')
    confirmPassword.removeAttribute('type')
    confirmPassword.setAttribute('type','text')
    closedEye2.removeAttribute('class')
    closedEye2.setAttribute('class','fa-solid fa-eye')
}
function onNoClickClosedEye2()
{
    let closedEye2=document.getElementById('closedEye2')
    let confirmPassword=document.getElementById('confirmPassword')
    // console.log(closedEye)
    confirmPassword.removeAttribute('type')
    confirmPassword.setAttribute('type','password')
    closedEye2.removeAttribute('class')
    closedEye2.setAttribute('class','fa-solid fa-eye-slash')
}


//json saving
function formData(){
    
    var data={
        firstName : document.getElementById('fname').value,
        lastName : document.getElementById('lname').value,
         email : document.getElementById('email').value,
         password : document.getElementById('password').value,
         mobileNumber : document.getElementById('mobileNumber').value,
         selectedGender : document.querySelector('input[name="gender"]:checked').value
    }

    var jsonData=JSON.stringify(data)
    localStorage.setItem('formData',jsonData);
    console.log(jsonData);
    return true;
}
    
    


 // else if(everyValue!==false){
    //     pureCollection.forEach(element=>{
    //         if(element.value==''){
    //             element.classList.add('error');
    //             var fieldName = element.id;
    //             var errorSpan = document.getElementById('errorSpan-' + fieldName);
    //             errorSpan.innerText = `${fieldName} should not be empty`; 
    //         }
    //         else{
    //             element.classList.add('Noterror');
    //         }
    //     })
    // }


    // let span=document.getElementsByClassName('spans');
    // if (span.length > 0) {
    //     span[0].innerHTML = 'fileds should not be empty';
    // }