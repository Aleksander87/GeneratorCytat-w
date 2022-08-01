let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{ 
    quote: 'Nienawidziłem każdej minuty treningu, ale powtarzałem sobie: nie pododawaj się, przecierp teraz i żyj resztę życia jako mistrz.',
    person: 'Muhammad Ali',
}, {
    quote: 'Pudłujesz 100% strzałów, jeśli w ogóle ich nie wykonujesz.',
    person: 'Wayne Gretzky',
}, {
    quote: 'Nic nie jest podawane na tacy – każdy zawsze trafia na jakieś przeszkody po drodze. Kiedy się pojawią, zastanów się jak je pokonać, a nie myśl o tym, że to już koniec drogi.',
    person: 'Michael Jordan',
}, {
    quote: 'Nigdy nie rezygnuj z celu tylko dlatego, że osiągnięcie go wymaga czasu. Czas i tak upłynie.',
    person: 'H. Jackson Brown',
}];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

});
