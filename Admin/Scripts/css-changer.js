function activeCSSChange(userStatus) {
    var getBullet = document.getElementById("bullet");
    if (userStatus === "Active") {
        console.log("Active");
        getBullet.classList.add("status-active");
    }
    else {
        console.log("Inactive");
        getBullet.classList.add("status-inactive");
    }
}