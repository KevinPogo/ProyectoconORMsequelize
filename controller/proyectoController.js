const Proyecto = require('../models/proyectomodel');
const proyectoInstancia = new Proyecto();

exports.traerProyectos = async (req, res) => {
    console.log('ruta de proyecto GET');
    try {
        let resultado = await proyectoInstancia.listarTodos();
        console.log(resultado);
        res.json(resultado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error en la petición' });
    }
};

exports.adicionarProyecto = async (req, res) => {
    try {
        let resultado = await proyectoInstancia.guardar(req.body);
        res.json(resultado);
    } catch (e) {
        res.json({ error: 'Error en la petición: ' + e });
    }
};

exports.actualizarProyecto = async (req, res) => {
    console.log('ruta de proyecto actualizar');
    try {
        const { id } = req.params;
        const datosActualizados = req.body;

        let resultado = await proyectoInstancia.actualizar(id, datosActualizados);
        res.json(resultado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error en la petición' });
    }
};

exports.eliminarProyecto = async (req, res) => {
    console.log('ruta de proyecto eliminar');
    try {
        const { id } = req.params;

        let resultado = await proyectoInstancia.eliminar(id);
        res.json(resultado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error en la petición' });
    }

};
exports.proyectomasPruebas = async (req, res) => {
    try {
        const proyecto = await proyectoInstancia.proyectomasPruebas();
        res.json(proyecto);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener el proyecto con más pruebas' });
    }
};

