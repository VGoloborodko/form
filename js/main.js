const text = document.querySelector('input');
const button = document.querySelector('button');

let city = 'Shilovo';


function changeCity() {
    city = text.value
    callApiOne()
    callApiTwo()
}

button.addEventListener('click', changeCity);

function callApiOne() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=67dfe8c0a9c280baa2d85b2daa5d2bb1`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
        document.querySelector('.city_one').innerHTML = data.name
        document.querySelector('.temp_one').innerHTML = (data.main.temp - 273).toFixed(1)  + '&deg'
    })
    .catch(() => {
        
    });

}

function callApiTwo() {
    fetch(`http://api.weatherapi.com/v1/current.json?key=ce8f0b853ccb44419bb181728210311&q=${city}&aqi=no`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
        document.querySelector('.city_two').innerHTML = data.location.name
        document.querySelector('.temp_two').innerHTML = data.current.temp_c.toFixed(1)  + '&deg'
    })
    .catch(() => {

    });
}

callApiOne()
callApiTwo()