const express = require('express');

const app = express();

//pipeline and middleware
app.use(express.json());


const movies = [{
    id: 1,
    name: 'Lagaan'
}, {
    id: 2,
    name: 'Titanic'
}];

app.get('/api/v1/movies', (req, res) => {
    res.send(movies);
});

app.get('/api/v1/movies/:id', (req, res) => {
    const id = req.params.id;
    const movie = movies.find(movie => movie.id === parseInt(id));

    if(!movie) {
        res.status(404).send(`Movie with id ${id} was not found!`);
        return;
    }
    res.send(movie);
});

app.post('/api/v1/movies', (req, res) => {
    console.log(req.body);

    const movie = {
        id: movies.length + 1,
        name: req.body.name
    };

    movies.push(movie);

    res.send(movie);
});



app.listen(3000, () => console.log('Listening'));