const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Hola Express</h1>');
  });

router.get('/productos', (req, res) => {
    res.render('productos', { title: 'Productos' });
});

router.get('/clientes', (req, res) => {
    res.render('clientes', { title: 'Clientes' });
});

module.exports = router;