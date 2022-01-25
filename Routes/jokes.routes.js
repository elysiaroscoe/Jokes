const JokeController = require('../Controllers/jokes.controller');

module.exports = app =>{
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/_id', JokeController.findOneJoke);
    app.get('/api/jokes/random', JokeController.randomJoke);
    app.post('/api/jokes/new', JokeController.createNewJoke);
    app.put('/api/jokes/:_id', JokeController.updateJoke);
    app.delete('/api/jokes/delete/:_id', JokeController.deleteJoke)
}