document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("notification-popup");
    const closeBtn = document.getElementById("btn-popup-close");
    const acceptBtn = document.getElementById("btn-popup-accept");

    setTimeout(() => {
        popup.classList.add("show");
    }, 2000);

    closeBtn.addEventListener("click", () => {
        popup.classList.remove("show");
    });

    acceptBtn.addEventListener("click", () => {
        popup.classList.remove("show");
    });
});