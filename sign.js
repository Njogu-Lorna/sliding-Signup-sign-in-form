const signUpButton = document.getElementById('SignUp');
const signInButton = document.getElementById('SignIn');
const container = document.getElementById('container');

signUpButton.addEventListener('onclick',() =>
container.classList.add('right-panel-active')
);

signInButton.addEventListener('click',() =>
container.classList.remove('right-panel-active')
);
