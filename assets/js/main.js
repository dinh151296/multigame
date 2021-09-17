// close top-header


let iconCloseTopHeader = document.querySelector(".close");
let topHeader = document.querySelector(".top-header");
iconCloseTopHeader.addEventListener('click', function() {
    topHeaderHeight = topHeader.offsetHeight;
    topHeader.style.marginTop = -topHeaderHeight + 'px';
});





// show box account

let accountElement = document.querySelector('.account');

accountElement.addEventListener('click', function() {
    document.querySelector('.account-box').classList.toggle('show');
});


// menu sp
let burgerElement = document.querySelector('.burger');
let menu = document.querySelector('.menu__sp');
burgerElement.addEventListener('click', function() {
    menu.classList.toggle('show');
});