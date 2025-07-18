const underConstruction = false;

if (underConstruction) {
    document.getElementById("under-construction").classList.remove("hidden");
    document.getElementById("site-content").classList.add("hidden");
} else {
    document.getElementById("under-construction").classList.add("hidden");
    document.getElementById("site-content").classList.remove("hidden");
}