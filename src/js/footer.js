// import axios from 'axios';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

const footerForm = document.querySelector('.form-field');
const footerFormModal = document.querySelector('#footerFormModal');
const footerCloseBtn = document.querySelector('.form-modal-icon');

footerForm.addEventListener('submit', onFormSubmit);
footerFormModal.addEventListener('click', onModalClose);
footerCloseBtn.addEventListener('click', onModalCloseBtn);

window.addEventListener('keydown', onKeyDown);

// function onFormSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(footerForm);

//   axios
//     .post('https://portfolio-js.b.goit.study/api', formData)
//     .then(response => {
//       if (response.status === 200) {
//         footerForm.reset();
//         footerFormModal.classList.add('is-visible');
//       } else {
//         throw new Error('Server error');
//       }
//     })
//     .catch(error => {
//       onError(error);
//     });
// }

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
