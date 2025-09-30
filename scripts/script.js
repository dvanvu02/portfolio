
var typed = new Typed(".typing", {
    strings: ["", "Web Developer", "", "Java Developer", ""],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
    });
});