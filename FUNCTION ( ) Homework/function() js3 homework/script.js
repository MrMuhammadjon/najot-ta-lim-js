let seconds = document.getElementById("second-line")
let minut = document.getElementById("minut-line");
let hour = document.getElementById("hour-line");

function updateClock() {
    let now = new Date();
    let secon = now.getSeconds()
    let minutes = now.getMinutes();
    let hours = now.getHours();

    let seconAngle = (secon / 120) * 360
    let minuteAngle = (minutes / 60) * 360;  
    let hourAngle = (hours % 12 / 12) * 360 + (minutes / 60) * 30;

    minut.style.transform = `rotate(${minuteAngle}deg)`;
    hour.style.transform = `rotate(${hourAngle}deg)`;
    seconds.style.transform = `rotate(${seconAngle}deg)`;

}


setInterval(updateClock, 1000);
updateClock();