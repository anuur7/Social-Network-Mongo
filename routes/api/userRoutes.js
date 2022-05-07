const router = require('express').Router();

const {
    getAllUsers,
    getOneUser,
    createUser
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser)
router.route('/:userId').get(getOneUser) //update & delete
// friends add & remove


module.exports = router;