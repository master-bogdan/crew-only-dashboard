import 'bootstrap'

window.addEventListener(`DOMContentLoaded`, () => {


    // Script for mobile menu
    const hamburger = document.querySelector(`.hamburger-menu`)
    const menu = document.querySelector(`.sidebar-menu`)

    hamburger.addEventListener(`click`, () => {
        hamburger.classList.toggle(`active`)
        menu.classList.toggle(`active`)
    })


    // Function for menu dropdown
    const collapseBtn = document.querySelectorAll(`.collapse-programs-btn`)
    collapseBtn.forEach(item => {
        item.addEventListener('click', () => {
            const collapse = item.nextElementSibling;
            item.classList.toggle('active');
            if (collapse.style.maxHeight) {
                collapse.style.maxHeight = null;
              } else {
                collapse.style.maxHeight = collapse.scrollHeight + "px";
              }
        })
    })
})
