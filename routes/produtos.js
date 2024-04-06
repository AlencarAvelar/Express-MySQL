const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produtoController');
const corMiddleware = require('../middlewares/corMiddleware');

/* GET produtos listing. */
router.get('/', produtoController.findAll);

/* PUT produtos listing. */
router.put('/', produtoController.update);

/* POST produtos listing. */
router.post('/', corMiddleware.validateColor, produtoController.save);

/* DELETE produtos listing. */
router.delete('/:id', produtoController.remove);

module.exports = router;