
// Variables for edit name
var oldName = document.getElementById("customerName");
var newName = document.getElementById("newName");
var nameCancelBtn = document.getElementById("customerNameCancelBtn");
var nameSaveBtn = document.getElementById("customerNameSaveBtn");


function editName() {
    // Hide the current name, display the input box for the new name, then save to database
    // Hide the current name and edit button
    oldName.style.display = "none";
    document.getElementById("customerNameEditBtn").style.display = "none";
    // Display input box, save and cancel button
    newName.style.display = "block";
    nameCancelBtn.style.display = "block";
    nameSaveBtn.style.display = "block";
}

function cancelEditName() {
    // Hide name related
    oldName.style.display = "block";
    document.getElementById("customerNameEditBtn").style.display = "block";
    newName.style.display = "none";
    nameCancelBtn.style.display = "none";
    nameSaveBtn.style.display = "none";
}

// Variables for edit email
var oldEmail = document.getElementById("customerEmail");
var newEmail = document.getElementById("newEmail");
var emailCancelBtn = document.getElementById("customerEmailCancelBtn");
var emailSaveBtn = document.getElementById("customerEmailSaveBtn");

function editEmail() {
    // Hide the current email, display the input box for the new email, then save to database
    // Hide the current email and edit button
    oldEmail.style.display = "none";
    document.getElementById("customerEmailEditBtn").style.display = "none";
    // Display input box, save and cancel button
    newEmail.style.display = "block";
    emailCancelBtn.style.display = "block";
    emailSaveBtn.style.display = "block";
}

function cancelEditEmail() {
    // Hide email related
    oldEmail.style.display = "block";
    document.getElementById("customerEmailEditBtn").style.display = "block";
    newEmail.style.display = "none";
    emailCancelBtn.style.display = "none";
    emailSaveBtn.style.display = "none";
}

// Variables for edit phone
var oldPhone = document.getElementById("customerPhone");
var newPhone = document.getElementById("newPhone");
var phoneCancelBtn = document.getElementById("customerPhoneCancelBtn");
var phoneSaveBtn = document.getElementById("customerPhoneSaveBtn");

function editPhone() {
    // Hide the current phone, display the input box for the new phone, then save to database
    // Hide the current phone and edit button
    oldPhone.style.display = "none";
    document.getElementById("customerPhoneEditBtn").style.display = "none";
    // Display input box, save and cancel button
    newPhone.style.display = "block";
    phoneCancelBtn.style.display = "block";
    phoneSaveBtn.style.display = "block";
}

function cancelEditPhone() {
    // Hide phone related
    oldPhone.style.display = "block";
    document.getElementById("customerPhoneEditBtn").style.display = "block";
    newPhone.style.display = "none";
    phoneCancelBtn.style.display = "none";
    phoneSaveBtn.style.display = "none";
}

// Variables for edit address
var oldAddress = document.getElementById("customerAddress");
var newAddress = document.getElementById("newAddress");
var addressCancelBtn = document.getElementById("customerAddressCancelBtn");
var addressSaveBtn = document.getElementById("customerAddressSaveBtn");

function editAddress() {
    // Hide the current address, display the input box for the new address, then save to database
    // Hide the current address and edit button
    oldAddress.style.display = "none";
    document.getElementById("customerAddressEditBtn").style.display = "none";
    // Display input box, save and cancel button
    newAddress.style.display = "block";
    addressCancelBtn.style.display = "block";
    addressSaveBtn.style.display = "block";
}

function cancelEditAddress() {
    // Hide address related
    oldAddress.style.display = "block";
    document.getElementById("customerAddressEditBtn").style.display = "block";
    newAddress.style.display = "none";
    addressCancelBtn.style.display = "none";
    addressSaveBtn.style.display = "none";
}

// Variables for edit telephone
var oldTele = document.getElementById("customerTele");
var newTele = document.getElementById("newTele");
var teleCancelBtn = document.getElementById("customerTeleCancelBtn");
var teleSaveBtn = document.getElementById("customerTeleSaveBtn");

function editTele() {
    // Hide the current tele, display the input box for the new tele, then save to database
    // Hide the current tele and edit button
    oldTele.style.display = "none";
    document.getElementById("customerTeleEditBtn").style.display = "none";
    // Display input box, save and cancel button
    newTele.style.display = "block";
    teleCancelBtn.style.display = "block";
    teleSaveBtn.style.display = "block";
}

function cancelEditTele() {
    // Hide phone related
    oldTele.style.display = "block";
    document.getElementById("customerTeleEditBtn").style.display = "block";
    newTele.style.display = "none";
    teleCancelBtn.style.display = "none";
    teleSaveBtn.style.display = "none";
}

// Variables for edit password
var oldPassword = document.getElementById("customerPassword");
var newPassword = document.getElementById("newPassword");
var passwordCancelBtn = document.getElementById("customerPasswordCancelBtn");
var passwordSaveBtn = document.getElementById("customerPasswordSaveBtn");

function editPassword() {
    // Hide the current password, display the input box for the new email, then save to database
    // Hide the current password and edit button
    oldPassword.style.display = "none";
    document.getElementById("customerPasswordEditBtn").style.display = "none";
    // Display input box, save and cancel button
    newPassword.style.display = "block";
    passwordCancelBtn.style.display = "block";
    passwordSaveBtn.style.display = "block";
}

function cancelEditPassword() {
    // Hide password related
    oldPassword.style.display = "block";
    document.getElementById("customerPasswordEditBtn").style.display = "block";
    newPassword.style.display = "none";
    passwordCancelBtn.style.display = "none";
    passwordSaveBtn.style.display = "none";
}

document.getElementById("customerNameEditBtn").addEventListener("click", editName);
document.getElementById("customerNameCancelBtn").addEventListener("click", cancelEditName); 
document.getElementById("customerEmailEditBtn").addEventListener("click", editEmail);
document.getElementById("customerEmailCancelBtn").addEventListener("click", cancelEditEmail);
document.getElementById("customerPhoneEditBtn").addEventListener("click", editPhone);
document.getElementById("customerPhoneCancelBtn").addEventListener("click", cancelEditPhone);
document.getElementById("customerAddressEditBtn").addEventListener("click", editAddress);
document.getElementById("customerAddressCancelBtn").addEventListener("click", cancelEditAddress);
document.getElementById("customerTeleEditBtn").addEventListener("click", editTele);
document.getElementById("customerTeleCancelBtn").addEventListener("click", cancelEditTele);
document.getElementById("customerPasswordEditBtn").addEventListener("click", editPassword);
document.getElementById("customerPasswordCancelBtn").addEventListener("click", cancelEditPassword);
