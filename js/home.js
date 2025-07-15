function updateDateTime() {
    const now = new Date();

    const date = now.toLocaleDateString();    
    const time = now.toLocaleTimeString();     

    const datetimeString = `${date}\n${time}`;

    const datetimeElement = document.querySelector(".datetime");
    if (datetimeElement) {
        datetimeElement.textContent = datetimeString;
    }
}

updateDateTime();
setInterval(updateDateTime, 1000);


// var slmodal = document.querySelector("slmodal");
// var slbtn = document.querySelector("slmodalbtn");
// var closeslspan = document.querySelector("closemodal")[0];

// slbtn.onclick = function(){
//     slmodal.style.display = 'block';
// };

// closeslspan.onclick = function(){
//     slmodal.style.display = 'none';
// };

