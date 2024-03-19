const refs = {
  footerModalRef: document.querySelector('.footer-form-modal'),
};

refs.footerModalRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  refs.footerModalRef.reset();
  refs.footerModalRef.classList.add('is-hidden');
}
