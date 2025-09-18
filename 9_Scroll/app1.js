const main = document.querySelector('#main');
const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const circulo = document.querySelector('#circulo');

console.log(main);
console.log(vertical);
console.log(horizontal);

function verScroll() {
    let top = main.scrollTop;
    let left = main.scrollLeft;
    vertical.textContent = Math.floor(top);
    horizontal.textContent = Math.floor(left);
    circulo.style.top = `${top}px`;
    circulo.style.left = `${left}px`;
    circulo.style.transform = `scale(${(top/30)})`;
 }

main.addEventListener('scroll', verScroll 
);


