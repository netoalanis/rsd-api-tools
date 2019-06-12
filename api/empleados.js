const express = require('express');
const router = express.Router();
const empleados = require('../models/Empleados');

//GET /empleados
router.get('/', function (req, res) {
  res.json(empleados)
});

//GET /empleados/noempleado}
router.get('/:noempleado', function(req, res)  {
  const found = empleados.some(empleado => empleado.noempleado === req.params.noempleado);

  if (found) {
    res.json(empleados.filter(empleado => empleado.noempleado === req.params.noempleado));
  } else {
    res.status(400).json({ msg: `No se econtro empleado con el numero ${req.paramsnoempleado}` });
  }
});

// POST /empleados
router.post('/', function(req, res) {
  const empleado = {
    noempleado: req.body.noempleado,
    nombre: req.body.nombre,
    apellido: req.body.apellido
  };

  if (!empleado.noempleado || !empleado.nombre || !empleado.apellido) {
    return res.status(400).json({ msg: 'Favor de proporcionarnoempleado, nombre y apellido' });
  }

  empleados.push(empleado);
  res.json(empleados);
});

// 	PUT /empleados/noempleado}
router.put('/:noempleado', function(req, res) {
  const found = empleados.some(empleado => empleado.noempleado === req.params.noempleado);

  if (found) {
    const saveempleado = req.body;
    empleados.forEach(empleado => {
      if (empleado.noempleado === req.params.noempleado) {
      empleado.noempleado = saveempleado.noempleado ? saveempleado.noempleado : empleado.noempleado;
      empleado.nombre = saveempleado.nombre ? saveempleado.nombre : empleado.nombre;
      empleado.apellido = saveempleado.apellido ? saveempleado.apellido : empleado.apellido;

      res.json({ msg: 'empleado actualizado',empleado });
      }
    });
  } else {
    res.status(400).json({ msg: `No se encontro empleado con el numero ${req.params.noempleado}` });
  }
});

// 	DELETE /empleados/noempleado}

router.delete('/:noempleado', function(req, res) {
  const found = empleados.some(empleado => empleado.noempleado === req.params.noempleado);

  if (found) {
    empleados.splice(empleados.findIndex(empleado => empleado.noempleado === req.params.noempleado),1);
    res.json({
      msg: 'empleado Borrado', 
      // empleados: empleados.filter(empleado => empleado.noempleado !== req.params.noempleado)
       empleados: empleados
    });
  } else {
    res.status(400).json({ msg: `No se encontro empleado con el numero ${req.params.noempleado}` });
  }
});

module.exports = router;
