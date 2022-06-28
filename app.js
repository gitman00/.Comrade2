let menuToggler = document.querySelector('.menuToggler');
let span = document.querySelector('.menuToggler span');
let nav = document.querySelector('nav');
let header = document.querySelector('header');
let cursor = document.querySelector('.cursor');
let caption = document.querySelector('.caption');
menuToggler.addEventListener("click", () => {
	nav.classList.toggle('active');
	span.classList.toggle('active');
	header.classList.toggle('active');
});

// caption.addEventListener('mousemove' , (e) => {
// 	cursor.style.left  = e.pageX + 'px';
// 	cursor.style.top  = e.pageY + 'px';
// })