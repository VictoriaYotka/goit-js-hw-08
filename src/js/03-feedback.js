import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textAreaEl = document.querySelector('textarea');

const USER_DATA = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(USER_DATA));

const dataObj = {};

const handlerFormFieldsInput = () => {
  dataObj.email = inputEl.value;
  dataObj.message = textAreaEl.value;

  localStorage.setItem(USER_DATA, JSON.stringify(dataObj));
};

const handlerFormSubmit = event => {
  event.preventDefault();
  console.log(dataObj);
  localStorage.removeItem(USER_DATA);
  event.currentTarget.reset();
};

const updateInputValues = () => {
  if (localStorage.getItem(USER_DATA)) {
    inputEl.value = savedData.email;
    textAreaEl.value = savedData.message;
  }

  return;
};

updateInputValues();

formEl.addEventListener('input', throttle(handlerFormFieldsInput, 500));
formEl.addEventListener('submit', handlerFormSubmit);
