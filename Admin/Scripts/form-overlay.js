function displayForm() {
    document.getElementById("floatingFormContainer").style.display = "flex";
}

function closeForm() {
    document.getElementById("floatingFormContainer").style.display = "none";
}

document.getElementById("formOverlayBtn").addEventListener("click", displayForm);
document.getElementById("closeForm").addEventListener("click", closeForm);
