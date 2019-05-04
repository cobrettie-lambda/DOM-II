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


// dblclick and transform for all images on page
// double click any image to transform its size, double click again to return to normal
const scaleImg = document.querySelector('img');
scaleImg.addEventListener('dblclick', function () {
    scaleImg.classList.toggle('large');
});

const scaleImg2 = document.querySelector('.img-content img');
scaleImg2.addEventListener('dblclick', function () {
    scaleImg2.classList.toggle('large');
});

const scaleImg3 = document.querySelector('.img-fluid');
scaleImg3.addEventListener('dblclick', function () {
    scaleImg3.classList.toggle('large');
});

const scaleImg4 = document.querySelector('.content-destination img');
scaleImg4.addEventListener('dblclick', function () {
    scaleImg4.classList.toggle('large');
});