const btnOpen = document.querySelector('#btn-open');
const btnClose = document.querySelector('#btn-close');
const nav = document.querySelector('#nav');


btnOpen.addEventListener('click', function(){
    btnOpen.classList.toggle('d-none');
    btnClose.classList.toggle('d-none');
    nav.classList.toggle('d-none');
});

btnClose.addEventListener('click', function(){
    btnClose.classList.toggle('d-none');
    btnOpen.classList.toggle('d-none');
    nav.classList.toggle('d-none');
});


// Slick Slider

$(document).ready(function(){
    $('.carousel').slick({
        accessibility: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1

    });
});