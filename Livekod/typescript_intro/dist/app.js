"use strict";
window.addEventListener('load', () => {
    let name = 'Jesper';
    let age = 33;
    let isCool = false;
    let interests = [
        'fotboll',
        'golf',
        'filmer'
    ];
    let favNumbers = [6, 13, 41];
    let profile = {
        name: 'Jesper',
        age: 33,
        isCool: false,
        interests: [
            'fotboll', 'golf'
        ],
        printName: () => console.log(name)
    };
    profile.age = 100;
    console.log(profile);
    let pName = getName();
    console.log(pName);
    function getName() {
        return profile.name;
    }
    const getAge = () => {
        return profile.age;
    };
    let pAge = getAge();
    console.log(pAge);
    setAge(74);
    console.log(profile);
    function setAge(newAge) {
        profile.age = newAge;
    }
    let fruits = ['banana', 'apple', 'kiwi', 'watermelon',
        'peach'
    ];
    console.log(fruits);
    fruits.forEach(fruit => console.log(fruit));
    fruits.map(fruit => console.log(fruit));
    fruits.push('cherry');
    let filteredFruits = fruits.filter(fruit => fruit !== 'apple');
    if (fruits.some(fruit => fruit === 'apple')) {
        console.log('Det finns äpplen!');
    }
    else {
        console.log('Det finns inga äpplen!');
    }
    if (filteredFruits.some(fruit => fruit === 'apple')) {
        console.log('Det finns äpplen!');
    }
    else {
        console.log('Det finns inga äpplen!');
    }
    fruits.splice(1, 2);
    let index = fruits.findIndex(fruit => fruit === 'peach');
    console.log(index);
    fruits.pop();
    console.log(fruits);
    console.log(filteredFruits);
});
