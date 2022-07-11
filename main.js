import './style.css'
const emailInput = document.querySelector('#email',);

emailInput.addEventListener('#email', () => {
  emailInput.setCustomValidity('');
  emailInput.checkValidity();
});
emailInput.addEventListener('invalid', () => {
  if(emailInput.value === '') {
    emailInput.setCustomValidity('Enter Email!');
  } else {
    emailInput.setCustomValidity('Emails can only contain lowercase letters . Try again!');
  }
});





const nameInput = document.querySelector('#name',);

nameInput.addEventListener('#name', () => {
  nameInput.setCustomValidity('');
  nameInput.checkValidity();
});
nameInput.addEventListener('invalid', () => {
  if(nameInput.value === '') {
    nameInput.setCustomValidity('Enter Name!');
  } else {
    nameInput.setCustomValidity('Names can only contain uppercase letters . Try again!');
  }
});




const feeInput = document.querySelector('#fee',);

feeInput.addEventListener('#fee', () => {
  feeInput.setCustomValidity('');
  feeInput.checkValidity();
});









document.querySelector('#app').innerHTML 
