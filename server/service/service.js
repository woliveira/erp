const produtosData = require('../data/produtosData');
const fornecedoresData = require('../data/fornecedoresData');

exports.getProdutos = function() {
    return produtosData.index();
}

exports.getFornecedores = function() {
    return fornecedoresData.index();
}