document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("themeToggle");
    const body = document.body;
    const textElement = document.querySelectorAll(".themeText");
    const activeUnderline = document.getElementById("themeActiveUnderline");
    const H5Underline = document.getElementById("h5-underline-theme");

        toggleButton.addEventListener("click", function () {
            if (body.getAttribute("data-bs-theme") === "dark") {
                textElement.forEach(element => {
                    element.classList.remove("text-danger-subtle-dark");
                    element.classList.add("text-danger-subtle-light");
                });
                
                activeUnderline.classList.remove("active-dark");
                activeUnderline.classList.add("active-light");

                H5Underline.classList.remove("h5-underline-danger-subtle-dark");
                H5Underline.classList.add("h5-underline-danger-subtle-light");

                body.setAttribute("data-bs-theme", "light");
            } else {
                textElement.forEach(element => {
                    element.classList.remove("text-danger-subtle-light");
                    element.classList.add("text-danger-subtle-dark");
                });

                activeUnderline.classList.remove("active-light");
                activeUnderline.classList.add("active-dark");

                H5Underline.classList.remove("h5-underline-danger-subtle-light");
                H5Underline.classList.add("h5-underline-danger-subtle-dark");

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