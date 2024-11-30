const Tester = require('../models/testermodel');
const testerInstancia = new Tester();

exports.traerTesters = async (req, res) => {
    console.log('Ruta de tester GET');
    try {
        let resultado = await testerInstancia.listarTodos();
        res.json(resultado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error en la petición' });
    }
};

exports.adicionarTester = async (req, res) => {
    try {
        let resultado = await testerInstancia.guardar(req.body);
        res.status(201).json(resultado); 
    } catch (e) {
        console.log(e);  
        res.status(500).json({ error: 'Error en la petición: ' + e.message });
    }
};


exports.actualizarTester = async (req, res) => {
    console.log('Ruta de tester actualizar');
    try {
        const { id } = req.params;
        const datosActualizados = req.body;

        let resultado = await testerInstancia.actualizar(id, datosActualizados);
        res.json(resultado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error en la petición' });
    }
};


exports.eliminarTester = async (req, res) => {
    console.log('Ruta de tester eliminar');
    try {
        const { id } = req.params;

        let resultado = await testerInstancia.eliminar(id);
        res.json(resultado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error en la petición' });
    }
};

exports.testermasPruebas = async (req, res) => {
    try {
        const resultado = await testerInstancia.testermasPruebas();
        res.json(resultado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener el tester con más pruebas' });
    }
};
    