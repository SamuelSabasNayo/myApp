// const posts = [
//     {title: 'Post One', body: 'This is post one'},
//     {title: 'Post Two', body: 'This is post two'}
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);

//             const error = false;

//             if(!error) {
//                 resolve();
//             } else {
//                 reject('Error: Something went wrong');
//             }
//         }, 2000);
//     });
// }

// async function fetchUsers() {
//     const res = await fetch('https://jsonplaceholeder.typicode.com/users');

//     const data = await res.json();

//     console.log(data);
// }

// fetchUsers();

//------------------------ Async / Await /Fetch -------------



const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

async function init() {
    await createPost({ title: 'Post Three', body: 'This is post three'});

    getPosts();
}

init();

//------------------------ Async / Await -------------



// const posts = [
//     {title: 'Post One', body: 'This is post one'},
//     {title: 'Post Two', body: 'This is post two'}
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);

//             const error = false;

//             if(!error) {
//                 resolve();
//             } else {
//                 reject('Error: Something went wrong');
//             }
//         }, 2000);
//     });
// }

// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, 'Goodbye')
// );
// const promise4 = fetch('http://jsonplaceholder.typcode.com/users')
// .then(res => res.json()
// );

// Promise.all([promise1, promise2, promise3])
// .then(values => console.log(values));

//------------------------ Promise.all -------------



// const posts = [
//     {title: 'Post One', body: 'This is post one'},
//     {title: 'Post Two', body: 'This is post two'}
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);

//             const error = true;

//             if(!error) {
//                 resolve();
//             } else {
//                 reject('Error: Something went wrong');
//             }
//         }, 2000);
//     });
// }

// createPost({title: 'Post Three', body: 'This is post three'})
// .then(getPosts)
// .catch(err => console.log(err));



// const posts = [
//     {title: 'Post One', body: 'This is post one'},
//     {title: 'Post Two', body: 'This is post two'}
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);

//             const error = false;

//             if (!error) {
//                 resolve()
//             } else {
//                 reject('Error: Something went wrong');
//             }
//         }, 2000);
//     });
// }

// createPost({title: 'Post Three', body: 'This is post three'})
// .then(getPosts);

// --------------- Promises -----------------------------------



// const posts = [
//     {title: 'Post One', body: 'This is post one'},
//     {title: 'Post Two', body: 'This is post two'}
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// createPost({title: 'Post Three', body: 'This is post three'}, getPosts);

// --------------- callbacks --------------------------




// const posts = [
//     {title: 'Post One', body: 'This is post one'},
//     {title: 'Post Two', body: 'This is post two'}
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post)
//     }, 2000);
// }

// getPosts();

// createPost({title: 'Post Three',body: 'This is post three'});

// --------------- This does not work -----------------------



// const posts = [
//     { title: 'Post One', body: 'This is post One' },
//     { title: 'Post Two', body: 'This is post Two' }
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output +=  `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// getPosts();



// const posts = [
//     {title: 'Post One', body: 'This is post one'},
//     {title: 'Post Two', body: 'This is post two'}
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// getPosts();



// --------------------- From Fox Code ---------------------------
// async function getNameAndAge() {
//     let name = await readLine('What is your name? ');
//     console.log(`Your name: ${name}`);
//     let age = await readLine('What is your age? ');
//     console.log(`Your age: ${age}`);
//     console.log('Thank you!');
//     Process.exist();
// }

// getNameAndAge();


// alert('Hello Samuel');