const conn = require('../database/database');  // Asegúrate de que este archivo está configurado correctamente

class Tester {

    async listarTodos() {
        let [rows] = await conn.query('SELECT * FROM tester');
        return rows;
    }

 
    async guardar(tester) {
        let { nombre } = tester;  
        let [rest] = await conn.query(
            'INSERT INTO tester (nombre) VALUES (?)', 
            [nombre]
        );
        return { id_tester: rest.insertId, nombre };
    }

  
    async actualizar(id, tester) {
        let { nombre } = tester;
        let [result] = await conn.query(
            'UPDATE tester SET nombre = ? WHERE id_tester = ?', 
            [nombre, id]
        );
        return { id_tester: id, nombre };
    }

  
    async eliminar(id) {
        let [result] = await conn.query('DELETE FROM tester WHERE id_tester = ?', [id]);
        return { message: 'Tester eliminado', id_tester: id };
    }

   
    async testermasPruebas() {
        const query = `
            SELECT t.nombre AS tester, COUNT(pr.id_prueba) AS total_pruebas
            FROM tester t
            LEFT JOIN pruebas pr ON t.id_tester = pr.id_tester
            GROUP BY t.id_tester
            ORDER BY COUNT(pr.id_prueba) DESC
            LIMIT 1;
        `;
        let [rows] = await conn.query(query);
        return rows[0];  // Retorna el tester con más pruebas
    }
}

module.exports = Tester;
