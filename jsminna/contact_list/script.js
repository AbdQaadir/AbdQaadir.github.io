let filtered = [];
let numberData = [];
const NumberRow = document.querySelector("#contact-row");
const inputField = document.getElementById("search-input");
const errorMsg = document.querySelector(".error-msg");
const copyInput = document.querySelector("#copy-input");

fetch("https://emajency.com/js/numbers.json")
.then(res => res.json())
.then((data) => {
    numberData = [...data];
    filtered = [...data];
    PopulateUI(data);
})
.catch(err => {
    errorMsg.innerHTML = `
        <i class="fas fa-warning"></i> ${err.message}
    `
})

inputField.onkeydown = handleChange;
// phoneIcon.onclick = handleClick;

function handleChange(e){
    const val = e.target.value;
    console.log(val)
    if(val){
        filtered = numberData.filter(item => item.name.toLowerCase().includes(val.toLowerCase()));
        PopulateUI(filtered);
    }else{
        PopulateUI(numberData);
    }
}

function handleClick(e) {
    copyInput.value = "";
    const num = e.getAttribute("data-number");
    copyInput.value = num;
    copyInput.focus();
    copyInput.select();
    document.execCommand("copy");
    alert(`${num} copied to clipboard`)
}

function PopulateUI(data) {
    NumberRow.innerHTML = "";
    data.forEach(item => {
        NumberRow.innerHTML += ` <div class="col-11 col-lg-3 col-md-4 col-sm-5 my-4">
        <div class="contact-item">
          <div>
            <h4>${item.name}</h4>
            <h2>${item.number}</h2>
          </div>
          <i class="fas fa-phone" data-number=${item.number} onclick="handleClick(this)"></i>
        </div>
      </div>        
        `
    });

}