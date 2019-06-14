const express = require('express');
const router = express.Router();
const asignaciones = require('../models/Asignaciones');

// Gets todas las asignaciones
router.get('/', function(req, res) {
  res.json(asignaciones);
});

// 	GET /asignaciones/{empleado}
router.get('/emp/:empleado', function(req, res)  {
  const found = asignaciones.some(asignacion => asignacion.empleado === req.params.empleado);

  if (found) {
    res.json(asignaciones.filter(asignacion => asignacion.empleado === req.params.empleado));
  } else {
    res.status(400).json({ msg: `No se encontro esta herramienta asingada al empleado ${req.params.empleado}` });
  }
});

// 		GET /asignacion/{herramienta}
router.get('/her/:herramienta', function(req, res) {
  const found = asignaciones.some(asignacion => asignacion.herramienta === req.params.herramienta);

  if (found) {
    res.json(asignaciones.filter(asignacion => asignacion.herramienta === req.params.herramienta));
  } else {
    res.status(400).json({ msg: `No se encontro la herramienta ${req.params.herramienta} asignada a ningun empleado` });
  }
});

//	POST /asignacion
router.post('/', function(req, res) {
  const nextid = asignaciones.length + 1 ;
  const asignacion = {
    id : nextid,
    empleado: req.body.empleado,
    herramienta: req.body.herramienta,
    fecha: req.body.fecha
  };

  if (!asignacion.empleado || !asignacion.herramienta || !asignacion.fecha) {
    return res.status(400).json({ msg: 'Favor de incluir el empleado, la herramienta y la fecha de asignacion' });
  }

  asignaciones.push(asignacion);
  res.json(asignaciones);
});

// // 	PUT /asignacion/{id}
router.put('/:id', function(req, res) {
  const found = asignaciones.some(asignacion => asignacion.id === parseInt(req.params.id));

  if (found) {
    const saveasignacion = req.body;
    asignaciones.forEach(asignacion => {
      if (asignacion.id === parseInt(req.params.id)) {
        asignacion.empleado = saveasignacion.empleado ? saveasignacion.empleado : asignacion.empleado;
        asignacion.herramienta = saveasignacion.herramienta ? saveasignacion.herramienta : asignacion.herramienta;
        asignacion.fecha = saveasignacion.fecha ? saveasignacion.fecha : asignacion.fecha;

        res.json({ msg: 'Asignacion actualizada', asignacion });
      }
    });
  } else {
    res.status(400).json({ msg: `No se encontro la asignacion id ${req.params.id}` });
  }
});

 // 	DELETE /asignacion/{id}

router.delete('/:id', function(req, res) {
  const found = asignaciones.some(asignacion => asignacion.id === parseInt(req.params.id));

  if (found) {
    asignaciones.splice(asignaciones.findIndex(asignacion => asignacion.id === parseInt(req.params.id),1);
    res.json({
      msg: 'Asignacion borrada',
      //asignaciones: asignaciones.filter(asignacion => asignacion.id !== parseInt(req.params.id))
      asignaciones: asignaciones
    });
  } else {
    res.status(400).json({ msg: `No se encontro la asignacion con el id ${req.params.id}` });
  }
});

module.exports = router;
