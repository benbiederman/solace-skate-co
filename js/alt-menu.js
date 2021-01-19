const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');
const navListLinks = document.querySelectorAll('.nav-list li');
const logo = document.querySelector('.logo');
const checkout = document.querySelector('.checkout')

navigation();

function navigation() {
    menuBtn.addEventListener('click', (e) => {
        navList.classList.toggle('nav-list-active');
        menuBtn.classList.toggle('menu-btn-active');

        navListLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            }else {
                link.style.animation = `navSlide 0.5s ease forwards ${index /5  + 0.5}s`;
             }
        })
    })

    logo.addEventListener('click', () => {
        location.href = "../index.html";
    })

    checkout.addEventListener('click', () => {
        location.href = "../checkout.html";
    })

}
