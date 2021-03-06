let filtered = [];
let numberData = [];
const NumberRow = document.querySelector("#contact-row");
const inputField = document.getElementById("search-input");
const errorMsg = document.querySelector(".error-msg");
const fetchingText = document.querySelector(".fetching-text");

fetch("https://emajency.com/js/numbers.json")
.then(res => res.json())
.then((data) => {
    fetchingText.style.display = "none";
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

function PopulateUI(data) {
    NumberRow.innerHTML = "";
    data.forEach(item => {
        NumberRow.innerHTML += ` <div class="col-11 col-lg-3 col-md-4 col-sm-5 my-4">
        <div class="contact-item">
          <div>
            <h4>${item.name}</h4>
            <h2>${item.number}</h2>
          </div>
          <a href=tel:${item.number}><i class="fas fa-phone"></i></a>
        </div>
      </div>        
        `
    });

}