document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;
    const toggleButton = document.getElementById("themeToggleButton");
    
    // Theme items for change
    const textElement = document.querySelectorAll(".themeText");
    const animatedUnderline = document.querySelectorAll(".onHoverUnderline");
    const activeUnderline = document.getElementById("themeActiveUnderline");

    // Class switcher
    function switchClass(items, oldClass, newClass) {
        items.forEach(item => {
            item.classList.remove(oldClass);
            item.classList.add(newClass);
        });
    }

    function switchTheme() {
        if (body.getAttribute("data-bs-theme") === "dark") {
            // Change my classes to light
            switchClass(textElement, "text-dark", "text-light");
            switchClass(animatedUnderline, "on-hover-dark", "on-hover-light");
            switchClass([activeUnderline], "active-dark", "active-light");
            switchClass([toggleButton], "icon-dark", "icon-light");
            // Change theme to light
            body.setAttribute("data-bs-theme", "light")
        } else {
            // Change my classes to dark
            switchClass(textElement, "text-light", "text-dark");
            switchClass(animatedUnderline, "on-hover-light", "on-hover-dark");
            switchClass([activeUnderline], "active-light", "active-dark");
            switchClass([toggleButton], "icon-light", "icon-dark");
            // Change theme to dark
            body.setAttribute("data-bs-theme", "dark")
        }
    }

    toggleButton.addEventListener("click", switchTheme);
});