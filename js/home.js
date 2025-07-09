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
