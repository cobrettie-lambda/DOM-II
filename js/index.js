// Your code goes here

// mouseover, mouseleave for Fun Bus logo
const logoHeadHover = document.querySelector('.nav-container .logo-heading');
logoHeadHover.addEventListener('mouseover', function (e) {
    e.target.style.fontSize = '5rem';
    e.target.style.cursor = 'pointer';
    e.target.style.transitionDuration = '.2s';

});
logoHeadHover.addEventListener('mouseleave', function (e) {
    e.target.style.fontSize = '';
});


// mouseover, mouseleave for nav-items
const navItemHover = document.querySelector('.nav');
navItemHover.addEventListener('mouseover', function (e) {
    e.target.style.color = 'dodgerblue';
    e.target.style.fontSize = '2rem';
    e.target.style.transitionDuration = '.2s';
});
navItemHover.addEventListener('mouseout', function (e) {
    e.target.style.color = 'black';
    e.target.style.fontSize = '1.6rem';
});


// scale for fun-bus.jpg
const scaleImg = document.querySelector('img');
scaleImg.addEventListener('dblclick', function () {
    scaleImg.classList.toggle('large');
});