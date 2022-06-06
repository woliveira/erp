const service = require('../../service/service');

const getFornecedores = async function(request, response) {
    const fornecedoresIndex = await service.getFornecedores();
    response.json(fornecedoresIndex);
};

module.exports = {
    getFornecedores
};