const express = require('express');
const router = express.Router();

const { getProdutos } = require('./controller/produtosController.js');
const { getFornecedores } = require('./controller/fornecedoresController.js');

router.get('/produtos', getProdutos);
router.get('/fornecedores', getFornecedores);

module.exports = router;