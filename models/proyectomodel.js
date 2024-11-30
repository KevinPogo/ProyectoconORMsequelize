const conn = require('../database/database');

class Proyecto {
    async listarTodos() {
        let [rows] = await conn.query('SELECT * FROM proyecto');
        return rows;
    }

    async guardar(proyecto) {
        let { nombre, descripcion, fecha_inicio, fecha_fin } = proyecto;
        let [rest] = await conn.query(
            'INSERT INTO proyecto (nombre, descripcion, fecha_inicio, fecha_fin) VALUES (?, ?, ?, ?)',
            [nombre, descripcion, fecha_inicio, fecha_fin]
        );
        return { id_proyecto: rest.insertId, ...proyecto };
    }

    async actualizar(id, proyecto) {
        let { nombre, descripcion, fecha_inicio, fecha_fin } = proyecto;
        let [result] = await conn.query(
            'UPDATE proyecto SET nombre = ?, descripcion = ?, fecha_inicio = ?, fecha_fin = ? WHERE id_proyecto = ?',
            [nombre, descripcion, fecha_inicio, fecha_fin, id]
        );
        return { id_proyecto: id, ...proyecto };
    }

    async eliminar(id) {
        let [result] = await conn.query('DELETE FROM proyecto WHERE id_proyecto = ?', [id]);
        return { message: 'Proyecto eliminado', id_proyecto: id };
    }
    async proyectomasPruebas() {
        const query = `
            SELECT p.nombre AS proyecto, COUNT(pr.id_prueba) AS total_pruebas
            FROM proyecto p
            LEFT JOIN pruebas pr ON p.id_proyecto = pr.id_proyecto
            GROUP BY p.id_proyecto
            ORDER BY COUNT(pr.id_prueba) DESC
            LIMIT 1;
        `;
        
        let [rows] = await conn.query(query);
        return rows[0]; 
    }
}

module.exports = Proyecto;
