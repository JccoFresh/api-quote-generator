const request = new XMLHttpRequest();
const url = "https://api.adviceslip.com/advice";
let advice = document.getElementById("advice");
function xmlOpen() {
request.open("GET", url, true);
request.onload = function () {
        let data = JSON.parse(this.response); //parses the response JSON string into javascript object, store this parsed data in variable called data
       console.log(data);
        if (request.status >= 200 && request.status < 400) {
            //condition for when request is succesful
            advice.innerHTML = data.slip.advice;
        }
        else {
            advice.innerHTML = "Advice not found!";
        }
};
request.send();
};
xmlOpen();
