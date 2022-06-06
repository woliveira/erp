const database = require('../infra/database');

// Get index fornecedores
exports.index = function() {
    return database.query('SELECT * FROM fornecedores');
};