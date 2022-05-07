const { user } = require('../config/connection');
const {User, Thought} = require('../models'); 

const userController = {
    getAllUsers(req, res) {
        User.find()
        .select('-__v')
        .then((allUsers) => {
            res.json(allUsers)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    }, 

    getOneUser(req, res) {
        User.findOne()
        .select('-__v')
        .populate('friends')
        .populate('thoughts')
        .then((oneUser) => {
            if(!oneUser) {
                return res.status(404).json({message: 'No user was found with this ID'}) 
            }
            res.json(oneUser)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    },

    createUser(req, res) {
        User.create(req.body)
        .then((user) => {
            res.json(user) 
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    }
}




module.exports = userController;