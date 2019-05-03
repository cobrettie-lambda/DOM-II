// Your code goes here

// mouseover, mouseleave for Fun Bus logo
const logoHeadHover = document.querySelector('.nav-container .logo-heading');
logoHeadHover.addEventListener('mouseover', function (e) {
    e.target.style.fontSize = '5rem';
    e.target.style.cursor = 'pointer';
});
logoHeadHover.addEventListener('mouseleave', function (e) {
    e.target.style.fontSize = '';
});