
// Variables for edit name
var oldName = document.getElementById("vetName");
var newName = document.getElementById("newName");
var nameCancelBtn = document.getElementById("vetNameCancelBtn");
var nameSaveBtn = document.getElementById("vetNameSaveBtn");


function editName() {
    // Hide the current name, display the input box for the new name, then save to database
    // Hide the current name and edit button
    oldName.style.display = "none";
    document.getElementById("vetNameEditBtn").style.display = "none";
    // Display input box, save and cancel button
    newName.style.display = "block";
    nameCancelBtn.style.display = "block";
    nameSaveBtn.style.display = "block";
}

function cancelEditName() {
    // Hide name related
    oldName.style.display = "block";
    document.getElementById("vetNameEditBtn").style.display = "block";
    newName.style.display = "none";
    nameCancelBtn.style.display = "none";
    nameSaveBtn.style.display = "none";
}

// Variables for edit email
var oldEmail = document.getElementById("vetEmail");
var newEmail = document.getElementById("newEmail");
var emailCancelBtn = document.getElementById("vetEmailCancelBtn");
var emailSaveBtn = document.getElementById("vetEmailSaveBtn");

function editEmail() {
    // Hide the current email, display the input box for the new email, then save to database
    // Hide the current email and edit button
    oldEmail.style.display = "none";
    document.getElementById("vetEmailEditBtn").style.display = "none";
    // Display input box, save and cancel button
    newEmail.style.display = "block";
    emailCancelBtn.style.display = "block";
    emailSaveBtn.style.display = "block";
}

function cancelEditEmail() {
    // Hide email related
    oldEmail.style.display = "block";
    document.getElementById("vetEmailEditBtn").style.display = "block";
    newEmail.style.display = "none";
    emailCancelBtn.style.display = "none";
    emailSaveBtn.style.display = "none";
}

// Variables for edit password
var oldPassword = document.getElementById("vetPassword");
var newPassword = document.getElementById("newPassword");
var passwordCancelBtn = document.getElementById("vetPasswordCancelBtn");
var passwordSaveBtn = document.getElementById("vetPasswordSaveBtn");

function editPassword() {
    // Hide the current password, display the input box for the new email, then save to database
    // Hide the current password and edit button
    oldPassword.style.display = "none";
    document.getElementById("vetPasswordEditBtn").style.display = "none";
    // Display input box, save and cancel button
    newPassword.style.display = "block";
    passwordCancelBtn.style.display = "block";
    passwordSaveBtn.style.display = "block";
}

function cancelEditPassword() {
    // Hide password related
    oldPassword.style.display = "block";
    document.getElementById("vetPasswordEditBtn").style.display = "block";
    newPassword.style.display = "none";
    passwordCancelBtn.style.display = "none";
    passwordSaveBtn.style.display = "none";
}

document.getElementById("vetNameEditBtn").addEventListener("click", editName);
document.getElementById("vetNameCancelBtn").addEventListener("click", cancelEditName); 
document.getElementById("vetEmailEditBtn").addEventListener("click", editEmail);
document.getElementById("vetEmailCancelBtn").addEventListener("click", cancelEditEmail);
document.getElementById("vetPasswordEditBtn").addEventListener("click", editPassword);
document.getElementById("vetPasswordCancelBtn").addEventListener("click", cancelEditPassword);
