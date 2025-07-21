function updateDateTime() {
    const now = new Date();

    const time = now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    const timeElement = document.querySelector(".time");
    if (timeElement) {
        timeElement.textContent = time;
    }
}

updateDateTime();
setInterval(updateDateTime, 1000);

function hideContactMeMobile() {
    const contactDiv = document.getElementById("contactme_mobile");
    if (contactDiv) {
        contactDiv.style.display = "none";
    }
}

function showContactMeMobile() {
    document.getElementById("contactme_mobile").style.display = "flex";
}