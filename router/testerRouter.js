const express = require('express');
const router = express.Router();
const testerController = require('../controller/testerController');


router.get('/', testerController.traerTesters);
router.post('/', testerController.adicionarTester );
router.put('/:id', testerController.actualizarTester);
router.delete('/:id', testerController.eliminarTester);
router.get('/maspruebas', testerController.testermasPruebas);

module.exports = router;