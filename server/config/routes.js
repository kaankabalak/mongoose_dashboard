var animals = require('../controllers/animals.js');
module.exports = function(app) {
    // Routes
    // Root Request
    app.get('/', function(req, res) {
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        animals.find_all(req,res);
    })

    app.get('/mongooses/new', function(req, res) {
        res.render('form');
    })

    app.get('/mongooses/:id', function(req, res) {
        animals.find_one(req,res);
    })

    // Add User Request 
    app.post('/mongooses', function(req, res) {
        animals.create(req,res);
    })

    app.get('/mongooses/edit/:id', function(req, res) {
        animals.display_edit(req,res);
    })

    app.post('/mongooses/:id', function(req, res) {
        animals.update(req,res);
    })

    app.post('/mongooses/destroy/:id', function(req, res) {
        animals.delete(req,res);
    })

}