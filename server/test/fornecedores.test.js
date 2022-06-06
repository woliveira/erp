const axios = require('axios');

test('Como usuario, obter com sucesso a lista de fornecedores', async function() {
    const response = await axios({
        url: 'http://localhost:3000/fornecedores',
        method: 'get'     
    });

    expect(response.status).toBe(200);
});