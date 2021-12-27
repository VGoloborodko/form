const name = document.querySelector('.name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const button = document.querySelector('.btn');

const arr = [];

const obj = {
    name: null,
    email: null,
    password: null
}


button.addEventListener('click', event => {
    event.preventDefault();

    obj.name = name.value;
    obj.email = email.value;
    obj.password = password.value;

    name.value = null;
    email.value = null;
    password.value = null;

    console.log(obj);
})