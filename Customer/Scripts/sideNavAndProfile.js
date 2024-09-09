function toggleNav() {
    var nav = document.getElementById("sideNav");
    var content = document.getElementById("contentContainer");
    console.log("Toggle nav");
    if (nav.style.display === "none") {
        nav.style.display = "flex";
        nav.style.flexBasis = "15%";
        content.style.flexBasis = "85%";
        console.log("If");
    } else {
        nav.style.display = "none";
        nav.style.flexBasis = "0%";
        content.style.flexBasis = "100%";
        console.log("Else");
    }
}

function displayProfile() {
    var profileSettingsContainer = document.getElementById("webProfileSettingsContainer");
    if (profileSettingsContainer.style.display == "none") {
        profileSettingsContainer.style.display = "block";
    }
    else {
        profileSettingsContainer.style.display = "none";
    }
}

function displayMobileProfile() {
    var profileSettingsContainer = document.getElementById("mobileProfileSettingsContainer");
    if (profileSettingsContainer.style.display == "none") {
        profileSettingsContainer.style.display = "block";
    }
    else {
        profileSettingsContainer.style.display = "none";
    }
}

document.getElementById("profileSettingsBtn").addEventListener("click", displayProfile);
document.getElementById("mobileProfileSettingsBtn").addEventListener("click", displayMobileProfile);