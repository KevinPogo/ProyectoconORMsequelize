const express = require('express');
const router = express.Router();
const pruebasController = require('../controller/pruebascontroller');


router.get('/', pruebasController.traerPruebas);
router.post('/', pruebasController.adicionarPrueba);
router.put('/:id', pruebasController.actualizarPrueba);
router.delete('/:id', pruebasController.eliminarPrueba);


module.exports = router;