function displayProfile() {
    var profileSettingsContainer = document.getElementById("profileSettingsContainer");
    if (profileSettingsContainer.style.display == "none") {
        profileSettingsContainer.style.display = "block";
    }
    else {
        profileSettingsContainer.style.display = "none";
    }
}

document.getElementById("profileSettingsBtn").addEventListener("click", displayProfile);