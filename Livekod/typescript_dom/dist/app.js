"use strict";
window.addEventListener('load', () => {
    console.log('loaded');
    const sectionRef = document.querySelector('#pageSection');
    const pRefs = document.querySelectorAll('.text-element');
    for (let i = 0; i < pRefs.length; i++) {
        pRefs[i].textContent = 'Heja Arsenal #' + (i + 1);
        if (i % 2 === 0) {
            pRefs[i].classList.add('t-red');
        }
        if (i === pRefs.length - 1) {
            pRefs[i].id = 'hejaArsenal';
        }
    }
    const pRef = document.querySelector('#hejaArsenal');
    console.log(pRef.textContent);
    const textRef = document.createElement('p');
    textRef.textContent = 'Heja Arsenal #6';
    sectionRef.appendChild(textRef);
    const textRef2 = document.createElement('p');
    const textNodeRef = document.createTextNode('Heja Arsenal #4.5');
    textRef2.appendChild(textNodeRef);
    sectionRef.insertBefore(textRef2, pRef);
    console.log(pRef.getAttribute('id'));
    textRef.addEventListener('click', printTextContent);
    function printTextContent(event) {
        console.log(event.target.textContent);
    }
    const pRefs2 = document.querySelectorAll('p');
    pRefs2.forEach(pRef => {
        pRef.addEventListener('mouseover', (event) => {
            event.target.classList.toggle('t-red');
        });
    });
    const formRef = document.querySelector('form');
    formRef.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('validate form');
    });
    const cardSectionRef = document.querySelector('#cardSection');
    movies.forEach(movie => {
        const articleRef = document.createElement('article');
        const articleTemplate = `
            <article class="card">
                <h2>${movie.title}</h2>
                <img src="${movie.poster}" alt="Poster for the movie ${movie.title}">
                <a href="${movie.trailer_link}">WATCH TRAILER</a>
            </article> 
        `;
        articleRef.innerHTML = articleTemplate;
        cardSectionRef.appendChild(articleRef);
    });
});
const movies = [
    {
        "title": "The Imitation Game",
        "imdbid": "tt2084970",
        "poster": "https://m.media-amazon.com/images/M/MV5BNjI3NjY1Mjg3MV5BMl5BanBnXkFtZTgwMzk5MDQ3MjE@._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/nuPZUUED5uk"
    },
    {
        "title": "The Social Network",
        "imdbid": "tt1285016",
        "poster": "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/lB95KLmpLR4"
    },
    {
        "title": "Offside",
        "imdbid": "tt0774755",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTI1NDM3NTE2M15BMl5BanBnXkFtZTcwMjA1MTc3MQ@@._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/lmarOJeqJgg"
    },
    {
        "title": "Hacksaw Ridge",
        "imdbid": "tt2119532",
        "poster": "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/s2-1hz1juBI"
    },
    {
        "title": "Moneyball",
        "imdbid": "tt1210166",
        "poster": "https://m.media-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/-4QPVo0UIzc"
    },
    {
        "title": "Deadpool",
        "imdbid": "tt1431045",
        "poster": "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/ONHBaC-pfsk"
    },
    {
        "title": "American Psycho",
        "imdbid": "tt0144084",
        "poster": "https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/Q_jaJR_cNFU"
    },
    {
        "title": "I, Robot",
        "imdbid": "tt0343818",
        "poster": "https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/s0f3JeDVeEo"
    },
    {
        "title": "Fanboys",
        "imdbid": "tt0489049",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTI2MDM0NTY5OF5BMl5BanBnXkFtZTcwODMxMzIwMg@@._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/OdoJujK7hSs"
    },
    {
        "title": "Logan",
        "imdbid": "tt3315342",
        "poster": "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/Div0iP65aZo"
    },
    {
        "title": "Green Book",
        "imdbid": "tt6966692",
        "poster": "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/QkZxoko_HC0"
    },
    {
        "title": "Blood Diamond",
        "imdbid": "tt0450259",
        "poster": "https://m.media-amazon.com/images/M/MV5BZDMxOGZhNWYtMzRlYy00Mzk5LWJjMjEtNmQ4NDU4M2QxM2UzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/yknIZsvQjG4"
    },
    {
        "title": "The Terminal",
        "imdbid": "tt0362227",
        "poster": "https://m.media-amazon.com/images/M/MV5BYzY3YzNlZjctZTNiNC00MjUzLTlhM2ItNjdkNzAwMDhmYmRmXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/2X1zH0YfqZY"
    },
    {
        "title": "No Country for Old Men",
        "imdbid": "tt0477348",
        "poster": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
        "title": "EuroTrip",
        "imdbid": "tt0356150",
        "poster": "https://m.media-amazon.com/images/M/MV5BMWRmYjY1NTUtNjNlMC00MDFjLTk0MTYtZWVlMTFhMjllYjUzXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/qbZ4rzWbUdA"
    },
    {
        "title": "Nobody",
        "imdbid": "tt7888964",
        "poster": "https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/wZti8QKBWPo"
    },
    {
        "title": "Zombieland",
        "imdbid": "tt1156398",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTU5MDg0NTQ1N15BMl5BanBnXkFtZTcwMjA4Mjg3Mg@@._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/8m9EVP8X7N8"
    },
    {
        "title": "I Rymden Finns Inga Känslor",
        "imdbid": "tt1686313",
        "poster": "https://m.media-amazon.com/images/M/MV5BNGNjZDIwMmMtNjgzZC00NGM0LTk2MDQtZGNkOGVlNThlYTljXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/H_6UnkHEy98"
    },
    {
        "title": "Batman Ninja",
        "imdbid": "tt7451284",
        "poster": "https://m.media-amazon.com/images/M/MV5BMjFlMDc2NGMtYjkyMS00MTlhLTgxNWItMmYxZjc5NzVhMGE0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/WSW6fQYQi2w"
    },
    {
        "title": "Järnjätten",
        "imdbid": "tt0129167",
        "poster": "https://m.media-amazon.com/images/M/MV5BYzBjZTNkMzQtZmNkOC00Yzk0LTljMjktZjk3YWVlZjY3NTk2XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
        "trailer_link": "https://www.youtube.com/embed/obLtyj8hfFk"
    }
];
