import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const footerForm = document.querySelector('.form-field');
const footerFormModal = document.querySelector('#footerFormModal');
const footerCloseBtn = document.querySelector('.form-modal-icon');
const footerEmailInput = document.querySelector('.footer-input#email');
const footerCommentsInput = document.querySelector('.footer-input#message');
const footerInputMessage = document.getElementById('footer-input-message');

footerFormModal.addEventListener('click', onModalClose);
footerCloseBtn.addEventListener('click', onModalCloseBtn);
footerForm.addEventListener('submit', onFormSubmit);

window.addEventListener('keydown', onKeyDown);

footerEmailInput.addEventListener('input', function () {
  if (footerEmailInput.checkValidity()) {
    footerEmailInput.classList.add('is-valid');
    footerEmailInput.classList.remove('is-invalid');
    footerInputMessage.textContent = 'Succes!';
    footerInputMessage.style.color = '#3cbc81';
  } else {
    footerEmailInput.classList.remove('is-valid');
    footerEmailInput.classList.add('is-invalid');
    footerInputMessage.textContent = 'Invalid email, try again';
    footerInputMessage.style.color = '#ed3b44';
  }

  if (footerEmailInput.value === '') {
    footerEmailInput.classList.remove('is-invalid');
    footerInputMessage.textContent = '';
  }
});

let emailFullText = ''; 
let emailInputText = ''; 
let commentsFullText = ''; 
let commentsInputText = ''; 

footerEmailInput.addEventListener('blur', function () {
  const MAX_LENGTH = getMaxInputLength(footerEmailInput);
  const inputLength = footerEmailInput.value.length;
  emailFullText = footerEmailInput.value;

  if (inputLength > MAX_LENGTH) {
    emailInputText = emailFullText.substring(0, MAX_LENGTH) + '...';
    footerEmailInput.value = emailInputText;
  } else {
    emailInputText = emailFullText;
  }
});

footerCommentsInput.addEventListener('blur', function () {
  const MAX_LENGTH = getMaxInputLength(footerCommentsInput);
  const inputLength = footerCommentsInput.value.length;
  commentsFullText = footerCommentsInput.value;

  if (inputLength > MAX_LENGTH) {
    commentsInputText = commentsFullText.substring(0, MAX_LENGTH) + '...';
    footerCommentsInput.value = commentsInputText;
  } else {
    commentsInputText = commentsFullText;
  }
});

footerEmailInput.addEventListener('focus', function () {
  footerEmailInput.value = emailFullText;
});

footerCommentsInput.addEventListener('focus', function () {
  footerCommentsInput.value = commentsFullText;
});

function getMaxInputLength(inputElement) {
  const style = window.getComputedStyle(inputElement);
  const fontSize = parseFloat(style.fontSize);
  const maxWidth = parseFloat(style.width);
  const averageCharWidth = fontSize * 0.6;

  return Math.floor(maxWidth / averageCharWidth);
}

function onFormSubmit(event) {
  event.preventDefault();

  const formData = {
    email: footerEmailInput.value.trim(),
    message: footerCommentsInput.value.trim(),
  };

  axios
    .post('https://portfolio-js.b.goit.study/api-docs', formData)
    .then(response => {
      footerFormModal.classList.add('is-visible');
      footerEmailInput.classList.remove('is-valid');
      footerInputMessage.textContent = '';
      document.body.style.overflow = 'hidden';
    })
    .catch(error => {
      if (!navigator.onLine) {
        onErrorOffline(error);
      } else {
        onError(error);
      }
    })
    .finally(() => {
      footerForm.reset();
    });
}

function onModalClose(event) {
  if (event.target === event.currentTarget) {
    footerFormModal.classList.remove('is-visible');
    document.body.style.overflow = '';
  }
}

function onModalCloseBtn() {
  footerFormModal.classList.remove('is-visible');
  document.body.style.overflow = '';
}

function onKeyDown(event) {
  if (event.keyCode === 27) {
    footerFormModal.classList.remove('is-visible');
  }
}

function onError(error) {
  iziToast.error({
    title: 'Post Error',
    message: 'An error occurred while sending the data. Please try again.',
    position: 'topRight',
    timeout: 5000,
    progressBarColor: '#ffffff',
    theme: 'dark',
    backgroundColor: '#1c1d20',
  });
}

function onErrorOffline(error) {
  iziToast.error({
    title: 'Connection Error',
    message: 'Sorry you are offline. Please try again.',
    position: 'topRight',
    timeout: 5000,
    progressBarColor: '#ffffff',
    theme: 'dark',
    backgroundColor: '#1c1d20',
  });
}
