  //Form validation
//validation to record errors 
let myForm = document.getElementById("myForm");
myForm.setAttribute('noalidate' , true);

let btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener('click', check);

let txtSurname = document.getElementById("surname");
txtSurname.addEventListener("blur", validateSurname);

let txtAge = document.getElementById("age");
txtAge.addEventListener("blur", validateAge);

let txtEmail = document.getElementById("email");
txtEmail.addEventListener("blur", validateEmail);

let txtConfirmEmail = document.getElementById("confirmEmail");
txtConfirmEmail.addEventListener("blur", validateConfirmEmail);
let valid;

function validateSurname(){
    console.log("validateSurname");
}
function check(){
    
}