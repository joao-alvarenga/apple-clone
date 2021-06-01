const toggle = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

toggle.onclick = function(){ 
toggle.classList.toggle('active');
navMenu.classList.toggle('active');;
};
