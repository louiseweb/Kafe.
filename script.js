// Header Section - responsive nav

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


// Header Section - smooth scroll

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top -75,
        }, 800, function(){
  
        //   window.location.hash = hash;
        });
      } // End if
    });
  });


// Product Section - btn reveal

const productItem = document.querySelectorAll("#product-item");
const productBtns = document.querySelectorAll("#product-btns");

productItem.forEach(function(item){
    item.addEventListener('mouseenter', function(){
        item.children[1].classList.remove('d-none');
    });

    item.addEventListener('mouseleave', function(){
        item.children[1].classList.add('d-none');
    });
});


// Blog Section - slick slider

$(document).ready(function(){
    $('.carousel').slick({
        accessibility: true,
        arrows: true,
        prevArrow: '.prev-arrow',
        nextArrow: '.next-arrow',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,      
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
          ]

    });
 
});


// Animate on scroll - Init

AOS.init();