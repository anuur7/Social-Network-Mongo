const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById
} = require('../../controllers/thoughtController');

// just get all the thoughts. Get & create
router
.route('/')
 .get(getAllThoughts)

// get a thought by its id. Update & delete
router
.route('/:id')
.get(getThoughtById)



// create a new reaction per thought using its id
router
.route('/:thoughtId/reactions')

// delete a reaction to A THOUGHT using its ID
router
.route('/:thoughtId/reactions/:reactionId')


module.exports = router;