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