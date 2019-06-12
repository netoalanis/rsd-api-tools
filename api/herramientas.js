const express = require('express');
const router = express.Router();
const herramientas = require('../models/Herramientas');

// 	GET /herramientas
router.get('/', function(req, res) {
  res.json(herramientas);
});

// GET /herramientas/{clave}
router.get('/:clave', function(req, res) {
  const found = herramientas.some(herramienta => herramienta.clave === req.params.clave);

  if (found) {
    res.json(herramientas.filter(herramienta => herramienta.clave === req.params.clave));
  } else {
    res.status(400).json({ msg: `No se encontro la herramienta con el clave ${req.params.clave}` });
  }
});

// 	POST /herramientas
router.post('/', function(req, res) {
  const herramienta = {
    clave: req.body.clave,
    nombre: req.body.nombre,
    fechacompra: req.body.fechacompra,
    asignada: req.body.asignada
  };

  if (!herramienta.clave || !herramienta.nombre || !herramienta.fechacompra || !herramienta.asignada) {
    return res.status(400).json({ msg: 'Favor de proporcionar clave, nombre, fechacompra, asignada' });
  }

  herramientas.push(herramienta);
  res.json(herramientas);
});

// PUT /herramientas/{clave}
router.put('/:clave', (req, res) => {
  const found = herramientas.some(herramienta => herramienta.clave === req.params.clave);

  if (found) {
    const saveherramienta = req.body;
    herramientas.forEach(herramienta => {
      if (herramienta.clave === req.params.clave) {
        herramienta.clave = saveherramienta.clave ? saveherramienta.clave : herramienta.clave;
        herramienta.nombre = saveherramienta.nombre ? saveherramienta.nombre : herramienta.nombre;
        herramienta.fechacompra = saveherramienta.fechacompra ? saveherramienta.fechacompra : herramienta.fechacompra;
        herramienta.asignada = saveherramienta.asignada ? saveherramienta.asignada : herramienta.asignada;

        res.json({ msg: 'Herramienta actualizada', herramienta });
      }
    });
  } else {
    res.status(400).json({ msg: `No se encontro la herramienta con la clave ${req.params.clave}` });
  }
});

// 	DELETE /herramientas/{clave}
router.delete('/:clave', (req, res) => {
  const found = herramientas.some(herramienta => herramienta.clave === req.params.clave);

  if (found) {
    herramientas.splice(herramientas.findIndex(herramienta => herramienta.clave === req.params.clave),1);
    res.json({
      msg: 'Herramienta Borrada',
      //herramientas: herramientas.filter(herramienta => herramienta.clave !== req.params.clave)
      herramientas : herramientas
    });
  } else {
    res.status(400).json({ msg: `No se encontro la herramienta con la clave ${req.params.clave}` });
  }
});

module.exports = router;
