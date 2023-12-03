const express = require('express');

const BookController = require('../controller/books')

const router = express.Router();

router.get('/', BookController.getAllBooks);

router.post('/', BookController.createNewBooks);

router.put('/:id', BookController.updateBooks);

router.delete('/:id', BookController.deleteBooks);


module.exports = router