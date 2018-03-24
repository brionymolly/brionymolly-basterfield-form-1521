const main = document.querySelector(".wrapper");
const form = document.querySelector("form");
const fullname = document.getElementById("full-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //email validator

const collectedData = {
    fullName: null,
    email: null,
    message: null
};

const errors = {};

function validateForm(ev) {
    
    
    ev.preventDefault();
    
    let pattren = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
    if (email.value !== ""){
        if (pattern.test(email.value)){
            collectedData.email= email.value;
            delete errors.em;
        } else {
            errors.em = "Email is invalid";
    
        } else { 
            errors.em = "Email is missing";
        }
    
    
        if (){
            console.log(collectedData);
            } else {
                console.log(errors);
            }
    
    
    
}
form.addEventListener("submit", validateForm);