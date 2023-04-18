const {
    User
} = require('../models');

const userController = {

    //get all users
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'thoughts',
                //allows to remove __v from visuals
                select: ('-__v')
            })
            .populate({
                path: 'friends',
                select: ('-__v')
            })
            .select('-__v')
            // sort by descending order by the _id value
            .sort({
                _id: -1
            })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    //get one user by id
    getUserById({
        params
    }, res) {
        User.findOne({
                _id: params.id
            })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    //create user
    createUser({
        body
    }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

};

module.exports = userController;