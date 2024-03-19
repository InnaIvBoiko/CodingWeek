const sectionCovers = document.querySelector('#covers');
const animationStrings = document.querySelectorAll

// const styleMarqueeLine = `
// <style class="text-css" type="text/css">
// @keyframes marqueeLine {
//   from {
//     transform: translateX(-20%);
//   }
//   to {
//     transform: translateX(-180%);
//       }
// </style>
// `;

window.addEventListener('scroll', () => {
    const result = isInViewport(sectionCovers);
    if (result) {
        sectionCovers.insertAdjacentHTML('beforeend', styleMarqueeLine);
    } else {
        sectionCovers.removeChild('.text-css');
    }
    console.log(result);
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const html = document.documentElement;
    console.log('ok')
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
};
