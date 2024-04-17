"use strict";
window.addEventListener('load', () => {
    const titleRef = document.querySelector('.art-1>h3');
    titleRef.textContent = 'Potato';
    const homeRef = document.querySelector('nav>a:first-child');
    homeRef.textContent = 'Start';
    const sinusFireRef = document.querySelector('.art-2>p');
    sinusFireRef.textContent = 'Världens första fossilfyllda hoodie, med en miljöpåverkan så stor att självaste Greta Thunberg gått till motattack!';
    const buttonRef = document.querySelector('.art-3>button');
    buttonRef.style.backgroundColor = 'green';
    buttonRef.textContent = 'KÖP!';
    const pRefs = document.querySelectorAll('article>p');
    pRefs.forEach(pRef => {
        pRef.style.color = 'blue';
    });
});
