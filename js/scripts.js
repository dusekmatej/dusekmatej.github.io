document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("themeToggle");
    const body = document.body;
    const textElement = document.getElementById("themeText");


    toggleButton.addEventListener("click", function () {
        if (body.getAttribute("data-bs-theme") === "dark") {
            textElement.classList.remove("text-danger-subtle-dark")
            textElement.classList.add("text-danger-subtle-light");
            body.setAttribute("data-bs-theme", "light");

        } else {
            textElement.classList.remove("text-danger-subtle-light");
            textElement.classList.add("text-danger-subtle-dark");
            body.setAttribute("data-bs-theme", "dark");
        }
    });
});


// toggleButton.addEventListener("click", function (){
// if (theme === "dark")
// {
//     textElement.classList.remove("text-danger-subtle-light");
//     textElemtn.classList.add("text-danger-subtle-dark");
// }
// else
// {
//     
//     
// }
// });