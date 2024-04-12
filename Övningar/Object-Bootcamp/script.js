let books = [
    {
        title : 'The Lord of the Rings',
        author : 'J.R.R. Tolkien',
        numPages : 1178
    },
    {
        title : 'Harry Potter and the Philosopher\'s Stone',
        author : 'J.K. Rowling',
        numPages : 223
    },
    {
        title : 'The Hobbit',
        author : 'J.R.R. Tolkien',
        numPages : 310
    }
]

let searchTerm = window.prompt('Enter your search:');
let result = findBook(books, searchTerm);
console.log(result);

function findBook(books, searchTerm) {
    let searchBook = null;

    books.forEach(book => {
        if(book.title.includes(searchTerm)) {
            searchBook = book;
        }
    });
    return searchBook;
}

/*Räkna tecken i en sträng och organisera detta i ett objekt. Skapa en funktion som tar en sträng som input och ger ett objekt som output.

Varje tecken är sin egna nyckel i objektet och värdet på nyckeln är antalet av det tecknet. Dvs, för varje tecken ska det finnas en nyckel i objektet och värdet på den nyckeln ska vara antal förekomster av det tecknet.

Denna övning kräver dynamiska nycklar. */
let str = 'Hello World';
let res = countCharacters(str);
console.log(res);
// Hjälpfunktion
function countCharacters(str) {
    let obj = {};
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        if(obj[char]) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }
    return obj;
}

let filteredUsers = users.filter(user => user.nat === 'FR');
console.log(filteredUsers);




