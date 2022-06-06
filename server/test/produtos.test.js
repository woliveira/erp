const axios = require('axios');

test('Como usuario, obter com sucesso a lista de produtos', async function() {
    const response = await axios({
        url: 'http://localhost:3000/produtos',
        method: 'get'     
    });

    expect(response.status).toBe(200);
});