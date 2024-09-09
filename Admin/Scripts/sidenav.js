function toggleNav() {
    var nav = document.getElementById("sidenav");
    var content = document.getElementById("contentContainer");
    if (nav.style.width === "0px") {
        nav.style.width = "275px";
        content.style.marginLeft = "275px";
    } else {
        nav.style.width = "0";
        content.style.marginLeft = "0";
    }
}