window.addEventListener('load', () => {
    // För att deklarera en variabel finn tre nyckelord
    // const, let, var
    let name : string = 'Jesper';
    let age : number = 33;
    let isCool : boolean = false;
    let interests : string[] = [
        'fotboll',
        'golf',
        'filmer'
    ]

    let favNumbers : number[] = [6, 13, 41];

    type Profile = {
        name : string,
        age : number,
        isCool : boolean,
        interests? : string[], 
        printName : () => void
    }

    let profile : Profile = {
        name : 'Jesper',
        age : 33,
        isCool : false,
        interests : [
            'fotboll', 'golf'
        ],
        printName : () => console.log(name)
    }
    
    profile.age = 100;

    console.log(profile);

    let pName = getName();
    console.log(pName);

    function getName() : string {
        return profile.name;
    }

    // Denna variant av en funktionsdeklaration 
    // kräver att funktionen skapas INNAN den anropas
    const getAge = () : number => {
        return profile.age;
    }
    
    let pAge = getAge();
    console.log(pAge);

    setAge(74);
    console.log(profile);

    function setAge(newAge : number) : void {
        profile.age = newAge;
    }

    let fruits : string[] = ['banana', 'apple', 'kiwi', 'watermelon',
        'peach'
    ];

    console.log(fruits);
    // Loopar
    fruits.forEach(fruit => console.log(fruit))
    fruits.map(fruit => console.log(fruit))

    // Lägga till
    fruits.push('cherry');

    // Filtrera
    let filteredFruits = fruits.filter(fruit => fruit !== 'apple');

    // Kolla om frukt finns
    if(fruits.some(fruit => fruit === 'apple')) {
        console.log('Det finns äpplen!');
    } else {
        console.log('Det finns inga äpplen!');
    }

    if(filteredFruits.some(fruit => fruit === 'apple')) {
        console.log('Det finns äpplen!');
    } else {
        console.log('Det finns inga äpplen!');
    }

    // Radera önskat antal på önskad plats
    fruits.splice(1,2);

    // Hitta index för frukt
    let index = fruits.findIndex(fruit => fruit === 'peach');
    console.log(index);

    // Ta bort den sista frukten
    fruits.pop();


    console.log(fruits);
    console.log(filteredFruits);

});
