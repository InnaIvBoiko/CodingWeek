const coversWrap = document.querySelector('#covers');
const coversElements = document.querySelector('.marquee');

window.addEventListener('scroll', () => {
    const result = isInViewport(coversWrap);
    if (result) {
        coversElements.animate([{ transform: 'translateX(-5%)' },
        { transform: 'translateX(-35%)' }],
        { easing: 'ease-in-out', duration: 5000, iterations: 'Infinity' });
    };
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const html = document.documentElement;
    return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
};
