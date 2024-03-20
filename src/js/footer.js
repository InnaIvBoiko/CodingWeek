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
  const MAX_LENGTH = 40;

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

  if (footerEmailInput.value.length > MAX_LENGTH) {
    footerEmailInput.value =
      footerEmailInput.value.substring(0, MAX_LENGTH) + '...';
  }

  if (footerEmailInput.value === '') {
    footerEmailInput.classList.remove('is-invalid');
    footerInputMessage.textContent = '';
  }
});

footerCommentsInput.addEventListener('input', function () {
  const MAX_LENGTH = 100;

  if (footerCommentsInput.value.length > MAX_LENGTH) {
    footerCommentsInput.value =
      footerCommentsInput.value.substring(0, MAX_LENGTH) + '...';
  }
});

function onFormSubmit(event) {
  event.preventDefault();

  const formData = {
    email: footerEmailInput.value.trim(),
    message: footerCommentsInput.value.trim(),
  };

  axios
    .post(
      'https://virtserver.swaggerhub.com/Qalib/project-jefferson/1.0.0/devices',
      formData
    )
    .then(response => {
      footerFormModal.classList.add('is-visible');
      footerEmailInput.classList.remove('is-valid');
      footerInputMessage.textContent = '';
    })
    .catch(error => {
      onError(error);
    })
    .finally(() => {
      footerForm.reset();
    });
}

function onModalClose(event) {
  if (event.target === event.currentTarget) {
    footerFormModal.classList.remove('is-visible');
  }
}

function onModalCloseBtn() {
  footerFormModal.classList.remove('is-visible');
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
