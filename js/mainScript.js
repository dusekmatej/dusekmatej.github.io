document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;
    const toggleButton = document.getElementById("themeToggleButton");
    
    // Theme items for change
    const textElement = document.querySelectorAll(".themeText");
    const cardBorder = document.querySelectorAll(".customCardBorder")
    const animatedUnderline = document.querySelectorAll(".onHoverUnderline");
    const H5Underline = document.querySelectorAll(".customH5Underline");

    const navBarBackground = document.getElementById("customNavBarBackground");
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
            switchClass(textElement, "text-dark", "text-light");
            switchClass(cardBorder, "card-border-dark", "card-border-light");
            switchClass(animatedUnderline, "on-hover-dark", "on-hover-light");
            switchClass(H5Underline, "h5-underline-dark", "h5-underline-light");
            switchClass([navBarBackground], "bg-dark-subtle", "nav-bg-light");
            switchClass([activeUnderline], "active-dark", "active-light");
            switchClass([toggleButton], "icon-dark", "icon-light");
            // Change theme to light
            body.setAttribute("data-bs-theme", "light")
        } else {
            switchClass(textElement, "text-light", "text-dark");
            switchClass(cardBorder, "card-border-light", "card-border-dark");
            switchClass(H5Underline, "h5-underline-light", "h5-underline-dark");
            switchClass(animatedUnderline, "on-hover-light", "on-hover-dark");
            switchClass([navBarBackground], "nav-bg-light", "bg-dark-subtle");
            switchClass([activeUnderline], "active-light", "active-dark");
            switchClass([toggleButton], "icon-light", "icon-dark");
            // Change theme to dark
            body.setAttribute("data-bs-theme", "dark")
        }
    }

    toggleButton.addEventListener("click", switchTheme);
});