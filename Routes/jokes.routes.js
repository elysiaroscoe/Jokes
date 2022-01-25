const JokeController = require('../Controllers/jokes.controller');

module.exports = app =>{
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneJoke);
    app.get('/api/jokes/random', JokeController.randomJoke);
    app.post('/api/jokes/new', JokeController.createNewJoke);
    app.put('/api/jokes/:id', JokeController.updateJoke);
    app.delete('/api/jokes/delete/:id', JokeController.deleteJoke)
}