const database = require('../infra/database');

// Get index produtos
exports.index = function() {
    return database.query('SELECT * FROM produtos');
};