const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//API
app.use('/empleados', require('./api/empleados'));
app.use('/herramientas', require('./api/herramientas'));
app.use('/asignaciones', require('./api/asignaciones'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
