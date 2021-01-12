const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');
const navListLinks = document.querySelectorAll('.nav-list li');
header = document.querySelector('header');

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

}
