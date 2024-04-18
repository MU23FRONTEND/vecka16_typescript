"use strict";
window.addEventListener('load', () => {
    var _a, _b, _c;
    const one = document.querySelector('#one');
    one.textContent = 'Potato';
    const two = document.querySelector('nav > a');
    two.textContent = 'Start';
    const three = document.querySelector('footer > section > article:first-child>a:last-child');
    three.textContent = 'Mail Us';
    const four = document.querySelector('.art-2 > p');
    four.textContent = 'En schysst hoodie, för dig som vill ha det där lilla extra';
    const five = document.querySelector('.art-3 > button');
    five.style.backgroundColor = 'blue';
    five.style.color = 'red';
    const eight = document.querySelectorAll('p');
    eight.forEach(ref => {
        ref.style.color = 'green';
    });
    const nine = document.querySelectorAll('button');
    nine.forEach(button => button.textContent = 'add to cart!');
    (_a = document.querySelector('#home')) === null || _a === void 0 ? void 0 : _a.classList.add('active');
    const twelve = document.querySelector('#nav');
    const cart = document.querySelector('#cart');
    const newItem = document.createElement('a');
    newItem.textContent = 'Cart';
    twelve.insertBefore(newItem, cart);
    const article13 = document.createElement('article');
    article13.classList.add('art-4');
    const artTemp = `
    <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
    <h2>Sinus Hoodie</h2>
    <h3 id="one">Forrest</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!</p>
    <button>buy</button>
 `;
    article13.innerHTML = artTemp;
    (_b = document.querySelector('main')) === null || _b === void 0 ? void 0 : _b.appendChild(article13);
    (_c = document.querySelector('.logo')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
        console.log('Found you!!!');
    });
    const articleRefs = document.querySelectorAll('article');
    articleRefs.forEach(ref => {
        ref.addEventListener('click', (event) => {
            const tema = event.currentTarget.querySelector('h3');
            console.log(tema.textContent);
        });
    });
});
