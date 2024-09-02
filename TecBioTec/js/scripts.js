// Configuración de la fecha de inicio del evento
var eventDate = new Date("November 7, 2024 09:00:00").getTime();

// Actualiza la cuenta regresiva cada segundo
var countdownInterval = setInterval(function () {
    var now = new Date().getTime();
    var distance = eventDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "¡El evento ha comenzado!";
    }
}, 1000);

// Manejo del cambio de tema
document.querySelectorAll('[data-bs-theme-value]').forEach(function (button) {
    button.addEventListener('click', function () {
        var theme = this.getAttribute('data-bs-theme-value');
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
        updateLogo(); // Actualiza el logo después del cambio de tema
        updateThemeIcon(theme); // Actualiza el ícono del tema
    });
});

// Aplicar el tema guardado en el almacenamiento local (si existe)
var savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
    updateThemeIcon(savedTheme); // Actualiza el ícono del tema al cargar la página
}

// Función para cambiar la imagen del logo según el tema
function updateLogo() {
    var currentTheme = document.documentElement.getAttribute('data-bs-theme');
    var logo = document.getElementById('logo-main');
    if (currentTheme === 'dark') {
        logo.src = 'images/logoTB.png';
    } else {
        logo.src = 'images/logoTN.png';
    }
}

// Función para actualizar el ícono del tema seleccionado
function updateThemeIcon(theme) {
    var themeIcon = document.querySelector('.theme-icon-active');
    var sunIcon = '<use href="#sun-fill"></use>';
    var moonIcon = '<use href="#moon-stars-fill"></use>';
    var autoIcon = '<use href="#circle-half"></use>';

    if (theme === 'light') {
        themeIcon.innerHTML = sunIcon;
    } else if (theme === 'dark') {
        themeIcon.innerHTML = moonIcon;
    } else {
        themeIcon.innerHTML = autoIcon;
    }
}

// Aplicar la imagen correcta al cargar la página
updateLogo();