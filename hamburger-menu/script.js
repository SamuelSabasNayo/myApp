// ---------------- Hamburger menu --------------------
// const menu = document.querySelector('.nav-menu');
const navMenuUl = document.querySelector('.navMenuUl');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    navMenuUl.style.display = 'block';
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
    navMenuUl.style.left = '50%';
    console.log('Hello');
}

function close() {
//     openMenu.style.display = 'block';
//     closeMenu.style.display = 'none';
//     navMenuUl.style.display = 'none';
    console.log('Hello');
}

// function windowReload() {
//     location.reload();
//     console.log('reload')
// }