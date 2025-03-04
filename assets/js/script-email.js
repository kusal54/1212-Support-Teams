// Mobile Nav Start//
document.getElementById('hamburgerMenu').onclick = function(){
    document.getElementById('mobileCloseBtn').style.display = "inline";
    document.getElementById('hamburgerMenu').style.display = "none";
    document.getElementById('hamMenu').style.display = "flex";
    document.getElementById('mobileNav').style.borderBottom = "#ffffff";
    document.getElementById('hero-section').style.display = "none";
    document.getElementById('channel-section').style.display = "none";
    document.getElementById('footer-section').style.display = "none";
    document.getElementById('teamSection').style.display = "none";
    document.getElementById('targetsection').style.display = "none";
    document.getElementById('answersection').style.display = "none";
}

document.getElementById('mobileCloseBtn').onclick = function(){
    document.getElementById('mobileCloseBtn').style.display = "none";
    document.getElementById('hamburgerMenu').style.display = "inline";
    document.getElementById('hamMenu').style.display = "none";
    document.getElementById('hero-section').style.display = "inherit";
    document.getElementById('channel-section').style.display = "inherit";
    document.getElementById('footer-section').style.display = "inherit";
    document.getElementById('teamSection').style.display = "inherit";
    document.getElementById('targetsection').style.display = "inherit";
    document.getElementById('answersection').style.display = "inherit";
}


// Mobile Nav End//


// Sample Answers //
document.getElementById('tabStart').onclick = function () {
    document.getElementById('tblStartUp').style.display = "inline";
    document.getElementById('tblNc').style.display = "none";
    document.getElementById('tblFaults').style.display = "none";
    document.getElementById('tblBilling').style.display = "none";
    document.getElementById('tblPackages').style.display = "none";
    document.getElementById('tblPackageChange').style.display = "none";
    document.getElementById('tblJob').style.display = "none";
    document.getElementById('tblFeedbacks').style.display = "none";
    document.getElementById('tblTeleshop').style.display = "none";
    document.getElementById('tblSelfService').style.display = "none";
    document.getElementById('tblGb').style.display = "none";
    document.getElementById('tblOther').style.display = "none";
}

document.getElementById('tabNc').onclick = function () {
    document.getElementById('tblStartUp').style.display = "none";
    document.getElementById('tblNc').style.display = "inline";
    document.getElementById('tblFaults').style.display = "none";
    document.getElementById('tblBilling').style.display = "none";
    document.getElementById('tblPackages').style.display = "none";
    document.getElementById('tblPackageChange').style.display = "none";
    document.getElementById('tblJob').style.display = "none";
    document.getElementById('tblFeedbacks').style.display = "none";
    document.getElementById('tblTeleshop').style.display = "none";
    document.getElementById('tblSelfService').style.display = "none";
    document.getElementById('tblGb').style.display = "none";
    document.getElementById('tblOther').style.display = "none";
}

document.getElementById('tabFaults').onclick = function () {
    document.getElementById('tblStartUp').style.display = "none";
    document.getElementById('tblNc').style.display = "none";
    document.getElementById('tblFaults').style.display = "inline";
    document.getElementById('tblBilling').style.display = "none";
    document.getElementById('tblPackages').style.display = "none";
    document.getElementById('tblPackageChange').style.display = "none";
    document.getElementById('tblJob').style.display = "none";
    document.getElementById('tblFeedbacks').style.display = "none";
    document.getElementById('tblTeleshop').style.display = "none";
    document.getElementById('tblSelfService').style.display = "none";
    document.getElementById('tblGb').style.display = "none";
    document.getElementById('tblOther').style.display = "none";
}

document.getElementById('tabBilling').onclick = function () {
    document.getElementById('tblStartUp').style.display = "none";
    document.getElementById('tblNc').style.display = "none";
    document.getElementById('tblFaults').style.display = "none";
    document.getElementById('tblBilling').style.display = "inline";
    document.getElementById('tblPackages').style.display = "none";
    document.getElementById('tblPackageChange').style.display = "none";
    document.getElementById('tblJob').style.display = "none";
    document.getElementById('tblFeedbacks').style.display = "none";
    document.getElementById('tblTeleshop').style.display = "none";
    document.getElementById('tblSelfService').style.display = "none";
    document.getElementById('tblGb').style.display = "none";
    document.getElementById('tblOther').style.display = "none";
}

document.getElementById('tabPackages').onclick = function () {
    document.getElementById('tblStartUp').style.display = "none";
    document.getElementById('tblNc').style.display = "none";
    document.getElementById('tblFaults').style.display = "none";
    document.getElementById('tblBilling').style.display = "none";
    document.getElementById('tblPackages').style.display = "inline";
    document.getElementById('tblPackageChange').style.display = "none";
    document.getElementById('tblJob').style.display = "none";
    document.getElementById('tblFeedbacks').style.display = "none";
    document.getElementById('tblTeleshop').style.display = "none";
    document.getElementById('tblSelfService').style.display = "none";
    document.getElementById('tblGb').style.display = "none";
    document.getElementById('tblOther').style.display = "none";
}

document.getElementById('tabPackageChange').onclick = function () {
    document.getElementById('tblStartUp').style.display = "none";
    document.getElementById('tblNc').style.display = "none";
    document.getElementById('tblFaults').style.display = "none";
    document.getElementById('tblBilling').style.display = "none";
    document.getElementById('tblPackages').style.display = "none";
    document.getElementById('tblPackageChange').style.display = "inline";
    document.getElementById('tblJob').style.display = "none";
    document.getElementById('tblFeedbacks').style.display = "none";
    document.getElementById('tblTeleshop').style.display = "none";
    document.getElementById('tblSelfService').style.display = "none";
    document.getElementById('tblGb').style.display = "none";
    document.getElementById('tblOther').style.display = "none";
}

document.getElementById('tabJob').onclick = function () {
    document.getElementById('tblStartUp').style.display = "none";
    document.getElementById('tblNc').style.display = "none";
    document.getElementById('tblFaults').style.display = "none";
    document.getElementById('tblBilling').style.display = "none";
    document.getElementById('tblPackages').style.display = "none";
    document.getElementById('tblPackageChange').style.display = "none";
    document.getElementById('tblJob').style.display = "inline";
    document.getElementById('tblFeedbacks').style.display = "none";
    document.getElementById('tblTeleshop').style.display = "none";
    document.getElementById('tblSelfService').style.display = "none";
    document.getElementById('tblGb').style.display = "none";
    document.getElementById('tblOther').style.display = "none";
}

document.getElementById('tabFeedbacks').onclick = function () {
    document.getElementById('tblStartUp').style.display = "none";
    document.getElementById('tblNc').style.display = "none";
    document.getElementById('tblFaults').style.display = "none";
    document.getElementById('tblBilling').style.display = "none";
    document.getElementById('tblPackages').style.display = "none";
    document.getElementById('tblPackageChange').style.display = "none";
    document.getElementById('tblJob').style.display = "none";
    document.getElementById('tblFeedbacks').style.display = "inline";
    document.getElementById('tblTeleshop').style.display = "none";
    document.getElementById('tblSelfService').style.display = "none";
    document.getElementById('tblGb').style.display = "none";
    document.getElementById('tblOther').style.display = "none";
}

document.getElementById('tabTeleshop').onclick = function () {
    document.getElementById('tblStartUp').style.display = "none";
    document.getElementById('tblNc').style.display = "none";
    document.getElementById('tblFaults').style.display = "none";
    document.getElementById('tblBilling').style.display = "none";
    document.getElementById('tblPackages').style.display = "none";
    document.getElementById('tblPackageChange').style.display = "none";
    document.getElementById('tblJob').style.display = "none";
    document.getElementById('tblFeedbacks').style.display = "none";
    document.getElementById('tblTeleshop').style.display = "inline";
    document.getElementById('tblSelfService').style.display = "none";
    document.getElementById('tblGb').style.display = "none";
    document.getElementById('tblOther').style.display = "none";
}

document.getElementById('tabSelfServices').onclick = function () {
    document.getElementById('tblStartUp').style.display = "none";
    document.getElementById('tblNc').style.display = "none";
    document.getElementById('tblFaults').style.display = "none";
    document.getElementById('tblBilling').style.display = "none";
    document.getElementById('tblPackages').style.display = "none";
    document.getElementById('tblPackageChange').style.display = "none";
    document.getElementById('tblJob').style.display = "none";
    document.getElementById('tblFeedbacks').style.display = "none";
    document.getElementById('tblTeleshop').style.display = "none";
    document.getElementById('tblSelfService').style.display = "inline";
    document.getElementById('tblGb').style.display = "none";
    document.getElementById('tblOther').style.display = "none";
}

document.getElementById('tabGb').onclick = function () {
    document.getElementById('tblStartUp').style.display = "none";
    document.getElementById('tblNc').style.display = "none";
    document.getElementById('tblFaults').style.display = "none";
    document.getElementById('tblBilling').style.display = "none";
    document.getElementById('tblPackages').style.display = "none";
    document.getElementById('tblPackageChange').style.display = "none";
    document.getElementById('tblJob').style.display = "none";
    document.getElementById('tblFeedbacks').style.display = "none";
    document.getElementById('tblTeleshop').style.display = "none";
    document.getElementById('tblSelfService').style.display = "none";
    document.getElementById('tblGb').style.display = "inline";
    document.getElementById('tblOther').style.display = "none";
}

document.getElementById('tabOther').onclick = function () {
    document.getElementById('tblStartUp').style.display = "none";
    document.getElementById('tblNc').style.display = "none";
    document.getElementById('tblFaults').style.display = "none";
    document.getElementById('tblBilling').style.display = "none";
    document.getElementById('tblPackages').style.display = "none";
    document.getElementById('tblPackageChange').style.display = "none";
    document.getElementById('tblJob').style.display = "none";
    document.getElementById('tblFeedbacks').style.display = "none";
    document.getElementById('tblTeleshop').style.display = "none";
    document.getElementById('tblSelfService').style.display = "none";
    document.getElementById('tblGb').style.display = "none";
    document.getElementById('tblOther').style.display = "inline";
}
// Sample Answers //