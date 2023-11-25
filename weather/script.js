let city = document.getElementById("city");
let image = document.getElementById("img");
let temp = document.getElementById("temp");
let type = document.getElementById("type");
let input = document.getElementById("inp");

// Our API KEY.

let API_key = "b1e1f162684c50b5df7bc7903b777ae8";

const data = async function (search) {

    // This line fetching data and this search variable taking city's name from input.

    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);

    // This line give us data in json foam.

    let jsonData = await getData.json();

    console.log(getData);
    console.log(jsonData);


    // These if condition is for if user does not enter city's name or Enters Invalid name of city.

    if (jsonData.cod == 400) {
        alert("Please Enter Location");
        image.src = "images/error1.png"
        city.innerHTML = ""
        temp.innerHTML = ""
        type.innerHTML = ""
    };

    if (jsonData.cod == 404) {
        alert("Please Enter Valid Location");
        image.src = "images/error2.png"
        city.innerHTML = search
        temp.innerHTML = ""
        type.innerHTML = ""
    };


    // these lines getting data from json foam and showing in browser.

    city.innerHTML = search;
    temp.innerHTML = Math.floor(jsonData.main.temp) + "°C";
    type.innerHTML = jsonData.weather[0].main


    // This if condition is showing us the image related to the type of weather.

    if (type.innerHTML == "Clouds") {
        image.src = "images/clouds.png"
    } else if (type.innerHTML == 'Clear') {
        image.src = "images/clears.png"
    } else if (type.innerHTML == 'Rain') {
        image.src = "images/rain.png"
    } else if (type.innerHTML == "Snow") {
        image.src = "images/rain.png"
    } else if (type.innerHTML == 'Strom') {
        image.src = "images/strom.png"
    } else if (type.innerHTML == 'Haze') {
        image.src = "images/haze.png"
    }

    input.value = ""

};

// This is our on click function and what city of name we write in input it gives input value into search.

function myFun() {
    search = input.value
    data(search);
};