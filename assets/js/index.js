// tab content
let tabE01 = document.querySelector('.tab__item01');
let tabE02 = document.querySelector('.tab__item02');
let tabE03 = document.querySelector('.tab__item03');
let content01 = document.querySelector('.content01');
let content02 = document.querySelector('.content02');
let content03 = document.querySelector('.content03');

tabE01.addEventListener('click', function() {
    tabE02.classList.remove('show');
    tabE03.classList.remove('show');
    content02.classList.remove('show');
    content03.classList.remove('show');
    if (!tabE01.classList.contains('show')) {
        this.classList.add('show');
        content01.classList.add('show');
    } else return;
});

tabE02.addEventListener('click', function() {
    tabE01.classList.remove('show');
    tabE03.classList.remove('show');
    content01.classList.remove('show');
    content03.classList.remove('show');
    if (!tabE02.classList.contains('show')) {
        this.classList.add('show');
        content02.classList.add('show');
    } else return;
});

tabE03.addEventListener('click', function() {
    tabE02.classList.remove('show');
    tabE01.classList.remove('show');
    content01.classList.remove('show');
    content02.classList.remove('show');
    if (!tabE03.classList.contains('show')) {
        this.classList.add('show');
        content03.classList.add('show');
    } else return;
});