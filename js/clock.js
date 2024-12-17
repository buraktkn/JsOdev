var name = prompt("Lütfen adınızı giriniz.");
var clockDOM = document.querySelector('#myClock')
let nameDOM = document.querySelector('#myName');
nameDOM.innerHTML = name;


function showTime(){
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var date = new Date();
    var day = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds()
    clockDOM.innerHTML = hours + ":" + minutes + ":" + seconds + "/" + days[day];

}
setInterval(showTime,100)
showTime()