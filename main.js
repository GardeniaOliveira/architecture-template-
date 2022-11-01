const hamburguerMenu = document.getElementById('hamburguer');
const addHamburguerMenu = document.getElementById('add-menu');
const formContact = document.getElementById('form-contact');
const inputName = document.querySelector(".input-name")
const inputEmail = document.querySelector(".input-email")
const error = document.querySelectorAll('.error');
const textarea = document.querySelector(".textarea")
const btn = document.querySelector('.btn')
const success = document.querySelector('.success')
let menuVisible = false;
let formComplete = true;

hamburguerMenu.addEventListener('click', function(e){
    e.preventDefault();
    addMenu()

})

function addMenu(){
    var x = document.querySelector(".hamburguer-menu");
    if (menuVisible) {
        addHamburguerMenu.classList.remove('show');
        menuVisible = false
    } else {
        addHamburguerMenu.classList.add('show');
        menuVisible = true
    }
}
btn.addEventListener('click', function(e){
    e.preventDefault();
    validateForm();
    if(formComplete === true){
        cleanInput();
        done();
    }
   

})
function validateForm(){
    if (formContact.name.value ===""){
        error[0].innerText = "Please, enter a name";
        formContact.name.focus; 

        const inputName = document.querySelector(".input-name")
        inputName.style.border = "2px solid red";
        formComplete = false; 
    }else{
        error[0].innerText = "";
        formComplete = true;
    }
    if (formContact.email.value ===""){
        error[1].innerText = "Please, enter a email";
        formContact.email.focus; 

        const inputEmail = document.querySelector(".input-email")
        inputEmail.style.border = "2px solid red";
        formComplete = false; 
    }
    else{
        error[1].innerText = "";
        formComplete = true;
    }
   if (formContact.comment.value ===""){
        error[2].innerText = "Please, enter a message";
        formContact.comment.focus; 

        const textarea = document.querySelector(".textarea")
        textarea.style.border = "2px solid red";
        formComplete = false; 
    } else{
        error[2].innerText = "";
        formComplete = true;
    }
}

inputName.addEventListener('input', () => {
    inputName.innerText = inputName.value.length === 0 ? "Please enter your name." : inputName.value
    error[0].innerText = "";
    inputName.style.border = "1px solid green";
})
inputEmail.addEventListener('input', () => {
    inputEmail.innerText = inputEmail.value.length === 0 ? "Please enter your email address." : inputEmail.value
    error[1].innerText = "";
    inputEmail.style.border = "1px solid green";
})

textarea.addEventListener('input', () => {
    textarea.innerText = inputName.value.length === 0 ? "Please enter your email message." : textarea.value
    error[2].innerText = "";
    textarea.style.border = "1px solid green";
})
function cleanInput(){
    inputName.value = "";
    inputEmail.value = "";
    textarea.value = "";
}
function done(){
    success.innerText='Form sent successfully';
}

