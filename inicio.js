var typed = new Typed(".multiple-text", {
    strings: [
        "HTML ", 
        "CCS ", 
        "JS ",
        "PHP ",
        "ANGULAR ",
        "NODE ",
        "JAVA ",
        "PHP MY ADMIN",
        "MONGO DB ",
        "SQL ",
        "GIT "
    ],
    typeSpeed: 50,
    backSpeed: 70,
    backDelay: 100,
    loop: true
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
