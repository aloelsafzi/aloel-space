// make toggle button
let btnToggle = document.getElementById('btn-toggle');

btnToggle.addEventListener('click', function (e) {
    e.preventDefault();

    const nav = document.getElementById('link-menu');
    nav.classList.toggle('hidden')

    const icon = document.getElementById('icon');
    icon.classList.toggle('fa-toggle-off')
    icon.classList.toggle('fa-toggle-on')
})


// toggle mode
let toggleMode = document.getElementById('toggle-mode');

toggleMode.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.toggle('bg-secondary');
    document.body.classList.toggle('text-white');
    const bgWhite = document.querySelectorAll('.bg-white');
    bgWhite.forEach(bg => {
        bg.classList.toggle('bg-secondary')
    })
    const bgBase = document.getElementById('base');
    bgBase.classList.remove('bg-base')

    const iconMode = document.getElementById('icon-mode')
    iconMode.classList.toggle('fa-sun')
    iconMode.classList.toggle('fa-moon')
})