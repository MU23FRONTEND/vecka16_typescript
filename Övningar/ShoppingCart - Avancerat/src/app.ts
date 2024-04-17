window.addEventListener('load', () : void => {
    // Läs in alla produktknappar till en variabel
    // Skapa en shoppingCart-array
    // Läs in anchor-taggen i menyn på dess ID, och lägg en eventlyssnare på den som lyssnar efter klick. Vid 
    // klick så skall en anonym funktion köras som togglar klassen hide på elementet med ID cart, samt anropar funktionen
    // listProductsInCart och skickar med din shoppingCart



    // Iterera dig igenom alla dina produktknappar och lägg en klicklyssnare på varje knapp.
    // Vid klick skall du nu själv lista ut hur du kan göra följande tre saker:
    // 1. Hitta namnet på den produkt du klickade på och lägg till den i din shoppingCart-array
    // 2. Uppdatera siffran som anger hur många produkter du har i din varukorg
    // 3. Uppdatera din kundvagnslista


});


// Skapa funktionen updateCart i vilken du enbart justerar siffran
// som syns i elementet med ID productsInCart. Din funktion behöver ta emot din shoppingCart-array

//Skapa funktionen listProductsInCart i vilken du trycker ut alla produkter i kundvagnen
// som list-element i elementet med ID products i DOMen. Din funktion behöver ta emot din shoppingCart-array




// Level Up 1!!!!
// Att 'Hårdkoda' in produkter i HTML-koden är inget vi ska syssla med. Ta bort ALL HTML innanför Section-elementet med
// klassen cards, och återskapa istället elementen med hjälp utav TypeScript. Avkommentera objekten nedan, och använd dem för
// att fylla din webbshop med.

// Level Up 2!!!!
// Lägg till funktionalitet så att användaren endast kan lägga till 1 st av varje produkt i kundvagnen.

// Level Up 3!!!!
// Lägg till en knapp inuti alla li-element i din kundvagn, vid klick på denna knapp skall den klickade produkten tas bort från kundvagnen.


// type Book = {
//     title : string,
//     author : string,
//     about : string
// }

// const books : Book[] = [
//     {
//         title: "Goodnight Moon",
//         author: "Margaret Wise Brown",
//         about: "Goodnight Moon is a beloved bedtime story that has enchanted generations of children. It follows the ritual of saying goodnight to various objects and creatures in a cozy, comforting room."
//     },
//     {
//         title: "The Very Hungry Caterpillar",
//         author: "Eric Carle",
//         about: "The Very Hungry Caterpillar is a classic children's book that tells the story of a caterpillar's journey as it eats its way through various foods before transforming into a beautiful butterfly. With vibrant illustrations and simple text, it teaches children about counting, days of the week, and the life cycle of a butterfly."
//     },
//     {
//         title: "A Wrinkle in Time",
//         author: "Madeleine L’Engle",
//         about: "A Wrinkle in Time is a science fantasy novel that follows the adventures of Meg Murry, her brother Charles Wallace, and their friend Calvin O'Keefe as they embark on a journey through space and time to rescue Meg's father from evil forces. Filled with themes of love, courage, and the battle between good and evil, it has captivated readers since its publication."
//     },
//     {
//         title: "Where the Wild Things Are",
//         author: "Maurice Sendak",
//         about: "Where the Wild Things Are is a timeless picture book that tells the story of Max, a young boy who sails away to an island inhabited by wild creatures. Through his imaginative journey, Max learns about the power of imagination, the importance of home, and the unconditional love of family."
//     },
//     {
//         title: "Harry Potter and the Philosopher's Stone",
//         author: "J.K. Rowling",
//         about: "Harry Potter and the Philosopher's Stone is the first book in the Harry Potter series. It introduces readers to the magical world of Hogwarts School of Witchcraft and Wizardry, where Harry Potter discovers his true identity as a wizard and begins his journey to defeat the dark wizard Voldemort."
//     },
//     {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         about: "To Kill a Mockingbird is a classic American novel set in the fictional town of Maycomb, Alabama, during the 1930s. It follows the story of Scout Finch, her brother Jem, and their father Atticus Finch, a lawyer who defends a black man wrongly accused of raping a white woman. Through Scout's innocent perspective, the novel explores themes of racial injustice, moral growth, and the loss of innocence."
//     },
//     {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         about: "The Great Gatsby is a novel set in the Jazz Age of the 1920s, narrated by Nick Carraway, who moves to Long Island and becomes entangled in the lives of his wealthy neighbor Jay Gatsby and his cousin Daisy Buchanan. Through Gatsby's pursuit of the American Dream and his doomed love for Daisy, the novel explores themes of wealth, love, and the emptiness of the American Dream."
//     },
//     {
//         title: "1984",
//         author: "George Orwell",
//         about: "1984 is a dystopian novel set in a totalitarian society ruled by the Party and its leader Big Brother. It follows the story of Winston Smith, a low-ranking member of the Party who rebels against its oppressive regime and begins a forbidden love affair with Julia. Through its chilling portrayal of surveillance, propaganda, and thought control, the novel warns of the dangers of totalitarianism and the erosion of individual freedom."
//     }
// ];