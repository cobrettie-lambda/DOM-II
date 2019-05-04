// Your code goes here


// Selectors

let logoHeadHover = document.querySelector('.nav-container .logo-heading');
let navItems = document.querySelectorAll('.nav-link');
let navItemHover = document.querySelector('.nav');
let images = document.querySelectorAll('img');
let scaleImg = document.querySelector('img');
let scaleImg2 = document.querySelector('.img-content img');
let scaleImg3 = document.querySelector('.img-fluid');
let scaleImg4 = document.querySelector('.content-destination img');



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

navItems.forEach(function (item) {
    item.addEventListener('mouseover', function (event) {
        event.target.style.color = 'dodgerblue'
        event.target.style.fontSize = '2rem';
        event.target.style.transitionDuration = '.2s';
        event.preventDefault();

    });
    item.addEventListener('mouseout', function (event) {
        event.target.style.color = 'black';
        event.target.style.fontSize = '';
        event.preventDefault();
    });
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


// Add event: Add opacity to images when mouseover is active, remove opacity when mouseleave is active
images.forEach(function (img) {
    img.addEventListener('mouseenter', function (item) {
        img.style.opacity = '.3';
        img.style.cursor = 'pointer';
    });
    img.addEventListener('mouseleave', function (item) {
        img.style.opacity = '1';
    });
});




let counter = 0;
window.addEventListener("scroll", function (event) {
    console.log("scroll!");
    counter++;
    if (counter > 200) {
        alert("You've scrolled too much!!");
        counter = 0;
    }
});