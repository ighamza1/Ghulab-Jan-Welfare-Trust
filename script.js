
document.getElementById("openModal").onclick = function() {
    document.getElementById("qrModal").style.display = "block";
}

document.querySelector(".close").onclick = function() {
    document.getElementById("qrModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target === document.getElementById("qrModal")) {
        document.getElementById("qrModal").style.display = "none";
    }
}
function copyToClipboard() {
    const text = document.querySelector("#accountNumber span").innerText;
    navigator.clipboard.writeText(text).then(() => {
        let msg = document.getElementById("copyMessage");
        msg.style.display = "block"; // Show message
        setTimeout(() => msg.style.display = "none", 1500); // Hide after 1.5 sec
    });
}
