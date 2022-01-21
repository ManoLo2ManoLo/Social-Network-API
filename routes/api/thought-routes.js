const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
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

router
    .route('/reactions/:id')
    .put(addReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)

module.exports = router;