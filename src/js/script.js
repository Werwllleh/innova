const menu_services = document.querySelector('#menu_services');
const menu_services_open = document.querySelector('[data-menu="menu_services"]');

const patients = document.querySelector('#patients');
const patients_open = document.querySelector('[data-menu="patients"]');

menu_services.addEventListener('mouseenter', () => {
    menu_services_open.classList.add('nav-link-hover_show')
})
menu_services.addEventListener('mouseleave', () => {
    menu_services_open.classList.remove('nav-link-hover_show')
})

