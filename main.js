/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('div[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Get the href attribute of the corresponding nav__link
            const navLink = document.querySelector(`.nav__menu a[href*='${sectionId}.html']`);

            if (navLink) {
                document.querySelectorAll('.nav__menu a.nav__link').forEach(link => {
                    link.classList.remove('active-link');
                });
                navLink.classList.add('active-link');
            }
        }
    });
}

window.addEventListener('DOMContentLoaded', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__header, .section__title,.sectionpart__title`,{delay: 600})
sr.reveal(`.home__footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'top'})
sr.reveal(`.home__img1`,{delay:900,origin: 'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate,.specs__data1,.part__data,.fan__data,.sanjiao`,{origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img,.specs__img1,.part__img`,{origin: 'right'})
sr.reveal(`.case__img,.qc__img`,{origin: 'top'})
sr.reveal(`.case__data`)


// Get all the image elements
const imageElements = document.querySelectorAll('.home__img, .home__img1, .sponsor__img, .products__card, .specs__img, .discount__img, .specs__img1, .part__img, .case__img, .qc__img');

// Add an event listener to each image element
imageElements.forEach((img) => {

    img.addEventListener('mouseover', () => {
        // Scale the image on hover
        img.style.transition = 'transform 1s';
        img.style.transform = 'scale(1.1)';
    });

    img.addEventListener('mouseout', () => {
        img.style.transition = 'transform 1s';
        // Reset the scale when the mouse leaves
        img.style.transform = 'scale(1)';
    });
});
