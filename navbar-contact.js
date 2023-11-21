
document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.createElement("div");
    navbarContainer.classList.add("navbar-container");
    document.body.prepend(navbarContainer);

    // Faz  uma requisição para carregar o conteúdo da nav bar
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "navbar.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            navbarContainer.innerHTML = xhr.responseText;
        }
    };

    const scriptElement = document.createElement("script");
    scriptElement.src = "main.js";
    document.body.appendChild(scriptElement);

    xhr.send();

});


