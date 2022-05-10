const router = require('express').Router();

const {
    getAllUsers,
    getOneUser,
    createUser,
    deleteOneUser,
    updateOneUser
} = require('../../controllers/userController.js');

// /api/users
router.route('/')
.get(getAllUsers)
.post(createUser)

router.route('/:userId')
.get(getOneUser)
.delete(deleteOneUser)
.put(updateOneUser) //update & delete

router.route(':userId/friends/:friendId')
// friends add & remove


module.exports = router;