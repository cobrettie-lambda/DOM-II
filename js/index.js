// Your code goes here


// Selectors

const logoHeadHover = document.querySelector('.nav-container .logo-heading');
const navItemHover = document.querySelector('.nav');
const scaleImg = document.querySelector('img');
const scaleImg2 = document.querySelector('.img-content img');
const scaleImg3 = document.querySelector('.img-fluid');
const scaleImg4 = document.querySelector('.content-destination img');


// Events


// Add event: mouseover, mouseleave for Fun Bus logo

logoHeadHover.addEventListener('mouseover', function (e) {
    e.target.style.fontSize = '5rem';
    e.target.style.cursor = 'pointer';
    e.target.style.transitionDuration = '.2s';

});
logoHeadHover.addEventListener('mouseleave', function (e) {
    e.target.style.fontSize = '';
});


// Add event: mouseover, mouseleave for nav-items

navItemHover.addEventListener('mouseover', function (e) {
    e.target.style.color = 'dodgerblue';
    e.target.style.fontSize = '2rem';
    e.target.style.transitionDuration = '.2s';
});
navItemHover.addEventListener('mouseout', function (e) {
    e.target.style.color = 'black';
    e.target.style.fontSize = '1.6rem';
});


// Add event: dblclick and transform for all images on page
// double click any image to transform its size, double click again to return to normal

scaleImg.addEventListener('dblclick', function () {
    scaleImg.classList.toggle('large');
});

scaleImg2.addEventListener('dblclick', function () {
    scaleImg2.classList.toggle('large');
});

scaleImg3.addEventListener('dblclick', function () {
    scaleImg3.classList.toggle('large');
});

scaleImg4.addEventListener('dblclick', function () {
    scaleImg4.classList.toggle('large');
});