const conn = require('../database/database');

class Prueba {
    async listarTodas() {
        let [rows] = await conn.query('SELECT * FROM pruebas');
        return rows;
    }

    async guardar(prueba) {
        let { id_proyecto, id_tester, descripcion, fecha_asignacion, fecha_finalizacion } = prueba;
        console.log(prueba);
        let [rest] = await conn.query(
            'INSERT INTO pruebas (id_proyecto, id_tester, descripcion, fecha_asignacion, fecha_finalizacion) VALUES (?, ?, ?, ?, ?)',
            [id_proyecto, id_tester, descripcion, fecha_asignacion, fecha_finalizacion]
        );
        return { id_prueba: rest.insertId, ...prueba };
    }

    async actualizar(id, prueba) {
        let { id_proyecto, id_tester, descripcion, fecha_asignacion, fecha_finalizacion } = prueba;
        let [result] = await conn.query(
            'UPDATE pruebas SET id_proyecto = ?, id_tester = ?, descripcion = ?, fecha_asignacion = ?, fecha_finalizacion = ? WHERE id_prueba = ?',
            [id_proyecto, id_tester, descripcion, fecha_asignacion, fecha_finalizacion, id]
        );
        return { id_prueba: id, ...prueba };
    }

    async eliminar(id) {
        let [result] = await conn.query('DELETE FROM pruebas WHERE id_prueba = ?', [id]);
        return { message: 'Prueba eliminada', id_prueba: id };
    }

}

module.exports = Prueba;
