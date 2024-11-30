const Prueba = require('../models/pruebasmodel');
const pruebaInstancia = new Prueba();

exports.traerPruebas = async (req, res) => {
    console.log('ruta de prueba GET');
    try {
        let resultado = await pruebaInstancia.listarTodas();
        console.log(resultado);
        res.json(resultado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error en la petición' });
    }
};

exports.adicionarPrueba = async (req, res) => {
    try {
        let resultado = await pruebaInstancia.guardar(req.body);
        res.json(resultado);
    } catch (e) {
        res.json({ error: 'Error en la petición: ' + e });
    }
};

exports.actualizarPrueba = async (req, res) => {
    console.log('ruta de prueba actualizar');
    try {
        const { id } = req.params;
        const datosActualizados = req.body;

        let resultado = await pruebaInstancia.actualizar(id, datosActualizados);
        res.json(resultado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error en la petición' });
    }
};

exports.eliminarPrueba = async (req, res) => {
    console.log('ruta de prueba eliminar');
    try {
        const { id } = req.params;

        let resultado = await pruebaInstancia.eliminar(id);
        res.json(resultado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error en la petición' });
    }
};