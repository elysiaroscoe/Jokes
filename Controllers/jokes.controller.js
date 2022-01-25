const Joke = require('../models/jokes.model');

//Controller performs CRUD

module.exports.findAllJokes = (req,res) => {
    Joke.find()
    .then(allJokes => res.json({ jokes: allJokes}))
    .catch(err => res.json({ message: "Something went wrong", error: err}))
}

module.exports.findOneJoke = (req,res) => {
    Joke.findById({ _id: req.params.id })
    .then(oneJoke => res.json({ joke: oneJoke}))
    .catch(err => res.json({ message: "Something went wrong", error: err}))
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
    .then(newJoke => res.json({ joke: newJoke}))
    .catch(err => res.json({ message: "Something went wrong", error: err}))
}

module.exports.updateJoke = (req,res) => {
    Joke.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
        //validations are not automatically run on updates-this incorporates them
    )
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err}))
}

module.exports.deleteJoke = (req,res) => {
    Joke.findByIdAndDelete({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err}))
}


module.exports.randomJoke = (req,res) => {
    Joke.aggregate([{$sample:{size:1}}])
    .then(randomizedJoke => res.json({ randomizedJoke: randomizedJoke}))
    .catch(err => res.json({ message: "Something went wrong", error:err }))
}