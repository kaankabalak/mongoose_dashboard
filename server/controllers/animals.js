var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');
module.exports = {
    find_all: function(req,res) {
        Animal.find({}, function(err, animals) {
            if(err) {
                console.log('could not find users');
            } else { // else console.log that we did well and then redirect to the root route
                console.log('found the users!');
                console.log(animals);
                res.render('index', {animaldata: animals});
            }
        })
    },
    find_one: function(req,res) {
        Animal.find({_id: req.params.id }, function(err, animals) {
            if(err) {
                console.log('could not find users');
            } else { // else console.log that we did well and then redirect to the root route
                console.log('found the users!');
                console.log(animals);
                res.render('singleanimal', {animaldata: animals});
            }
        })
    },
    create: function(req, res) {
        console.log("POST DATA", req.body);
        // create a new User with the name and age corresponding to those from req.body
        var animal = new Animal({name: req.body.name, description: req.body.description});
        // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        animal.save(function(err) {
            // if there is an error console.log that something went wrong!
            if(err) {
            console.log('something went wrong');
            } else { // else console.log that we did well and then redirect to the root route
            console.log(animal.id);
            console.log('successfully added a quote!');
            res.redirect('/');
            }
        })
    },
    display_edit: function(req, res) {
        Animal.find({_id: req.params.id }, function(err, animals) {
            if(err) {
                console.log('could not find users');
            } else { // else console.log that we did well and then redirect to the root route
                console.log('found the users!');
                console.log(animals);
                res.render('editform', {animaldata: animals});
            }
        })
    },
    update: function(req, res) {
        Animal.findOne({_id: req.params.id}, function(err, animal){
        animal.name = req.body.name;
        animal.description = req.body.description;
        animal.save(function(err){
            // if save was successful awesome!
            console.log('saved animal');
            res.redirect('/');
        })
        })
    },
    delete: function(req, res) {
        Animal.remove({_id: req.params.id}, function(err){
        // This code will run when the DB has attempted to remove all matching records to {_id: 'insert record unique id here'}
        res.redirect('/');
        })
    }
}