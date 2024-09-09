var bookAppointmentContainer = document.getElementById("bookAppointmentContainer");
var cancelAppointmentContainer = document.getElementById("cancelAppointmentContainer");
var viewAppointmentContainer = document.getElementById("viewAppointmentContainer");

function showBookAppointmentContainer() {
    // Toggle containers display
    bookAppointmentContainer.style.display = "grid"; // Show book appointment container
    cancelAppointmentContainer.style.display = "none"; // Hide cancel appointment container
    viewAppointmentContainer.style.display = "none";

    // Toggle buttons display
    document.getElementById("addAptBtn").style.display = "none";
    document.getElementById("cancelAptBtn").style.display = "block";
    document.getElementById("viewAptBtn").style.display = "block";
}

function hideBookAppointmentContainer() {
    // Toggle containers display
    bookAppointmentContainer.style.display = "none";

    // Toggle buttons display
    document.getElementById("addAptBtn").style.display = "block";
    document.getElementById("cancelAptBtn").style.display = "block";
    document.getElementById("viewAptBtn").style.display = "block";
}

function showCancelAppointmentContainer() {
    // Toggle containers display
    bookAppointmentContainer.style.display = "none"; // Hide book appointment container
    cancelAppointmentContainer.style.display = "block"; // Show cancel appointment container
    viewAppointmentContainer.style.display = "none"; // Hide view appointments container

    // Toggle buttons display
    document.getElementById("addAptBtn").style.display = "block"; // Show add appointment button
    document.getElementById("cancelAptBtn").style.display = "none"; // Hide cancel an appointment button
    document.getElementById("viewAptBtn").style.display = "block";
}

function showViewAppointmentContainer() {
    // Toggle containers display
    bookAppointmentContainer.style.display = "none";
    cancelAppointmentContainer.style.display = "none";
    viewAppointmentContainer.style.display = "block";

    // Toggle buttons display
    document.getElementById("addAptBtn").style.display = "block";
    document.getElementById("cancelAptBtn").style.display = "block";
    document.getElementById("viewAptBtn").style.display = "none";
}

document.getElementById("addAptBtn").addEventListener("click", showBookAppointmentContainer);
document.getElementById("closeAddApt").addEventListener("click", hideBookAppointmentContainer);
document.getElementById("cancelAptBtn").addEventListener("click", showCancelAppointmentContainer);
document.getElementById("viewAptBtn").addEventListener("click", showViewAppointmentContainer);