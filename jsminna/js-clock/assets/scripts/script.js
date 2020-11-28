// HTML ELEMENTS
const container = document.querySelector(".container");
const timeEl = document.querySelector(".time");
const locationEl = document.querySelector("#location");
const dayStatus = document.querySelector(".day-status");
const toggleBtn = document.querySelector(".toggle-btn");
// 
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const date = new Date();
locationEl.innerHTML = `In ${timezone.split("/")[1]}, ${timezone.split("/")[0]}`

setInterval(UpdateUI, 1000)

function UpdateUI(){
    const hour = date.getHours();
    const minutes = date.getMinutes()
    timeEl.innerHTML = `${hour}:${minutes}`
    container.style.backgroundImage = "url('./assets/images/bg-morning.jpg')";

    if(hour > 11){
        dayStatus.innerHTML = "afternoon";
    }else{
        dayStatus.innerHTML = "morning";
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