document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;
    const toggleButton = document.getElementById("themeToggleButton");

    const textElement = document.querySelectorAll(".themeText");
    const animatedUnderline = document.querySelectorAll(".onHoverUnderline");
    const navBarBackground = document.getElementById("customNavBarBackground");
    const activeUnderline = document.getElementById("themeActiveUnderline");
    

    function switchClass(items, oldClass, newClass) {
        items.forEach(item => {
            item.classList.remove(oldClass);
            item.classList.add(newClass);
        });
    }

    function switchTheme() {
        if (body.getAttribute("data-bs-theme") === "dark") {
            switchClass(textElement, "text-dark", "text-light");
            switchClass(animatedUnderline, "on-hover-dark", "on-hover-light");
            switchClass([navBarBackground], "bg-dark-subtle", "nav-bg-light");
            switchClass([activeUnderline], "active-dark", "active-light");
            body.setAttribute("data-bs-theme", "light")
        } else {
            switchClass(textElement, "text-light", "text-dark");
            switchClass(animatedUnderline, "on-hover-light", "on-hover-dark");
            switchClass([navBarBackground], "nav-bg-light", "bg-dark-subtle");
            switchClass([activeUnderline], "active-light", "active-dark");
            body.setAttribute("data-bs-theme", "dark")
        }
    }

    toggleButton.addEventListener("click", switchTheme);
});