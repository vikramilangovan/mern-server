var express = require('express');
var router = express.Router();
var serverController = require('../controllers/serverController.js');

/*
 * GET
 */
router.get('/', serverController.list);

/*
 * GET
 */
router.get('/:id', serverController.show);

/*
 * POST
 */
router.post('/', serverController.create);

/*
 * PUT
 */
router.put('/:id', serverController.update);

/*
 * DELETE
 */
router.delete('/:id', serverController.remove);

module.exports = router;
