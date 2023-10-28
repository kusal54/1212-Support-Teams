// Mobile Nav Start//
document.getElementById('hamburgerMenu').onclick = function () {
    document.getElementById('mobileCloseBtn').style.display = "inline";
    document.getElementById('hamburgerMenu').style.display = "none";
    document.getElementById('hamMenu').style.display = "flex";
    document.getElementById('mobileNav').style.borderBottom = "#ffffff";
}

document.getElementById('mobileCloseBtn').onclick = function () {
    document.getElementById('mobileCloseBtn').style.display = "none";
    document.getElementById('hamburgerMenu').style.display = "inline";
    document.getElementById('hamMenu').style.display = "none";
}

// Sample Answers //