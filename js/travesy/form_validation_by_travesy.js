// DOM: Document Object Model

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

//     if(nameInput.value === '' || emailInput.value === '') {
//         msg.classList.add('error');
//         msg.innerHTML = 'Please enter all fields';

//         setTimeout(() => msg.remove(), 3000);
//     } else {
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(
//             `${nameInput.value} : ${emailInput.value}`));

//         userList.appendChild(li);

//         //Clear fields
//         nameInput.value = '';
//         emailInput.value = '';
//     }
// }



// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

//     if(nameInput.value === '' || emailInput.value === '') {
//         msg.classList.add('error');
//         msg.innerHTML = 'Please enter all fields';

//         setTimeout(() => msg.remove(), 3000);
//     } else {
//         // alert('successful stored!');
//         alert(`${nameInput.value} : ${emailInput.value}`);
//     }
// }


// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg'); 
// const userList = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

//     if(nameInput.value === '' || emailInput.value === '') {
//         alert('Please enter fields');
//     } else {
//         console.log('success!');
//     }
// }


// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

//     console.log(nameInput.value);
// }


// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background =
//     '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
// })
// btn.addEventListener('click', (e) => {
    // e.preventDefault();
    // document.querySelector('body').classList.add('bg-dark');
    // document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
    // document.querySelector('#my-form').style.background = 'orange';
    // console.log(e.target.className);
    // console.log(e.target);
    // console.log(e);
    
// })
// btn.style.background = 'blue';


// const ul = document.querySelector('.items');

// ul.lastElementChild.innerHTML = '<h1>Hello sam</h1>';
// ul.children[1].innerText = 'Brad';
// ul.firstElementChild.textContent = 'Hello';
// ul.lastElementChild.remove();
// ul.remove();


// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));


//Multiple element
// console.log(document.getElementsByTagName('li'));

// console.log(document.getElementsByClassName('item'));

// console.log(document.querySelectorAll('.item'));

//Single element
// console.log(document.querySelector('h1'));

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.getElementById('my-form'));