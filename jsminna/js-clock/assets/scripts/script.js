// HTML ELEMENTS
const container = document.querySelector(".container");
const timeEl = document.querySelector(".time");
const locationEl = document.querySelector("#location");
const locationEl2 = document.querySelector("#location-2");
const dayStatus = document.querySelector(".day-status");
const toggleBtn = document.querySelector(".toggle-btn");

// /////////
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
let now = new Date();
let onejan = new Date(now.getFullYear(), 0, 1);
let week = Math.ceil( (((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7 );

///////////
locationEl.innerHTML = `In ${timezone.split("/")[1]}, ${timezone.split("/")[0]}`
locationEl2.innerHTML = timezone;
document.querySelector("#day-of-week").innerHTML = new Date().getDay();

document.querySelector("#day-of-the-year").innerHTML = ((week - 2) * 7) + now.getDay();

document.querySelector("#week-number").innerHTML = week;

setInterval(UpdateUI, 1000)

function UpdateUI(){
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    timeEl.innerHTML = `${hour}:${minutes}`

    if(hour > 11 && hour <= 16){
        dayStatus.innerHTML = "afternoon";
        container.style.backgroundImage = "url('./assets/images/bg-afternoon.jpg')";
    }else if(hour > 16 && hour < 23 && minutes <= 59 ){
        dayStatus.innerHTML = "evening";
        container.style.backgroundImage = "url('./assets/images/bg-night.jpg')";
    }else{
        dayStatus.innerHTML = "morning";
        container.style.backgroundImage = "url('./assets/images/bg-morning.jpg')";
    }
}

function ToggleDisplay() {
    const content = toggleBtn.innerHTML;

    document.getElementById("details").classList.toggle("active");
    window.scrollTo(0,document.body.scrollHeight);

    if(content.split(" ")[0] === "MORE"){
        toggleBtn.innerHTML = "LESS <i class='fas fa-chevron-up'></i>"
    }else{
        toggleBtn.innerHTML = "MORE <i class='fas fa-chevron-down'></i>"
    }
}