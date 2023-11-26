const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});


document.querySelectorAll('.mobile-nav a.header__a').forEach(link => {
    link.addEventListener('click', function () {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.location.href = this.getAttribute('href');

            menu_btn.classList.remove('is-active');
            mobile_menu.classList.remove('is-active');
        }
    });
});
