import throttle from 'lodash.throttle';

 const message = document.querySelector('.feedback-form textarea');
const email = document.querySelector('.feedback-form input');

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

function onFormData() {
  const user = {
    email: email.value,
    message: message.value,
}
  localStorage.setItem('feedback-form-state', JSON.stringify(user));
}

function restoreFormData() {
  const currentFormData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};
 
 email.value = currentFormData.email || "";
  message.value = currentFormData.message || "";
}

restoreFormData();

function onSubmitForm(event) {
  event.preventDefault();
    const user = {
    email: email.value,
    message: message.value,
    }
  if (!user.email || !user.message) {
    alert("Будь-ласка введіть щось у поле.")
    return
  }
  console.log(user);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
  