var GroceryItem = require('../model/groceryItem.js');

module.exports = function(app){
    
    app.delete('/delete/:item', function(req, res){
        GroceryItem.udpate({
            where: {
                id: req.params.id
            }
        });
        res.redirect('/all');
    });
}