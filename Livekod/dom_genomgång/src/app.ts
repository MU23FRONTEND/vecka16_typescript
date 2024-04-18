window.addEventListener('load', () : void => {

 // Selektorer
 // Övning 1
 // Byt namn på första hoodien från Ash till Potato.
    const one = document.querySelector('#one') as HTMLParagraphElement;
    one.textContent = 'Potato';

 // Övning 2
 // Byt namn på Home i huvudmenyn till Start.
    const two = document.querySelector('nav > a') as HTMLAnchorElement;
    two.textContent = 'Start';

 // Övning 3
 // Byt namn på Contact i Footern till Mail Us.
    const three = document.querySelector('footer > section > article:first-child>a:last-child') as HTMLAnchorElement;
    three.textContent = 'Mail Us';

 // Övning 4
 // Byt ut informationen om Sinus Hoodie - Fire. Hitta på en egen text.
    const four = document.querySelector('.art-2 > p') as HTMLParagraphElement;
    four.textContent = 'En schysst hoodie, för dig som vill ha det där lilla extra';

 // Övning 5
 // Byt bakgrundsfärg och textfärg på en valfri knapp.
    const five = document.querySelector('.art-3 > button') as HTMLButtonElement;
    five.style.backgroundColor = 'blue';
    five.style.color = 'red';


 // Övning 6
 // Byt bakgrundsfärg på någon av produkterna.


 // Övning 7
 // Byt ut adressen i Footern.


 // Övning 8
 //Byt färg på samtliga p-taggar
    const eight = document.querySelectorAll('p') as NodeListOf<HTMLParagraphElement>;
    eight.forEach(ref => {
        ref.style.color = 'green';
    })

 // Övning 9
 // Ändra text på samtliga knappar till add to cart.
    const nine = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    nine.forEach(button => button.textContent = 'add to cart!')

 // Övning 10
 // Lägg till classen active på menyalternativet home.
    document.querySelector<HTMLAnchorElement>('#home')?.classList.add('active');

 // Övning 11
 // Ta bort classen logo på logotypen.
//  document.querySelector<HTMLImageElement>('.logo')?.classList.remove('logo');

 // Add Content
 // Övning 12
 // Lägg till ett nytt menyalternativ.
    const twelve = document.querySelector('#nav') as HTMLElement;
    const cart = document.querySelector('#cart') as HTMLImageElement;
    const newItem = document.createElement('a') as HTMLAnchorElement;
    newItem.textContent = 'Cart';
    twelve.insertBefore(newItem, cart);

 // Övning 13
 // Lägg till en ny produkt med följande info.
 // img - hoodie-forrest.png
 // h2 - Sinus Hoodie
 // h3 - Forrest
 // p - valfri information om produkten

 const article13 = document.createElement('article') as HTMLElement;
 article13.classList.add('art-4');

 const artTemp = `
    <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
    <h2>Sinus Hoodie</h2>
    <h3 id="one">Forrest</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!</p>
    <button>buy</button>
 `;

 article13.innerHTML = artTemp;

 document.querySelector<HTMLElement>('main')?.appendChild(article13);

//  <figure><img src="img/hoodie-ash.png" alt="hoodie"></figure>
//             <h2>Sinus Hoodie</h2>
//             <h3 id="one">Ash</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!</p>
//             <button>buy</button>

 
 // Events
 // Övning 14
 // Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick 
 // skall du console.log:a "found you!";

  document.querySelector<HTMLImageElement>('.logo')?.addEventListener('click', () : void => {
    console.log('Found you!!!');
  });

 // Övning 15
 // Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick 
 // skall du console.log:a "Hi, Im article Fire / Ash / Water beroende på vilken produkt som klickats på".
  const articleRefs = document.querySelectorAll('article') as NodeListOf<HTMLElement>;
  articleRefs.forEach(ref => {
    ref.addEventListener('click', (event : Event) : void => {
        const tema = (event.currentTarget as HTMLElement).querySelector('h3') as HTMLParagraphElement;
        console.log(tema.textContent);    
    })
  });
});