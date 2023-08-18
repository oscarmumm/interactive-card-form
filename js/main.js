const d = document;

const cardholderName = d.getElementById('cardholder-name');
const cardNumber = d.getElementById('card-number');
const expMonth = d.getElementById('exp-month');
const expYear = d.getElementById('exp-year');
const cvc = d.getElementById('cvc');

const form = d.getElementById('form');
const thankYouMsg = d.getElementById('thank-you-msg');

const cardFrontNumber = d.getElementById('card-front__number');
const cardFrontName = d.getElementById('card-front__name');
const cardFrontExpMonth = d.getElementById('card-front__exp-month');
const cardFrontExpYear = d.getElementById('card-front__exp-year');
const cardBackCvc = d.getElementById('card-back__cvc');

const nameError = d.getElementById('form__error-msg-name');
const cardNumberError = d.getElementById('form__error-msg-card-number');
const dateError = d.getElementById('form__error-msg-date');
const cvcError = d.getElementById('form__error-msg-cvc');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // validateName();
  // validateNumber();
  // validateMonth();
  // validateYear();
  // validateCvc();
  if (
    validateName() &&
    validateNumber() &&
    validateMonth() &&
    validateYear() &&
    validateCvc()
  ) {
    form.classList.add('hidden');
    thankYouMsg.classList.remove('hidden');
    thankYouMsg.classList.add('flex');
  }
})

cardNumber.addEventListener('input', (e) => {
  let inputValue = e.target.value;
  cardNumber.value = inputValue
  .replace(/\s/g, '')
  // .replace(/\D/g, '')
  // .replace(/([0-9]{4})/g, '$1 ')
  .replace(/([a-zA-Z0-9]{4})/g, '$1 ')
  .trim();
  cardFrontNumber.innerText = inputValue;
  if(inputValue == ''){
    cardFrontNumber.innerText = '0000 0000 0000 0000'
  }
})

cardholderName.addEventListener('input', (e) => {
  let inputValue = e.target.value;
  cardholderName.value = inputValue
  // .replace(/\d/g, '');
  cardFrontName.innerText = inputValue.toUpperCase();
})

expMonth.addEventListener('input', (e) => {
  let inputValue = e.target.value;
  expMonth.value = inputValue.replace(/\D/g, '');
  cardFrontExpMonth.innerText = inputValue;
})

expYear.addEventListener('input', (e) => {
  let inputValue = e.target.value;
  expYear.value = inputValue.replace(/\D/g, '');
  cardFrontExpYear.innerText = inputValue;
})

cvc.addEventListener('input', (e) => {
  let inputValue = e.target.value;
  cvc.value = inputValue.replace(/\D/g, '');
  cardBackCvc.innerText = inputValue;
})

const validateName = () => {
  if (cardholderName.value == '') {
    nameError.innerText = "Can't be blank";
    cardholderName.classList.add('form__error-input-border');
  } else if (/^[A-Z\s]+$/i.test(cardholderName.value)) {
    cardholderName.classList.remove('form__error-input-border');
    nameError.innerText = "";
    return true;
  } else {
    nameError.innerText = "Please enter a valid name";
    cardholderName.classList.add('form__error-input-border');
  }
}

const validateNumber = () => {
  if (cardNumber.value == '') {
    cardNumberError.innerText = "Can't be blank";
    cardNumber.classList.add('form__error-input-border');
  } else if(/([0-9]{4}\s){3}[0-9]{4}/g.test(cardNumber.value)) {
    cardNumber.classList.remove('form__error-input-border');
    cardNumberError.innerText = "";
    return true;
  } else {
    cardNumberError.innerText = "Wrong format. Numbers only";
    cardNumber.classList.add('form__error-input-border');
  }
}

const validateMonth = () => {
  if (expMonth.value == '') {
    dateError.innerText = "Can't be blank";
    expMonth.classList.add('form__error-input-border');
  } else if (/^(0?[1-9]|1[012])$/g.test(expMonth.value)) {
    expMonth.classList.remove('form__error-input-border');
    dateError.innerText = "";
    return true;
  } else {
    dateError.innerText = "Invalid month";
    expMonth.classList.add('form__error-input-border');
  }
}

const validateYear = () => {
  if (expYear.value == '') {
    dateError.innerText = "Can't be blank";
    expYear.classList.add('form__error-input-border');
  } else {
    dateError.innerText = "";
    expYear.classList.remove('form__error-input-border');
    return true;
  }
}

const validateCvc = () => {
  if (cvc.value == '') {
    cvcError.innerText = "Can't be blank";
    cvc.classList.add('form__error-input-border');
    console.log("Can't be blank")
  } else {
    cvcError.innerText = "";
    cvc.classList.remove('form__error-input-border');
    return true;
  }
}
