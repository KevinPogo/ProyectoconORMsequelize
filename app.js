const pruebasRouter = require('./router/pruebasRouter');
const testerRouter = require('./router/testerRouter');
const proyectoRouter = require('./router/proyectoRouter');
const {config} = require('dotenv');
const express = require('express');
const app = express();
require("dotenv").config()
app.use(express.json());
const port = process.env.port;


app.use('/api/pruebas', pruebasRouter);
app.use('/api/proyecto', proyectoRouter)
app.use('/api/tester', testerRouter);



app.listen(port,() => {
    console.log(`Server running at http://localhost:${port}`);
});