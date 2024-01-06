const signinBtn = document.querySelector('.singin-btn');
const signupBtn = document.querySelector('.singup-btn');
const formBox = document.querySelector('.form-box');
const body = document.body;

signupBtn.addEventListener('click', () => {
    formBox.classList.add('active');
   body.classList.add('active'); 
});

signinBtn.addEventListener('click', () => {
    formBox.classList.remove('active');
    body.classList.remove('active');
});