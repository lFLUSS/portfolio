const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
}));

const typedHome = new Typed('#home-typed', {
    strings: ['web developer', 'designer', 'front and back end developer'],
    typeSpeed : 50,
    backspeed : 40,
    loop : true,
    backdelay: 2000,
    cursorChar: '_', 
})

const shadowheader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowheader)



const contactForm = document.getElementById('contact-form'),
            contactMessage = document.getElementById('contact-message')


const sendEmail = (e) =>{
        e.preventDefault()

        emailjs.sendForm('service_to0e8l7', 'template_jxa37mh', '#contact-form', '7pJBWRk81MB9WDZfU')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully'
        })
}
contactForm.addEventListener('submit', sendEmail)