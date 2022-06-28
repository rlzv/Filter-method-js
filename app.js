const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


numbers.filter(n => {
    return n < 10
});


const movies = [
    {
        title: 'Amari',
        score: 39,
        year: 1984
    },
    {
        title: 'Stand With U',
        score: 85,
        year: 2013
    },
    {
        title: 'Warzone',
        score: 25,
        year: 2004
    },
    {
        title: 'Blinders',
        score: 70,
        year: 2017
    }
]


// const goodMovies = movies.filter(movie => {
//     return movie.score > 80;
// })

const goodMovies = movies.filter(m => m.score > 50)
const goodTitles = goodMovies.map(m => m.title) //doar titluri bune in array pt fiecare film


movies.filter(m => m.score > 80).map(m => m.title);

const badMovies = movies.filter(m => m.score < 30)
const recentMovies = movies.filter(m => m.year > 2000)

