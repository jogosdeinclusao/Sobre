document.getElementById("toggle-theme").addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    const themeButton = document.getElementById("toggle-theme");
    themeButton.textContent = document.body.classList.contains("dark-theme") ? "🌞" : "🌙";
});