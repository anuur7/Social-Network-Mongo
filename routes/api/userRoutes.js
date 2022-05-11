const router = require('express').Router();

const {
    getAllUsers,
    getOneUser,
    createUser,
    deleteOneUser,
    updateOneUser,
    newFriend,
    deleteFriend
} = require('../../controllers/userController.js');

// /api/users .. Get & Create
router.route('/')
.get(getAllUsers)
.post(createUser)

//Get, Delete, delete & update
router.route('/:userId')
.get(getOneUser)
.delete(deleteOneUser)
.put(updateOneUser) 

// friends add & remove
router.route(':userId/friends/:friendId')
.post(newFriend)
.delete(deleteFriend)



module.exports = router;