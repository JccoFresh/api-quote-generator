const request = new XMLHttpRequest();
let weather = document.getElementById("weather");
let city = document.getElementById("city");
const url = "https://api.openweathermap.org/data/2.5/weather?q=Vancouver,CA&APPID=c82dc6f51329c1520d5f5110a0c3188a"; //calling by city name, edit query to change city
let icon = document.getElementById("icon");
/*function id() {
    let idNum = Math.floor(1000000 + Math.random() * 9000000);
    const link = "https://api.openweathermap.org/data/2.5/weather?id=" + idNum + "&APPID=c82dc6f51329c1520d5f5110a0c3188a";
    return link;
};
let url = id();
*/

function xmlOpen() {
request.open("GET", url, true);
request.onload = function () {
        let data = JSON.parse(this.response); //parses the response JSON string into javascript object, store this parsed data in variable called data
       console.log(data.name);
        if (request.status >= 200 && request.status < 400) {
            //condition for when request is succesful
            city.innerHTML = data.name + ", " + data.sys.country; //city and country
            let iconcode = data.weather[0].icon;
            icon.src = "https://openweathermap.org/img/w/" + iconcode + ".png"; //icon img source
            let celsiusTemp = Math.round((Math.round(data.main.temp) - 273.15)) + " C\u00B0";
            weather.innerHTML = "Description: " + data.weather[0].description + "<br />" + "Temperature: " + celsiusTemp;
        }
        else {
            weather.innerHTML = "Weather not found!";
        }
    };
request.send();
};
xmlOpen();
