let menuToggler = document.querySelector('.menuToggler');
let span = document.querySelector('.menuToggler span');
let nav = document.querySelector('nav');
let header = document.querySelector('header');


menuToggler.addEventListener("click", () => {
	nav.classList.toggle('active');
	span.classList.toggle('active');
	header.classList.toggle('active');
});


document.addEventListener('scroll', () => {
	let title = document.querySelector('.title2 h1');

})