function showNotification(message = "Notification") {
    const placeholder = document.getElementById('notification-placeholder');

    const baseNotification = document.createElement("div");
    baseNotification.className = "notification";
    baseNotification.innerText = message;

    placeholder.appendChild(baseNotification);

    setTimeout(() => {
        baseNotification.remove();
    }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
    const notifyEvents = document.querySelectorAll(".underConstructionButton");

    notifyEvents.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // optional
            showNotification("This feature is coming soon! 🚧");
        });
    });
});