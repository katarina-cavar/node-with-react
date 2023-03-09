// write a function to retrieve a blob of json
// make an ajax request! use the 'fetch' function.
// https://swapi.dev/api/films

function fetchMovies() {
    fetch('https://swapi.dev/api/films')
        .then(res => res.json())
        .then(json => console.log(json));
}

fetchMovies();
