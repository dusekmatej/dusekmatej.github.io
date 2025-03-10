document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;
    const toggleButton = document.getElementById("themeToggle");
    
    // Theme items for change
    const textElement = document.querySelectorAll(".themeText");
    const activeUnderline = document.getElementById("themeActiveUnderline");
    const H5Underline = document.getElementById("h5-underline-theme");

    // Class switcher
    function switchClass(items, oldClass, newClass) {
        items.forEach(item => {
            item.classList.remove(oldClass);
            item.classList.add(newClass);
        });
    }

    function switchTheme() {
        if (body.getAttribute("data-bs-theme") === "dark") {
            switchClass(textElement, "text-dark", "text-light");
            switchClass([activeUnderline], "active-dark", "active-light");
            switchClass([H5Underline], "h5-underline-dark", "h5-underline-light");
            // Change theme to light
            body.setAttribute("data-bs-theme", "light")
        } else {
            switchClass(textElement, "text-light", "text-dark");
            switchClass([activeUnderline], "active-light", "active-dark");
            switchClass([H5Underline], "h5-underline-light", "h5-underline-dark");
            // Change theme to dark
            body.setAttribute("data-bs-theme", "dark")
        }
    }

    toggleButton.addEventListener("click", switchTheme);
});