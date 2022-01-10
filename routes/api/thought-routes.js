const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    removeThought
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought)

router
    .route('/:id')
    .get(getThoughtById)
    .post(addThought)
    .put(updateThought)

router
    .route('/:userId/:thoughtId')
    .delete(removeThought)

module.exports = router;