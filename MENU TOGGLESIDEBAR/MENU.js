const menu = document.querySelector('.menu-bars');
const thee = document.querySelector('.theemenu');
menu.addEventListener('click', () =>{
    menu.classList.toggle('active');
    thee.classList.toggle('active');
})