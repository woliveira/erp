const service = require('../../service/service');

const getProdutos = async function(request, response) {
    const produtosIndex = await service.getProdutos();
    response.json(produtosIndex);
};

module.exports = {
    getProdutos
};