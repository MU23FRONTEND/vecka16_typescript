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


let characters = [
    {
        name : 'Super Mario',
        age : 43,
        occupation : 'Plumber',
        isGood : true,
        image : 'https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png',
        description : 'Mario is the main character and protagonist of the long-running and highly successful Mario franchise. He was created by Japanese video game designer Shigeru Miyamoto and serves as the main mascot of Nintendo. Mario made his first appearance as the protagonist of the arcade game Donkey Kong, released in 1981. Since Super Mario Bros., his trademark abilities have been his jumping and stomping powers, with which he defeats most of his enemies, and his ability to change size and gain powers with a plethora of items, such as the Super Mushroom and Fire Flower.'
    },
    {
        name : 'Luigi',
        age : 39,
        occupation : 'Plumber',
        isGood : true,
        image : 'https://upload.wikimedia.org/wikipedia/en/3/33/Luigi_NSMBUDeluxe.png',
        description : 'Luigi is Mario\'s younger, taller twin brother. Luigi has assisted and fought alongside his brother on many occasions. Throughout his life, he has lived in Mario\'s shadow, developing both cowardly and heroic tendencies. Mario Bros. marks his first appearance in the Mario franchise and his debut in general. Originally a palette swap of Mario, Luigi was created to facilitate a second player option. Since the two-player mode was dropped from most main Super Mario games beginning with Super Mario Land, Luigi has gained his own identity and personality. This is especially noticeable in installments for the Luigi\'s Mansion series of games, as well as the Mario & Luigi series.'
    },
    {
        name : 'Peach',
        age : 28,
        occupation : 'Princess',
        isGood : true,
        image : 'https://upload.wikimedia.org/wikipedia/en/5/5a/Peach_%28Super_Mario_3D_World%29.png',
        description : 'Princess Peach is a character in Nintendo\'s Mario franchise, created by Shigeru Miyamoto. She is the princess and ruler of the fictional Mushroom Kingdom, where she resides in her castle along with Toads. She first appeared in Super Mario Bros. in 1985, and is the damsel-in-distress whom Mario has to rescue.'
    },
    {
        name : 'Yoshi',
        age : 13,
        occupation : 'Dinosaur',
        isGood : true,
        image : 'https://upload.wikimedia.org/wikipedia/en/3/39/YoshiMarioParty9.png',
        description : 'Yoshi is a fictional dinosaur who appears in video games published by Nintendo. Yoshi debuted in Super Mario World on the Super Nintendo Entertainment System as Mario and Luigi\'s sidekick. Yoshi later starred in platform and puzzle games, including Super Mario World 2: Yoshi\'s Island, Yoshi\'s Story and Yoshi\'s Woolly World. Yoshi also appears in many of the Mario spin-off games, including Mario Party and Mario Kart, various Mario sports games, and Nintendo\'s crossover fighting game series Super Smash Bros. Yoshi belongs to the species of the same name, which is characterized by their variety of colors.'
    },
    {
        name : 'Bowser',
        age : 55,
        occupation : 'King of Koopas',
        isGood : false,
        image : 'https://upload.wikimedia.org/wikipedia/en/7/7e/Bowser_-_New_Super_Mario_Bros_2.png',
        description : 'Bowser is  is a large, powerful, fire-breathing Koopa who leads a large army of minions, and has been the arch-nemesis of Mario since his debut in Super Mario Bros. He has repeatedly kidnapped or attempted to kidnap Princess Peach with the ultimate goal of defeating Mario and taking over the Mushroom Kingdom.'
    }, 
    {
        name : 'Toad',
        age : 24,
        occupation : 'Mushroom Retainer',
        isGood : true,
        image : 'https://upload.wikimedia.org/wikipedia/en/5/5e/Toad_3D_Land.png',
        description : 'Toad is a fictional character who primarily appears in Nintendo\'s Mario franchise. Created by Japanese video game designer Shigeru Miyamoto, he is portrayed as a citizen of the Mushroom Kingdom and is one of Princess Peach\'s most loyal attendants; constantly working on her behalf. He is usually seen as a non-player character (NPC) who provides assistance to Mario and his friends in most games, but there are times when Toad(s) takes center stage and appears as a protagonist, as seen in Super Mario Bros. 2, Wario\'s Woods, Super Mario 3D World, and Captain Toad: Treasure Tracker.'
    }
];
